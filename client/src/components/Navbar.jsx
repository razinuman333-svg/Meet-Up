import React from 'react'
import { dummyUser } from '../assets/asset'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {

  const {isSignedIn , user}  = {isSignedIn:true , user:dummyUser}
  const location = useLocation()
  const userName = user?.firstName

  return (
    <header className='w-full max-w-305 mx-auto bg-white/90 backdrop-blur xl:rounded-b-xl
    sticky top-0 z-40 px-6 py-4 flex items-center justify-between border border-slate-200'>

      {/* logo and links */}

      <div className='flex items-center gap-6'>
        <Link to='/dashboard' className='flex items-center gap-1.5'>
        <img src='/logo.svg' className='size-6.5'/>
        <span className='text-2xl font-medium tracking-tight text-slate-900 flex
        items-center'>
          MeetUp<span className='text-primary'>.</span>
        </span>
        </Link>

      </div>
      {/* right profile */}
    </header>
  )
}

export default Navbar