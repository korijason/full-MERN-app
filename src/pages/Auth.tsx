import {SignedIn, SignedOut, SignUpButton, SignInButton, UserButton } from '@clerk/clerk-react'



export default function Auth() {
  return (
    <div className='bg-slate-500 h-screen flex justify-center items-center text-black border border-black' >
    <div className=''>
        <SignedOut className=''>
            <SignInButton mode='modal' />
              <br></br>
            <SignUpButton mode='modal' />
        </SignedOut>
        <SignedIn>
            <UserButton />
        </SignedIn>
    </div>
    </div>
  )
}
