import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-black text-white' >
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-4 justify-items-start pl-4 md:justify-items-center items-center py-5 '>
        <div>
        <div className="logo font-bold "><p>My<span className='text-yellow-500'>Food</span></p></div>
        <p>© 2025 MyFood Limited</p>
        </div>
        <div>
            <h1 className='text-[25px] mb-3 font-bold'>Company</h1>
            <p className='text-[20px] mb-2'>About Us</p>
            <p className='text-[20px] mb-2'>MyFood Corporate</p>
            <p className='text-[20px] mb-2'>Careers</p>
            <p className='text-[20px] mb-2'>Teams</p>
        </div>
        <div>
            <h2 className='text-[25px] mb-3 font-bold'>Contact Us</h2>
            <p className='text-[20px] mb-2 cursor-pointer'>Help & Support</p>
            <p className='text-[20px] mb-2 cursor-pointer'>Partner With Us</p>

        </div>
        <div>
            <h2 className='text-[25px] mb-3 font-bold'>Legal</h2>
            <p className='text-[20px] mb-2 cursor-pointer'>Terms & Conditions</p>
            <p className='text-[20px] mb-2 cursor-pointer'>Privacy Policy</p>
            <p className='text-[20px] mb-2 cursor-pointer'>Cookie Policy</p>
            <p className='text-[20px] mb-2 cursor-pointer'>Investors Relations</p>

        </div>
        </div>
    </div>
  )
}

export default Footer