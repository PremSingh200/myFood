import React, { useEffect, useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { IoChevronBackOutline } from "react-icons/io5";

const Hero = () => {
   
    const imgData=[
        {
            url:'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg'
        },
        {
            url:'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg'
        },
        {
            url:'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg'
        }

    ];
    const [slider,setSlider]=useState(0);
    const handlePlus=()=>{
        setSlider(slider==imgData.length-1?0:slider+1)
    }
    const handleMinus=()=>{
        setSlider(slider==0?imgData.length-1:slider-1)
    };
    useEffect(()=>{
        const sliderClear=setInterval(() => {
           handlePlus() 
        }, 2000)
        return()=>clearInterval(sliderClear)
    },[slider])
    
  return (
    <div>
        <div >
            <div className='w-[90%] mx-auto h-[80vh] my-5 relative'>
               {
                imgData.map((item,i)=>{
                    return(
                        <div key={i} className={`${slider===i?'block':'hidden'}`}>
                            <img src={item.url} alt="" className='w-full h-[80vh] rounded-2xl object-cover'  />
                        </div>
                    )

                })
               }
               <div className='w-full rounded-2xl mx-auto h-[80vh] bg-black opacity-50 absolute top-0 left-0'></div>
               <div className='w-full absolute text-center top-[50%] text-white text-[15px] md:text-2xl font-semibold'>
               <p >Welcome to the world of Tasty and Fresh Food</p>
               </div>
               <div className='flex justify-between w-full px-5 cursor-pointer absolute top-[54%] md:top-[50%] text-white'>
                <IoChevronBackOutline size={20} md:size={30} onClick={handlePlus}/>
                <IoIosArrowForward  size={20} md:size={30} onClick={handleMinus}/>
                </div>

            </div>
            
            
        </div>
    </div>
  )
}

export default Hero