import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between p-3 bg-violet-900 text-white'>
        <div className="logo">
            <span className='text-lg font-bold mx-4'>iTasks</span>
        </div>
      <ul className='flex gap-5'>
        <li className=' hover:font-bold cursor-pointer'>Home</li>
        <li className=' hover:font-bold cursor-pointer'>Your tasks</li>
      </ul>
    </nav>
  )
}

export default Navbar
