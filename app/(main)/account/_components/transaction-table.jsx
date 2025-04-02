// "use client"
// import React from 'react'
// import {
//     Table,
//     TableBody,
//     TableCaption,
//     TableCell,
//     TableHead,
//     TableHeader,
//     TableRow,
//   } from "@/components/ui/table"
// import { Checkbox } from '@/components/ui/checkbox'
// import { format } from 'date-fns'
  

// const TransactionTable = ({transactions}) => {

// const filteredAndSortedTransaction = transactions;


// const handleSort = () => {};

//   return (
//     <div className='space-y-4'>
//       {/* Filter */}
//       {/* Transaction */}
//       <div className='rounded-md border'>
//       <Table>
//   <TableCaption>A list of your recent invoices.</TableCaption>
//   <TableHeader>
//     <TableRow>
//       <TableHead className="w-[50px]">
//         <Checkbox/>
//       </TableHead>
//       <TableHead className="cursor-pointer" onClick={() => handleSort("date")}>
//       <div className='flex items-center'>Date</div>
//       </TableHead>
//       <TableHead>Description</TableHead>
//       <TableHead className="cursor-pointer" onClick={() => handleSort("category")}>
//       <div className='flex items-center'>Category</div>
//       </TableHead>
//       <TableHead className="cursor-pointer" onClick={() => handleSort("amount")}>
//       <div className='flex items-center justify-end'>Amount</div>
//       </TableHead>
//       <TableHead>Recurring</TableHead>
//       <TableHead className='w-[50px]'/>
//     </TableRow>
//   </TableHeader>
//   <TableBody>
//   {filteredAndSortedTransaction.length === 0?(
//     <TableRow>
//       <TableCell colSpan={7} className='text-center text-muted-foreground'>
//         No Transactions Found
//       </TableCell>
//     </TableRow>
//   ):(
//      filteredAndSortedTransaction.map((transaction) => {
//   <TableRow key = {transaction.id}>
//       <TableCell>
//           <Checkbox/>
//       </TableCell>
//       <TableCell>
//         {format(new Date(transaction.date), "PP")}
//         </TableCell>
//       <TableCell>{transaction.description}</TableCell>
//       <TableCell>{transaction.category}</TableCell>
//       <TableCell className="text-right justify-end">{transaction.amount}</TableCell>
//     </TableRow>
//      })
//   )}
    
//   </TableBody>
// </Table>
//  </div>
//     </div>
//   )
// }

// export default TransactionTable



// "use client"
// import React from 'react'
// import {
//     Table,
//     TableBody,
//     TableCaption,
//     TableCell,
//     TableHead,
//     TableHeader,
//     TableRow,
// } from "@/components/ui/table"
// import { Checkbox } from '@/components/ui/checkbox'
// import { format } from 'date-fns'

// const TransactionTable = ({ transactions }) => {

//     const filteredAndSortedTransaction = transactions;

//     const handleSort = () => { };

//     return (
//         <div className='space-y-4'>
//             {/* Transaction Table */}
//             <div className='rounded-md border'>
//                 <Table>
//                     <TableCaption>A list of your recent invoices.</TableCaption>
//                     <TableHeader>
//                         <TableRow>
//                             <TableHead className="w-[50px]">
//                                 <Checkbox />
//                             </TableHead>
//                             <TableHead className="cursor-pointer text-white" onClick={() => handleSort("date")}>
//                                 <div className='flex items-center'>Date</div>
//                             </TableHead>
//                             <TableHead className='text-white'>Description</TableHead>
//                             <TableHead className="cursor-pointer text-white" onClick={() => handleSort("category")}>
//                                 <div className='flex items-center'>Category</div>
//                             </TableHead>
//                             <TableHead className="cursor-pointer text-white" onClick={() => handleSort("amount")}>
//                                 <div className='flex items-center justify-end'>Amount</div>
//                             </TableHead>
//                             <TableHead className="text-white">Recurring</TableHead>
//                             <TableHead className='w-[50px]' />
//                         </TableRow>
//                     </TableHeader>
//                     <TableBody>
//                         {filteredAndSortedTransaction.length === 0 ? (
//                             <TableRow>
//                                 <TableCell colSpan={7} className='text-center text-muted-foreground'>
//                                     No Transactions Found
//                                 </TableCell>
//                             </TableRow>
//                         ) : (
//                             filteredAndSortedTransaction.map((transaction) => (
//                                 <TableRow key={transaction.id}>
//                                     <TableCell>
//                                         <Checkbox />
//                                     </TableCell>
//                                     <TableCell className="text-muted-foreground">{format(new Date(transaction.date), "PP")}</TableCell>
//                                     <TableCell className="text-muted-foreground">{transaction.description}</TableCell>
//                                     <TableCell className="text-muted-foreground capitalize">
//                                     <span className=''>
//                                     {transaction.category}
//                                     </span>
//                                    </TableCell>
//                                     <TableCell className="text-right font-medium" >
//                                     {transaction.type === "EXPENSE"?"-":"+"}$
//                                     {transaction.amount.toFixed(2)}
//                                     </TableCell>
//                                     <TableCell className="text-muted-foreground">{transaction.recurring ? "Yes" : "No"}</TableCell>
//                                     <TableCell />
//                                 </TableRow>
//                             ))
//                         )}
//                     </TableBody>
//                 </Table>
//             </div>
//         </div>
//     )
// }

// export default TransactionTable


// "use client"
// import React from 'react'
// import {
//     Table,
//     TableBody,
//     TableCaption,
//     TableCell,
//     TableHead,
//     TableHeader,
//     TableRow,
// } from "@/components/ui/table"
// import { Checkbox } from '@/components/ui/checkbox'
// import { format } from 'date-fns'

// const TransactionTable = ({ transactions }) => {
//     const filteredAndSortedTransaction = transactions;

//     const handleSort = () => { };

//     return (
//         <div className='space-y-4'>
//             {/* Transaction Table */}
//             <div className='rounded-md border'>
//                 <Table>
//                     <TableCaption>A list of your recent invoices.</TableCaption>
//                     <TableHeader>
//                         <TableRow>
//                             <TableHead className="w-[50px]">
//                                 <Checkbox />
//                             </TableHead>
//                             <TableHead className="cursor-pointer text-white" onClick={() => handleSort("date")}>
//                                 <div className='flex items-center'>Date</div>
//                             </TableHead>
//                             <TableHead className='text-white'>Description</TableHead>
//                             <TableHead className="cursor-pointer text-white" onClick={() => handleSort("category")}>
//                                 <div className='flex items-center'>Category</div>
//                             </TableHead>
//                             <TableHead className="cursor-pointer text-white" onClick={() => handleSort("amount")}>
//                                 <div className='flex items-center justify-end'>Amount</div>
//                             </TableHead>
//                             <TableHead className="text-white">Recurring</TableHead>
//                             <TableHead className='w-[50px]' />
//                         </TableRow>
//                     </TableHeader>
//                     <TableBody>
//                         {filteredAndSortedTransaction.length === 0 ? (
//                             <TableRow>
//                                 <TableCell colSpan={7} className='text-center text-muted-foreground'>
//                                     No Transactions Found
//                                 </TableCell>
//                             </TableRow>
//                         ) : (
//                             filteredAndSortedTransaction.map((transaction) => (
//                                 <TableRow key={transaction.id}>
//                                     <TableCell>
//                                         <Checkbox />
//                                     </TableCell>
//                                     <TableCell className="text-muted-foreground">{format(new Date(transaction.date), "PP")}</TableCell>
//                                     <TableCell className="text-muted-foreground">{transaction.description}</TableCell>
//                                     <TableCell className="text-muted-foreground capitalize">
//                                         <span>{transaction.category}</span>
//                                     </TableCell>
//                                     <TableCell 
//                                         className={`text-right font-medium ${
//                                             transaction.type === "EXPENSE" ? "text-red-500" : "text-green-500"
//                                         }`}
//                                     >
//                                         {transaction.type === "EXPENSE" ? "-" : "+"}$
//                                         {transaction.amount.toFixed(2)}
//                                     </TableCell>
//                                     <TableCell className="text-muted-foreground">{transaction.recurring ? "Yes" : "No"}</TableCell>
//                                     <TableCell />
//                                 </TableRow>
//                             ))
//                         )}
//                     </TableBody>
//                 </Table>
//             </div>
//         </div>
//     )
// }

// export default TransactionTable


// "use client"
// import React, { useState, useEffect } from 'react'
// import {
//     Table,
//     TableBody,
//     TableCaption,
//     TableCell,
//     TableHead,
//     TableHeader,
//     TableRow,
// } from "@/components/ui/table"
// import { Checkbox } from '@/components/ui/checkbox'
// import { format } from 'date-fns'
// import { ChevronDown, ChevronUp, Filter, Search, X , Clock, RefreshCcw, MoreHorizontal} from 'lucide-react'

// import { Input } from '@/components/ui/input'
// import { Button } from '@/components/ui/button'
// import { Badge } from '@/components/ui/badge'
// import { 
//     Select, 
//     SelectContent, 
//     SelectItem, 
//     SelectTrigger, 
//     SelectValue 
// } from '@/components/ui/select'
// import { Card, CardContent } from '@/components/ui/card'
// import {categoryColors} from "@/data/categories"
// import {
//     Tooltip,
//     TooltipContent,
//     TooltipProvider,
//     TooltipTrigger,
//   } from "@/components/ui/tooltip"



//   import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuLabel,
//     DropdownMenuSeparator,
//     DropdownMenuTrigger,
//   } from "@/components/ui/dropdown-menu"
// import { useRouter } from 'next/navigation'
  
  

// const RECURRING_INTERVALS = {
//     DAILY:"Daily",
//     WEEKLY:"Weekly",
//     MONTHLY:"Monthly",
//     YEARLY:"Yearly",
// }


// const TransactionTable = ({ transactions }) => {
//     const router = useRouter();
//     // State for sorting and filtering
//     const [sortConfig, setSortConfig] = useState({ key: 'date', direction: 'desc' });
//     const [searchTerm, setSearchTerm] = useState('');
//     const [filters, setFilters] = useState({
//         type: 'all',
//         category: 'all',
//         recurring: 'all',
//         dateRange: 'all'
//     });
//     const [selectedTransactions, setSelectedTransactions] = useState([]);
//     const [allSelected, setAllSelected] = useState(false);

//     // Get unique categories from transactions
//     const categories = [...new Set(transactions.map(t => t.category))];

//     // Handle sorting
//     const handleSort = (key) => {
//         let direction = 'asc';
//         if (sortConfig.key === key && sortConfig.direction === 'asc') {
//             direction = 'desc';
//         }
//         setSortConfig({ key, direction });
//     };

//     // Handle search
//     const handleSearch = (e) => {
//         setSearchTerm(e.target.value);
//     };

//     // Handle filter changes
//     const handleFilterChange = (key, value) => {
//         setFilters(prev => ({ ...prev, [key]: value }));
//     };

//     // Clear all filters
//     const clearFilters = () => {
//         setFilters({
//             type: 'all',
//             category: 'all',
//             recurring: 'all',
//             dateRange: 'all'
//         });
//         setSearchTerm('');
//     };

//     // Handle checkbox selection
//     const toggleSelectAll = () => {
//         if (allSelected) {
//             // If deselecting all
//             setSelectedTransactions([]);
//             console.log("Deselected all transactions");
//         } else {
//             // If selecting all
//             const allIds = filteredAndSortedTransactions.map(t => t.id);
//             setSelectedTransactions(allIds);
//             console.log("Selected all transaction IDs:", allIds);
//         }
//         setAllSelected(!allSelected);
//     };

//     const toggleSelectTransaction = (id) => {
//         // If the transaction is being selected (not already in the array)
//         if (!selectedTransactions.includes(id)) {
//             console.log("Selected transaction ID:", id);
//         }
        
//         setSelectedTransactions(prev => 
//             prev.includes(id) 
//                 ? prev.filter(tId => tId !== id)
//                 : [...prev, id]
//         );
//     };

//     // Reset selection when filtered results change
//     useEffect(() => {
//         setAllSelected(false);
//         setSelectedTransactions([]);
//     }, [filters, searchTerm]);

//     // Apply filters and sorting
//     const filteredAndSortedTransactions = transactions
//         // Apply search filter
//         .filter(transaction => {
//             if (!searchTerm.trim()) return true;
//             return (
//                 transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                 transaction.category.toLowerCase().includes(searchTerm.toLowerCase())
//             );
//         })
//         // Apply type filter
//         .filter(transaction => {
//             if (filters.type === 'all') return true;
//             return transaction.type === filters.type;
//         })
//         // Apply category filter
//         .filter(transaction => {
//             if (filters.category === 'all') return true;
//             return transaction.category === filters.category;
//         })
//         // Apply recurring filter
//         .filter(transaction => {
//             if (filters.recurring === 'all') return true;
//             return (
//                 (filters.recurring === 'yes' && transaction.recurring) ||
//                 (filters.recurring === 'no' && !transaction.recurring)
//             );
//         })
//         // Apply date range filter
//         .filter(transaction => {
//             if (filters.dateRange === 'all') return true;
//             const transactionDate = new Date(transaction.date);
//             const today = new Date();
            
//             if (filters.dateRange === 'today') {
//                 return transactionDate.toDateString() === today.toDateString();
//             }
            
//             if (filters.dateRange === 'thisWeek') {
//                 const startOfWeek = new Date(today);
//                 startOfWeek.setDate(today.getDate() - today.getDay());
//                 return transactionDate >= startOfWeek;
//             }
            
//             if (filters.dateRange === 'thisMonth') {
//                 return (
//                     transactionDate.getMonth() === today.getMonth() &&
//                     transactionDate.getFullYear() === today.getFullYear()
//                 );
//             }
            
//             return true;
//         })
//         // Apply sorting
//         .sort((a, b) => {
//             if (sortConfig.key === 'date') {
//                 return sortConfig.direction === 'asc'
//                     ? new Date(a.date) - new Date(b.date)
//                     : new Date(b.date) - new Date(a.date);
//             }
            
//             if (sortConfig.key === 'amount') {
//                 return sortConfig.direction === 'asc'
//                     ? a.amount - b.amount
//                     : b.amount - a.amount;
//             }
            
//             if (sortConfig.key === 'category') {
//                 return sortConfig.direction === 'asc'
//                     ? a.category.localeCompare(b.category)
//                     : b.category.localeCompare(a.category);
//             }
            
//             return 0;
//         });

//     // Check if all filtered transactions are selected
//     useEffect(() => {
//         if (filteredAndSortedTransactions.length > 0 && 
//             selectedTransactions.length === filteredAndSortedTransactions.length &&
//             filteredAndSortedTransactions.every(t => selectedTransactions.includes(t.id))) {
//             setAllSelected(true);
//         } else {
//             setAllSelected(false);
//         }
//     }, [selectedTransactions, filteredAndSortedTransactions]);

//     // Render sort icon
//     const renderSortIcon = (key) => {
//         if (sortConfig.key !== key) return null;
//         return sortConfig.direction === 'asc' ? 
//             <ChevronUp className="ml-1 h-4 w-4" /> : 
//             <ChevronDown className="ml-1 h-4 w-4" />;
//     };

//     // Count active filters
//     const activeFilterCount = Object.values(filters).filter(value => value !== 'all').length;

//     return (
//         <Card className="bg-card shadow-md">
//             <CardContent className="p-6">
//                 <div className="space-y-4">
//                     {/* Search and Filter Controls */}
//                     <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
//                         <div className="relative w-full sm:w-64">
//                             <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
//                             <Input
//                                 placeholder="Search transactions..."
//                                 className="pl-8"
//                                 value={searchTerm}
//                                 onChange={handleSearch}
//                             />
//                             {searchTerm && (
//                                 <Button
//                                     variant="ghost"
//                                     size="sm"
//                                     className="absolute right-1 top-1.5 h-7 w-7 p-0"
//                                     onClick={() => setSearchTerm('')}
//                                 >
//                                     <X className="h-4 w-4" />
//                                 </Button>
//                             )}
//                         </div>
                        
//                         <div className="flex items-center gap-2">
//                             <DropdownMenu>
//                                 <DropdownMenuTrigger asChild>
//                                     <Button variant="outline" size="sm" className="flex items-center gap-1 bg-[#ffffff]">
//                                         <Filter className="h-4 w-4" />
//                                         Filters
//                                         {activeFilterCount > 0 && (
//                                             <Badge variant="secondary" className="ml-1 px-1 rounded-full">
//                                                 {activeFilterCount}
//                                             </Badge>
//                                         )}
//                                     </Button>
//                                 </DropdownMenuTrigger>
//                                 <DropdownMenuContent align="end" className="w-56">
//                                     <div className="p-2 space-y-4">
//                                         <div className="space-y-2">
//                                             <p className="text-sm font-medium">Transaction Type</p>
//                                             <Select
//                                                 value={filters.type}
//                                                 onValueChange={(value) => handleFilterChange('type', value)}
//                                             >
//                                                 <SelectTrigger className="w-full">
//                                                     <SelectValue placeholder="All Types" />
//                                                 </SelectTrigger>
//                                                 <SelectContent>
//                                                     <SelectItem value="all">All Types</SelectItem>
//                                                     <SelectItem value="EXPENSE">Expenses</SelectItem>
//                                                     <SelectItem value="INCOME">Income</SelectItem>
//                                                 </SelectContent>
//                                             </Select>
//                                         </div>
                                        
//                                         <div className="space-y-2">
//                                             <p className="text-sm font-medium">Category</p>
//                                             <Select
//                                                 value={filters.category}
//                                                 onValueChange={(value) => handleFilterChange('category', value)}
//                                             >
//                                                 <SelectTrigger className="w-full">
//                                                     <SelectValue placeholder="All Categories" />
//                                                 </SelectTrigger>
//                                                 <SelectContent>
//                                                     <SelectItem value="all">All Categories</SelectItem>
//                                                     {categories.map(category => (
//                                                         <SelectItem key={category} value={category}>
//                                                             {category}
//                                                         </SelectItem>
//                                                     ))}
//                                                 </SelectContent>
//                                             </Select>
//                                         </div>
                                        
//                                         <div className="space-y-2">
//                                             <p className="text-sm font-medium">Recurring</p>
//                                             <Select
//                                                 value={filters.recurring}
//                                                 onValueChange={(value) => handleFilterChange('recurring', value)}
//                                             >
//                                                 <SelectTrigger className="w-full">
//                                                     <SelectValue placeholder="All Transactions" />
//                                                 </SelectTrigger>
//                                                 <SelectContent>
//                                                     <SelectItem value="all">All Transactions</SelectItem>
//                                                     <SelectItem value="yes">Recurring Only</SelectItem>
//                                                     <SelectItem value="no">Non-recurring Only</SelectItem>
//                                                 </SelectContent>
//                                             </Select>
//                                         </div>
                                        
//                                         <div className="space-y-2">
//                                             <p className="text-sm font-medium">Date Range</p>
//                                             <Select
//                                                 value={filters.dateRange}
//                                                 onValueChange={(value) => handleFilterChange('dateRange', value)}
//                                             >
//                                                 <SelectTrigger className="w-full">
//                                                     <SelectValue placeholder="All Time" />
//                                                 </SelectTrigger>
//                                                 <SelectContent>
//                                                     <SelectItem value="all">All Time</SelectItem>
//                                                     <SelectItem value="today">Today</SelectItem>
//                                                     <SelectItem value="thisWeek">This Week</SelectItem>
//                                                     <SelectItem value="thisMonth">This Month</SelectItem>
//                                                 </SelectContent>
//                                             </Select>
//                                         </div>
                                        
//                                         <Button
//                                             variant="outline"
//                                             size="sm"
//                                             className="w-full bg-[#ffffff]"
//                                             onClick={clearFilters}
//                                             disabled={activeFilterCount === 0 && !searchTerm}
//                                         >
//                                             Clear All Filters
//                                         </Button>
//                                     </div>
//                                 </DropdownMenuContent>
//                             </DropdownMenu>
                            
//                             {selectedTransactions.length > 0 && (
//                                 <Badge variant="secondary" className="px-2 py-1">
//                                     {selectedTransactions.length} selected
//                                 </Badge>
//                             )}
//                         </div>
//                     </div>

//                     {/* Transaction Table */}
//                     <div className="rounded-md border overflow-hidden">
//                         <Table>
//                             <TableCaption>
//                                 {filteredAndSortedTransactions.length > 0 
//                                     ? `Showing ${filteredAndSortedTransactions.length} transactions` 
//                                     : 'No transactions found'}
//                             </TableCaption>
//                             <TableHeader>
//                                 <TableRow className="bg-muted/50">
//                                     <TableHead className="w-[50px]">
//                                         <Checkbox 
//                                             checked={allSelected}
//                                             onCheckedChange={toggleSelectAll}
//                                         />
//                                     </TableHead>
//                                     <TableHead 
//                                         className="cursor-pointer font-medium" 
//                                         onClick={() => handleSort("date")}
//                                     >
//                                         <div className="flex items-center">
//                                             Date
//                                             {renderSortIcon("date")}
//                                         </div>
//                                     </TableHead>
//                                     <TableHead className="font-medium">Description</TableHead>
//                                     <TableHead 
//                                         className="cursor-pointer font-medium" 
//                                         onClick={() => handleSort("category")}
//                                     >
//                                         <div className="flex items-center">
//                                             Category
//                                             {renderSortIcon("category")}
//                                         </div>
//                                     </TableHead>
//                                     <TableHead 
//                                         className="cursor-pointer font-medium text-right" 
//                                         onClick={() => handleSort("amount")}
//                                     >
//                                         <div className="flex items-center justify-end">
//                                             Amount
//                                             {renderSortIcon("amount")}
//                                         </div>
//                                     </TableHead>
//                                     <TableHead className="font-medium">Recurring</TableHead>
//                                 </TableRow>
//                             </TableHeader>
//                             <TableBody>
//                                 {filteredAndSortedTransactions.length === 0 ? (
//                                     <TableRow>
//                                         <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
//                                             No transactions found matching your filters
//                                         </TableCell>
//                                     </TableRow>
//                                 ) : (
//                                     filteredAndSortedTransactions.map((transaction) => (
//                                         <TableRow 
//                                             key={transaction.id}
//                                             className={selectedTransactions.includes(transaction.id) ? "bg-muted/30" : ""}
//                                         >
//                                             <TableCell>
//                                                 <Checkbox 
//                                                     checked={selectedTransactions.includes(transaction.id)}
//                                                     onCheckedChange={() => toggleSelectTransaction(transaction.id)}
//                                                 />
//                                             </TableCell>
//                                             <TableCell>
//                                                 {format(new Date(transaction.date), "MMM d, yyyy")}
//                                             </TableCell>
//                                             <TableCell className="max-w-xs truncate">
//                                                 {transaction.description}
//                                             </TableCell>
//                                             <TableCell>
//                                                 <Badge variant="outline" className="capitalize" style={{
//                                                     background: categoryColors[transaction.category]
//                                                 }} >
//                                                     {transaction.category}
//                                                 </Badge>
//                                             </TableCell>
//                                             <TableCell 
//                                                 className={`text-right font-medium ${
//                                                     transaction.type === "EXPENSE" ? "text-red-500" : "text-green-500"
//                                                 }`}
//                                             >
//                                                 {transaction.type === "EXPENSE" ? "-" : "+"}$
//                                                 {transaction.amount.toFixed(2)}
//                                             </TableCell>
//                                             <TableCell>
//                                                {transaction.isRecurring?(
//                                                 <TooltipProvider>
//                                             <Tooltip>
//                                              <TooltipTrigger>
//                                              <Badge variant="outline" className="gap-1 bg-purple-100 text-purple-700 hover:bg-purple-200">
//                                                 <RefreshCcw className="h-3 w-3"/>
//                                                {RECURRING_INTERVALS[
//                                                 transaction.recurringInterval
//                                                 ]
//                                                 }
//                                                 </Badge>
//                                              </TooltipTrigger>
//                                               <TooltipContent>
//                                                  <div className='text-sm'>
//                                                         <div className="font-medium">Next Date:</div>
//                                                         <div>
//                                                             {format(new Date(transaction.nextRecurringDate),"PP")}
//                                                         </div>
//                                                  </div>
//                                                </TooltipContent>
//                                          </Tooltip>
//                                       </TooltipProvider>
//                                             ):(
//                                                 <Badge variant="outline" className="gap-1 text-white bg-[#000000]">
//                                                 <Clock className="h-3 w-3"/>
//                                                 One-time
//                                                 </Badge>
//                                                 )}
//                                             </TableCell>
//                                             <TableCell>
//                                             <DropdownMenu>
//                                           <DropdownMenuTrigger asChild>
//                                           <Button className='h-8 w-8 p-0' variant="ghost"> <MoreHorizontal className='h-4 w-4'/> </Button>
//                                           </DropdownMenuTrigger>
//                                            <DropdownMenuContent>
//                                           <DropdownMenuLabel onClick={() => 
//                                           router.push(
//                                             `/transaction/create?edit=${transaction.id}`
//                                           )
//                                           }>Edit</DropdownMenuLabel>
//                                            <DropdownMenuSeparator />
//                                            <DropdownMenuItem className="text-destructive" 
//                                         //    onClick={() => deleteFn([transaction.id])}
//                                            >Delete</DropdownMenuItem>
//                                          </DropdownMenuContent>
//                                          </DropdownMenu>

//                                             </TableCell>
//                                         </TableRow>
//                                     ))
//                                 )}
//                             </TableBody>
//                         </Table>
//                     </div>
//                 </div>
//             </CardContent>
//         </Card>
//     )
// }

// export default TransactionTable


"use client"
import React, { useState, useEffect } from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Checkbox } from '@/components/ui/checkbox'
import { format } from 'date-fns'
import { ChevronDown, ChevronUp, Filter, Search, X, Clock, RefreshCcw, MoreHorizontal, Trash2 } from 'lucide-react'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
    Select, 
    SelectContent, 
    SelectItem, 
    SelectTrigger, 
    SelectValue 
} from '@/components/ui/select'
import { Card, CardContent } from '@/components/ui/card'
import {categoryColors} from "@/data/categories"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"



  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { useRouter } from 'next/navigation'
import useFetch from '@/hooks/use-fetch'
import { bulkDeleteTransactions } from '@/actions/accounts'
import { toast } from 'sonner'
import { BarLoader } from 'react-spinners'
  
  

const RECURRING_INTERVALS = {
    DAILY:"Daily",
    WEEKLY:"Weekly",
    MONTHLY:"Monthly",
    YEARLY:"Yearly",
}




const TransactionTable = ({ transactions }) => {
    const router = useRouter();
    // State for sorting and filtering
    
    const [sortConfig, setSortConfig] = useState({ key: 'date', direction: 'desc' });
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({
        type: 'all',
        category: 'all',
        recurring: 'all',
        dateRange: 'all'
    });
    const [selectedTransactions, setSelectedTransactions] = useState([]);
    const [allSelected, setAllSelected] = useState(false);

    // Get unique categories from transactions
    const categories = [...new Set(transactions.map(t => t.category))];

    // Handle sorting
    const handleSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    // Handle search
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    // Handle filter changes
    const handleFilterChange = (key, value) => {
        setFilters(prev => ({ ...prev, [key]: value }));
    };

    // Clear all filters
    const clearFilters = () => {
        setFilters({
            type: 'all',
            category: 'all',
            recurring: 'all',
            dateRange: 'all'
        });
        setSearchTerm('');
    };

    // Handle checkbox selection
    const toggleSelectAll = () => {
        if (allSelected) {
            // If deselecting all
            setSelectedTransactions([]);
            console.log("Deselected all transactions");
        } else {
            // If selecting all
            const allIds = filteredAndSortedTransactions.map(t => t.id);
            setSelectedTransactions(allIds);
            console.log("Selected all transaction IDs:", allIds);
        }
        setAllSelected(!allSelected);
    };

    const toggleSelectTransaction = (id) => {
        // If the transaction is being selected (not already in the array)
        if (!selectedTransactions.includes(id)) {
            console.log("Selected transaction ID:", id);
        }
        
        setSelectedTransactions(prev => 
            prev.includes(id) 
                ? prev.filter(tId => tId !== id)
                : [...prev, id]
        );
    };


    const {
        loading: deleteLoading,
        fn:deleteFn,
        data: deleted
    } = useFetch(bulkDeleteTransactions);
    // Handle delete transactions
    const handleBulkDelete = async () => {
        // // Placeholder for delete functionality
        // console.log("Deleting transactions:", selectedTransactions);
        // // Implement actual delete logic here
        // // After successful deletion:
        // setSelectedTransactions([]);
        if(
            !window.confirm(
                `Are you sure you want to delete ${selectedTransactions.length} transaction?`
            )
        ) {
            return ;
        }
        deleteFn(selectedTransactions);
    };

    useEffect(() => { 
        if(deleted && !deleteLoading){
            toast.success("Transaction deleted successfully");
        }
    },[deleted,deleteLoading])


    // Reset selection when filtered results change
    useEffect(() => {
        setAllSelected(false);
        setSelectedTransactions([]);
    }, [filters, searchTerm]);

    // Apply filters and sorting
    const filteredAndSortedTransactions = transactions
        // Apply search filter
        .filter(transaction => {
            if (!searchTerm.trim()) return true;
            return (
                transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                transaction.category.toLowerCase().includes(searchTerm.toLowerCase())
            );
        })
        // Apply type filter
        .filter(transaction => {
            if (filters.type === 'all') return true;
            return transaction.type === filters.type;
        })
        // Apply category filter
        .filter(transaction => {
            if (filters.category === 'all') return true;
            return transaction.category === filters.category;
        })
        // Apply recurring filter
        .filter(transaction => {
            if (filters.recurring === 'all') return true;
            return (
                (filters.recurring === 'yes' && transaction.recurring) ||
                (filters.recurring === 'no' && !transaction.recurring)
            );
        })
        // Apply date range filter
        .filter(transaction => {
            if (filters.dateRange === 'all') return true;
            const transactionDate = new Date(transaction.date);
            const today = new Date();
            
            if (filters.dateRange === 'today') {
                return transactionDate.toDateString() === today.toDateString();
            }
            
            if (filters.dateRange === 'thisWeek') {
                const startOfWeek = new Date(today);
                startOfWeek.setDate(today.getDate() - today.getDay());
                return transactionDate >= startOfWeek;
            }
            
            if (filters.dateRange === 'thisMonth') {
                return (
                    transactionDate.getMonth() === today.getMonth() &&
                    transactionDate.getFullYear() === today.getFullYear()
                );
            }
            
            return true;
        })
        // Apply sorting
        .sort((a, b) => {
            if (sortConfig.key === 'date') {
                return sortConfig.direction === 'asc'
                    ? new Date(a.date) - new Date(b.date)
                    : new Date(b.date) - new Date(a.date);
            }
            
            if (sortConfig.key === 'amount') {
                return sortConfig.direction === 'asc'
                    ? a.amount - b.amount
                    : b.amount - a.amount;
            }
            
            if (sortConfig.key === 'category') {
                return sortConfig.direction === 'asc'
                    ? a.category.localeCompare(b.category)
                    : b.category.localeCompare(a.category);
            }
            
            return 0;
        });

    // Check if all filtered transactions are selected
    useEffect(() => {
        if (filteredAndSortedTransactions.length > 0 && 
            selectedTransactions.length === filteredAndSortedTransactions.length &&
            filteredAndSortedTransactions.every(t => selectedTransactions.includes(t.id))) {
            setAllSelected(true);
        } else {
            setAllSelected(false);
        }
    }, [selectedTransactions, filteredAndSortedTransactions]);

    // Render sort icon
    const renderSortIcon = (key) => {
        if (sortConfig.key !== key) return null;
        return sortConfig.direction === 'asc' ? 
            <ChevronUp className="ml-1 h-4 w-4" /> : 
            <ChevronDown className="ml-1 h-4 w-4" />;
    };

    // Count active filters
    const activeFilterCount = Object.values(filters).filter(value => value !== 'all').length;

    return (
        <>
        {deleteLoading && (
        <BarLoader className="mt-4" width={"100%"} color="#9333ea" />
      )}
        <Card className="bg-card shadow-md">
            <CardContent className="p-6">
                <div className="space-y-4">
                    {/* Search and Filter Controls */}
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                        <div className="relative w-full sm:w-64">
                            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Search transactions..."
                                className="pl-8"
                                value={searchTerm}
                                onChange={handleSearch}
                            />
                            {searchTerm && (
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="absolute right-1 top-1.5 h-7 w-7 p-0"
                                    onClick={() => setSearchTerm('')}
                                >
                                    <X className="h-4 w-4" />
                                </Button>
                            )}
                        </div>
                        
                        <div className="flex items-center gap-2">
                            {selectedTransactions.length > 0 && (
                                <Button 
                                    variant="destructive" 
                                    size="sm" 
                                    className="flex items-center gap-1"
                                    onClick={handleBulkDelete}
                                >
                                    <Trash2 className="h-4 w-4" />
                                    Delete
                                </Button>
                            )}

                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" size="sm" className="flex items-center gap-1 bg-[#ffffff]">
                                        <Filter className="h-4 w-4" />
                                        Filters
                                        {activeFilterCount > 0 && (
                                            <Badge variant="secondary" className="ml-1 px-1 rounded-full">
                                                {activeFilterCount}
                                            </Badge>
                                        )}
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-56">
                                    <div className="p-2 space-y-4">
                                        <div className="space-y-2">
                                            <p className="text-sm font-medium">Transaction Type</p>
                                            <Select
                                                value={filters.type}
                                                onValueChange={(value) => handleFilterChange('type', value)}
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="All Types" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="all">All Types</SelectItem>
                                                    <SelectItem value="EXPENSE">Expenses</SelectItem>
                                                    <SelectItem value="INCOME">Income</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        
                                        <div className="space-y-2">
                                            <p className="text-sm font-medium">Category</p>
                                            <Select
                                                value={filters.category}
                                                onValueChange={(value) => handleFilterChange('category', value)}
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="All Categories" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="all">All Categories</SelectItem>
                                                    {categories.map(category => (
                                                        <SelectItem key={category} value={category}>
                                                            {category}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        
                                        <div className="space-y-2">
                                            <p className="text-sm font-medium">Recurring</p>
                                            <Select
                                                value={filters.recurring}
                                                onValueChange={(value) => handleFilterChange('recurring', value)}
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="All Transactions" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="all">All Transactions</SelectItem>
                                                    <SelectItem value="yes">Recurring Only</SelectItem>
                                                    <SelectItem value="no">Non-recurring Only</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        
                                        <div className="space-y-2">
                                            <p className="text-sm font-medium">Date Range</p>
                                            <Select
                                                value={filters.dateRange}
                                                onValueChange={(value) => handleFilterChange('dateRange', value)}
                                            >
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="All Time" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="all">All Time</SelectItem>
                                                    <SelectItem value="today">Today</SelectItem>
                                                    <SelectItem value="thisWeek">This Week</SelectItem>
                                                    <SelectItem value="thisMonth">This Month</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="w-full bg-[#ffffff]"
                                            onClick={clearFilters}
                                            disabled={activeFilterCount === 0 && !searchTerm}
                                        >
                                            Clear All Filters
                                        </Button>
                                    </div>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            
                            {selectedTransactions.length > 0 && (
                                <Badge variant="secondary" className="px-2 py-1">
                                    {selectedTransactions.length} selected
                                </Badge>
                            )}
                        </div>
                    </div>

                    {/* Transaction Table */}
                    <div className="rounded-md border overflow-hidden">
                        <Table>
                            <TableCaption>
                                {filteredAndSortedTransactions.length > 0 
                                    ? `Showing ${filteredAndSortedTransactions.length} transactions` 
                                    : 'No transactions found'}
                            </TableCaption>
                            <TableHeader>
                                <TableRow className="bg-muted/50">
                                    <TableHead className="w-[50px]">
                                        <Checkbox 
                                            checked={allSelected}
                                            onCheckedChange={toggleSelectAll}
                                        />
                                    </TableHead>
                                    <TableHead 
                                        className="cursor-pointer font-medium" 
                                        onClick={() => handleSort("date")}
                                    >
                                        <div className="flex items-center">
                                            Date
                                            {renderSortIcon("date")}
                                        </div>
                                    </TableHead>
                                    <TableHead className="font-medium">Description</TableHead>
                                    <TableHead 
                                        className="cursor-pointer font-medium" 
                                        onClick={() => handleSort("category")}
                                    >
                                        <div className="flex items-center">
                                            Category
                                            {renderSortIcon("category")}
                                        </div>
                                    </TableHead>
                                    <TableHead 
                                        className="cursor-pointer font-medium text-right" 
                                        onClick={() => handleSort("amount")}
                                    >
                                        <div className="flex items-center justify-end">
                                            Amount
                                            {renderSortIcon("amount")}
                                        </div>
                                    </TableHead>
                                    <TableHead className="font-medium">Recurring</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredAndSortedTransactions.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                                            No transactions found matching your filters
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    filteredAndSortedTransactions.map((transaction) => (
                                        <TableRow 
                                            key={transaction.id}
                                            className={selectedTransactions.includes(transaction.id) ? "bg-muted/30" : ""}
                                        >
                                            <TableCell>
                                                <Checkbox 
                                                    checked={selectedTransactions.includes(transaction.id)}
                                                    onCheckedChange={() => toggleSelectTransaction(transaction.id)}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                {format(new Date(transaction.date), "MMM d, yyyy")}
                                            </TableCell>
                                            <TableCell className="max-w-xs truncate">
                                                {transaction.description}
                                            </TableCell>
                                            <TableCell>
                                                <Badge variant="outline" className="capitalize" style={{
                                                    background: categoryColors[transaction.category]
                                                }} >
                                                    {transaction.category}
                                                </Badge>
                                            </TableCell>
                                            <TableCell 
                                                className={`text-right font-medium ${
                                                    transaction.type === "EXPENSE" ? "text-red-500" : "text-green-500"
                                                }`}
                                            >
                                                {transaction.type === "EXPENSE" ? "-" : "+"}$
                                                {transaction.amount.toFixed(2)}
                                            </TableCell>
                                            <TableCell>
                                               {transaction.isRecurring?(
                                                <TooltipProvider>
                                            <Tooltip>
                                             <TooltipTrigger>
                                             <Badge variant="outline" className="gap-1 bg-purple-100 text-purple-700 hover:bg-purple-200">
                                                <RefreshCcw className="h-3 w-3"/>
                                               {RECURRING_INTERVALS[
                                                transaction.recurringInterval
                                                ]
                                                }
                                                </Badge>
                                             </TooltipTrigger>
                                              <TooltipContent>
                                                 <div className='text-sm'>
                                                        <div className="font-medium">Next Date:</div>
                                                        <div>
                                                            {format(new Date(transaction.nextRecurringDate),"PP")}
                                                        </div>
                                                 </div>
                                               </TooltipContent>
                                         </Tooltip>
                                      </TooltipProvider>
                                            ):(
                                                <Badge variant="outline" className="gap-1 text-white bg-[#000000]">
                                                <Clock className="h-3 w-3"/>
                                                One-time
                                                </Badge>
                                                )}
                                            </TableCell>
                                            <TableCell>
                                            <DropdownMenu>
                                          <DropdownMenuTrigger asChild>
                                          <Button className='h-8 w-8 p-0' variant="ghost"> <MoreHorizontal className='h-4 w-4'/> </Button>
                                          </DropdownMenuTrigger>
                                           <DropdownMenuContent>
                                          <DropdownMenuLabel onClick={() => 
                                          router.push(
                                            `/transaction/create?edit=${transaction.id}`
                                          )
                                          }>Edit</DropdownMenuLabel>
                                           <DropdownMenuSeparator />
                                           <DropdownMenuItem className="text-destructive" 
                                        onClick={() => deleteFn([transaction.id])}
                                           >Delete</DropdownMenuItem>
                                         </DropdownMenuContent>
                                         </DropdownMenu>

                                            </TableCell>
                                        </TableRow>
                                    ))
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </CardContent>
        </Card>
        </>
    )
}

export default TransactionTable