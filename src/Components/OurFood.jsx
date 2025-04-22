
import React, { useContext, useEffect, useState } from 'react'
import MenuCard from './MenuCard'
import { FaSearch } from "react-icons/fa";
// import food_items from '../Food'

import { dataContext } from '../Context/UserContext';
import food_items from './Food';
import { Link } from 'react-router-dom'
import { RxCross1 } from "react-icons/rx";


const OurFood = () => {
    let { search, setSearch, cate, setCate, input, setInput } = useContext(dataContext)

    useEffect(() => {
        let newlist = food_items.filter((item) => item.food_name.toLowerCase().includes(input))
        setCate(newlist)
    }, [input])

    const foodBtn = ['All', 'Breakfast', 'Soups', 'Pasta', 'Main Course', 'Pizza', 'Burger']
    {console.log(input)}

    function filterFood(category) {
        if (category === 'All') {
            setCate(food_items)
        } else {
            let newList = food_items.filter((item) => (item.food_category === category))
            setCate(newList)

        }
    }
    return (
        <div className='w-[90%]  mx-auto my-5 px-4 py-3'>
            {
                !input?<div>
                    <div className='flex justify-between md:justify-center items-center'><h2 className='font-bold text-2xl mb-2'>Our Foods</h2>
                <Link to='/ourfoods'>
                    <div className='flex justify-center items-center gap-1 cursor-pointer font-bold hover:text-yellow-500 text-[20px] md:hidden' onClick={() => {
                        setSearch(!search)
                    }}><FaSearch /></div>
                </Link>
            </div>
            <div className='flex justify-start md:justify-center items-center gap-3 md:gap-8 flex-wrap pt-4'>
                {
                    foodBtn.map((itemName) => (
                        <button className='font-semibold text-[15px] bg-gray-300 px-4 py-3 rounded-full min-w-[50px] flex justify-center items-center cursor-pointer hover:bg-yellow-500' onClick={() => filterFood(itemName)}  >{itemName}

                        </button>
                    ))
                    

                }
            </div>
                </div>:""
            }
            {
                search ? <div className='absolute left-[25%] top-[10%] flex gap-5 flex-col z-10 h-[150px] mt-2 rounded-md w-[50%] bg-gray-500 opacity-60'>
                    <div> <div ><RxCross1 className='absolute top-2 right-2 cursor-pointer text-white' onClick={() => {
                        setSearch(!search)
                        setInput("")
                    }} /></div></div>
                    <div><form className='w-full p-3' onSubmit={(e)=>e.preventDefault()} >
                        <input type="text" placeholder='Search Your Favourite Food' className='w-[100%] bg-white outline-none p-2 text-[15px] rounded-lg shadow-lg' 
                        onChange={(e)=>setInput(e.target.value)} value={input} />
                    </form></div>
                </div> : ""
            }
            
            <div className=' flex justify-center items-center flex-wrap gap-4 px-5 py-4' >
                {cate.length>1?cate.map((item) => (
                    <MenuCard name={item.food_name} image={item.food_image} price={item.price} type={item.food_type} id={item.id}/>
                )):<div className='flex justify-center items-center min-h-[60vh] flex-col'>
                    No dish found
                    </div>}
            </div>
        </div>
    )
}

export default OurFood