"use server"

import {auth} from "@clerk/nextjs/server"
import {db} from "@/lib/prisma"
import { revalidatePath } from "next/cache";

const serializeTransaction  = (obj) => {
    const serialized = {...obj};

    if(obj.balance){
        serialized.balance = obj.balance.toNumber();
    }

    if(obj.amount){
        serialized.amount = obj.amount.toNumber();
    }

    return serialized;
};

export async function updateDefaultAccount(accountId) {

    try {
        const {userId} = await auth();
        if(!userId) throw new Error("unauth");
    
        const user = await db.user.findUnique({
            where:{clerkUserId: userId}
        });
        if(!user) {
            throw new Error("user not found")
        }

        await db.account.updateMany({
            where:{userId: user.id , isDefault: true},
            data: {isDefault: false}
        });

        const account = await db.account.update({
            where:{
                id:accountId,
                userId:user.id
            },
            data:{isDefault:true}
        });
        revalidatePath("/dashboard");
        return {success : true , data : serializeTransaction(account)};
        
    } catch (error) {
        return {success : false , error:error.message};
    }    
}


//fetching transaction
export async function getAccountWithTransaction(accountId) {
   try {
    
    const {userId} = await auth();
    if(!userId) throw new Error("unauth");

    const user = await db.user.findUnique({
        where:{clerkUserId: userId}
    });
    if(!user) {
        throw new Error("user not found")
    }


   const account = await db.account.findUnique({
    where:{
        id:accountId,
        userId:user.id
    },
    include:{
        transactions:{
            orderBy:{date:"desc"},
        },
        _count:{
            select:{transactions:true},
        },
    },
   }) ;

   if(!account) return null;
    
   return {
    ...serializeTransaction(account),
    transactions:account.transactions.map(serializeTransaction),
   };

   } catch (error) {
    return {success:false , error:error.message};
    
   }
    
}



// export async function bulkDeleteTransactions(transactionIds){
//  try {
//     const {userId} =  await auth();
//     if(!userId) throw new Error("Unauthorized");

// const user = await db.user.findUnique({
//     where: {clerkUserId:userId},
// });

// if(!user){
//     throw new Error("User not found");
// }


// const transactions = await db.transaction.findMany({
//     where:{
//         id: {in:transactionIds},
//         userId: user.id,
//     },
// })

// const accountBalanceChanges = transactions.reduce((acc,transaction) => {
//     const change = transaction.type === "EXPENSE"
//     ? transaction.amount
//     : -transaction.amount;
//     acc[transaction.accountId] = (acc[transaction.accountId] || 0) + change;
//     return acc;
// },{})

//  } catch (error) {
    
//  }    
// }


///ai wala

export async function bulkDeleteTransactions(transactionIds) {
    try {
        const { userId } = await auth();
        if (!userId) throw new Error("Unauthorized");

        const user = await db.user.findUnique({
            where: { clerkUserId: userId },
            select: { id: true }
        });
        if (!user) throw new Error("User not found");

        const transactions = await db.transaction.findMany({
            where: {
                id: { in: transactionIds },
                userId: user.id,
            },
            select: {
                id: true,
                type: true,
                amount: true,
                accountId: true
            }
        });

        const accountBalanceChanges = transactions.reduce((acc, transaction) => {
            const change = transaction.type === "EXPENSE" 
                ? transaction.amount 
                : -transaction.amount;
            acc[transaction.accountId] = (acc[transaction.accountId] || 0) + change;
            return acc;
        }, {});

        await db.$transaction(async (prisma) => {
            await prisma.transaction.deleteMany({
                where: {
                    id: { in: transactions.map(t => t.id) },
                    userId: user.id
                }
            });

            for (const [accountId, change] of Object.entries(accountBalanceChanges)) {
                await prisma.account.update({
                    where: { id: accountId },
                    data: { balance: { increment: change } }
                });
            }
        });

        return { success: true, message: `${transactions.length} transactions deleted` };

    } catch (error) {
        console.error("Bulk delete error:", error);
        return { 
            success: false, 
            error: error.message || "Failed to delete transactions",
            details: error instanceof Error ? error.stack : null
        };
    }
}



