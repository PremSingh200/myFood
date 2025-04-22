import React from 'react'
import aboutimg from '../assets/aboutimg.jpeg'

const AboutUs = () => {
  return (
    <div className='w-[90%]  mx-auto my-5 px-4 py-3'>
     <div className='md:flex justify-center items-center gap-8 p-3 md:flex-row-reverse '>
     <div className='md:w-[50%] md:mb-0 mb-4'><img src={aboutimg} alt="" srcset="" className='rounded-lg object-cover'/></div>
     <div className='md:w-[50%] flex justify-start items-start flex-col md:h-[60vh] '>
        <h2 className='text-[44px] font-bold underline mb-4'>Who are we?</h2>
        <p className='text-gray-500 text-[15px]'>Launched in 2010, Our technology platform connects customers, restaurant partners and delivery partners, serving their multiple needs. Customers use our platform to search and discover restaurants, read and write customer generated reviews and view and upload photos, order food delivery, book a table and make payments while dining-out at restaurants. On the other hand, we provide restaurant partners with industry-specific marketing tools which enable them to engage and acquire customers to grow their business while also providing a reliable and efficient last mile delivery service. We also operate a one-stop procurement solution, Hyperpure, which supplies high quality ingredients and kitchen products to restaurant partners. We also provide our delivery partners with transparent and flexible earning opportunities.</p>
      </div>
      
     </div>
    
    </div>
  )
}

export default AboutUs