import React from 'react'

function Navbar() {
  return (
    <div className='bg-[#3950ae] w-full '>
        <nav className='flex justify-between items-center h-16 px-8 text-white'>
            <div className="logo font-bold text-lg">Currency Convertor</div>
            <ul className='flex justify-between gap-10 items-center'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Services</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar