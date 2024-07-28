import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-slate-700 text-white p-3 fixed w-full top-0'>
      <div className='logo mx-9'> 
        <span className='font-bold text-xl'>iTask</span>
      </div>
      <ul className='flex gap-10 mx-9'>
        <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all'>Your Task</li>
      </ul>
    </nav>
  )
}

export default Navbar

