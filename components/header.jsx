import React from 'react'
import { SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/nextjs'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { LayoutDashboard, PenBox } from 'lucide-react'
import {checkUser} from '@/lib/checkUser'

const Header = async () => {
await checkUser();
  return (
    <div className='fixed top-0 w-full backdrop-blur-md z-50   transparent'>

    <nav className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <Link href='/'>
        <Image src='/logo.png' alt='e^x' width={200} height={100} className='h-12 w-[50px] object-contain' />
 
        </Link>
        <div className='flex items-center gap-2'>
        <SignedIn>
            <Link href='/dashboard' className='text-gray-400 hover:text-blue-600 flex items-center gap-2'>
            <Button variant='outline'>
            <LayoutDashboard size={18}/>
            <span className='hidden md:inline'>Dashboard</span></Button>
            </Link>

            <Link href='/transaction/create'>
            <Button  className='flex items-center gap-2'>
            <PenBox size={18}/>
            <span className='hidden md:inline'>Add Transaction</span></Button>
            </Link>
        </SignedIn>

        <SignedOut>
             <SignInButton forceRedirectUrl='/dashboard'>
              <Button  className="bg-white text-black font-semibold hover:bg-[#6A4CAF] animate-bounce">Login</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton  appearance={
                {
                    elements: {
                        avatarBox: 'h-10 w-10',
                    }
                }
            }/>
          </SignedIn>

        </div>
    
             
          </nav>
    </div>
  )
}

export default Header
