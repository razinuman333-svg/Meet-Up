import React from 'react'

const Login = ({mode}) => {
  return (
    <div className="min-h-screen w-full bg-[url('/login_bg.png')] text-slate-800 p-4 md:p-6 lg:p-8 
    flex items-center justify-center font-sans">

      <div className='w-full flex justify-center py-2'>
        {mode}
        </div>

        
    </div>
  )
}

export default Login