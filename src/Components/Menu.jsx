import React, { useContext, useState } from 'react'
import MenuCard from './MenuCard'
// import food_items from '../Food'

import { dataContext } from '../Context/UserContext';
import food_items from './Food';
import {Link} from 'react-router-dom'



const Menu = () => {
  
  let { cate, setCate } = useContext(dataContext)
  

  return (
    <div className='w-[90%]  mx-auto my-5 px-4 py-3'>
      <div className='flex justify-between items-center'><h2 className='font-bold text-xl mb-2'>Top Dishes For You</h2>
      <Link to='/ourfoods'><div className='text-[15px] underline cursor-pointer font-semibold hover:text-yellow-500 transition-all'>See More..</div></Link>
      </div>
      
      
     <div className='mt-4 overflow-x-auto whitespace-nowrap scrollbar-hide'>
    
        
        {cate.slice(0,6).map((item) => (
           <div className=' inline-block mr-4' >
            <MenuCard name={item.food_name} image={item.food_image} price={item.price} type={item.food_type} id={item.id} />
          
          </div>
        ))}
      
     </div>
    </div>
  )
}

export default Menu