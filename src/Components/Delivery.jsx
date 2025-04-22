import React from 'react'

const Delivery = () => {
    return (
        <div className='w-full px-4 py-3'>
            <h3 className='text-center text-3xl font-bold text-yellow-500'>Quick Delivery App</h3>
            <div className='flex justify-center items-center gap-5 flex-wrap'>
                <div>
                    <img src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp" className='w-[550px]' />
                </div>
                <div>
                    <p className='text-3xl text-green-600 font-bold'>Get The App</p>
                    <h2 className='font-bold text-[20px]'>The Fatest Food Delivery App In India</h2>
                    <div className='bg-black text-white w-[150px] rounded-md my-3 py-[15px] text-center cursor-pointer '>Get Started</div>
                </div>
                
            </div>
        </div>
    )
}

export default Delivery