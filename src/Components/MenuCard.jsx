
import React, { useContext } from 'react'
import image from '../assets/image1.avif'
import { IoLeafOutline } from "react-icons/io5";
import { GiChickenOven } from "react-icons/gi";
import { dataContext } from '../Context/UserContext';
import { useDispatch } from 'react-redux';
import { AddItem } from '../Redux/cartSlice';
import { toast } from 'material-react-toastify';


const MenuCard = ({name,image,price,type,id}) => {
  let {count,setCount}=useContext(dataContext)
  let dispatch=useDispatch()
 
  return (
    <div className='h-[450px] w-[full] sm:h-[300px] sm:w-[250px] p-5 shadow-lg rounded-md flex flex-col gap-3 hover:border-2 border-yellow-500 bg-white'>
        <div className='w-[full] h-[60%] overflow-hidden rounded-md'><img src={image} alt="" srcset="" className='rounded-lg object-cover'/></div>
        <div className='font-semibold text-[20px] text-black'>{name}</div>
        <div className='font-semibold text-[20px]  flex justify-between items-center text-yellow-500'>
            <div>Rs {price}/-</div>
            <div className='flex justify-between items-center gap-2 text-yellow-500'>{type==='veg'?<IoLeafOutline size={20}/>:<GiChickenOven />}<span>{type}</span></div>
        </div>
        <button className='w-full  p-3 font-bold text-[15px] cursor-pointer bg-yellow-500 hover:bg-yellow-300 transition-all' 
        onClick={()=>{
          dispatch(AddItem({
            id:id,name:name,price:price,image:image,qty:1
          }));
          toast.success(`${name} added`)
        }
        }>Add to Cart</button>
    </div>
  )
}

export default MenuCard