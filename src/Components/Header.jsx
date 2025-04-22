import React, { useContext, useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";
import { RxCross1 } from "react-icons/rx";
import { IoCartOutline } from "react-icons/io5";
import { dataContext } from '../Context/UserContext';
import {Link, NavLink} from 'react-router-dom'
import { FaSearch } from "react-icons/fa";

import Menu from './Menu';
import { useSelector } from 'react-redux';

const Header = () => {
  
  let {count,setCount,sideNav,setSideNav,search,setSearch}=useContext(dataContext)
  let items=useSelector(state=>state.cart.cart)
  console.log(items)
  return (
    <div className='flex justify-between py-[20px] px-[20px] text-[18px]   border-none shadow-sm relative'>
      <Link to='/'><div className="logo font-bold cursor-pointer "><p>My<span className='text-yellow-500'>Food</span></p></div></Link>

      {/* <div className='absolute bg-red-300 text-center right-0 top-0 w-[200px] h-screen flex justify-center items-center'>
        <div ><RxCross1 className='absolute top-2 right-2 cursor-pointer'/></div>
        <ul className='flex gap-6 flex-col '>
          <li>Home</li>
          <li>About Us</li>
          <li>Offers</li>
          <li>Sign In</li>
        </ul>
      </div>  */}

      <div className='relative'>
        <ul className='md:flex gap-4 hidden'>
          <NavLink to='/' className={({isActive})=>isActive?'text-yellow-500':'text-black'}> <li className='cursor-pointer font-bold hover:text-yellow-500'>Home</li></NavLink>
          <NavLink to='/aboutus' className={({isActive})=>isActive?'text-yellow-500':'text-black'}> <li className='cursor-pointer font-bold hover:text-yellow-500'>About Us</li></NavLink>
          <NavLink to='/ourfoods' className={({isActive})=>isActive?'text-yellow-500':'text-black'}> <li className='cursor-pointer font-bold hover:text-yellow-500'>Our Foods</li></NavLink>
          <NavLink to='/ourfoods'><li className='cursor-pointer font-bold hover:text-yellow-500'>
            <div className='flex justify-center items-center gap-1' onClick={()=>{
              setSearch(!search)
            }}><FaSearch />Search</div>
             </li></NavLink>
        </ul>
      </div>
      
      {
        sideNav?<div className='absolute bg-gray-200 text-center right-0 top-0 w-[200px] h-screen flex justify-center items-center z-10'>
        <div ><RxCross1 className='absolute top-2 right-2 cursor-pointer' onClick={()=>{
           setSideNav(!sideNav)
        }}/></div>
        {/* <div className="logo font-bold cursor-pointer "><p>My<span className='text-yellow-500'>Food</span></p></div> */}
        <ul className='flex gap-6 flex-col'>
        <Link to='/'> <li className='cursor-pointer font-bold hover:text-yellow-500' onClick={()=>{
          setSideNav(!sideNav)
          
        }}>Home</li></Link>
          <Link to='/aboutus'> <li className='cursor-pointer font-bold hover:text-yellow-500' onClick={()=>{
          setSideNav(!sideNav)
          
        }}>About Us</li></Link>
          <Link to='/ourfoods'> <li className='cursor-pointer font-bold hover:text-yellow-500' onClick={()=>{
          setSideNav(!sideNav)
          
        }}>Our Foods</li></Link>
         
        </ul>
      </div>:""
      }
      <div className='flex gap-4'>
        <div className='md:hidden cursor-pointer' ><TiThMenu size={30} onClick={()=>{
          setSideNav(!sideNav)
          
        }}/></div>
        
        <div>
          <div className='absolute top-[8px] right-[12px] text-[16px]'>{items.length}</div>
          <NavLink to='/cart' className={({isActive})=>isActive?'text-yellow-500':'text-black'}><div className='relative'><IoCartOutline size={30} className='cursor-pointer hover:text-yellow-500'/></div></NavLink>
        </div>
      </div>
      

    </div>
  )
}

export default Header





{/* <div className='absolute bg-red-300 text-center right-0 top-0 w-[200px] h-screen flex justify-center items-center'>
        <div ><RxCross1 className='absolute top-2 right-2 cursor-pointer'/></div>
        <ul className='flex gap-6 flex-col '>
          <li>Home</li>
          <li>About Us</li>
          <li>Offers</li>
          <li>Sign In</li>
        </ul>
      </div> */}