import React from 'react'
// import image1 from '../assets/image1.avif'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { RemoveItem,incrementQty,decrementQty } from '../Redux/cartSlice';


const Cart_Card = ({name,image,price,qty,id}) => {
    let dispatch=useDispatch()
    
    return (
        
            <div className='w-full h-[250px] md:h-[120px] shadow-lg border-2 border-gray-200 flex flex-col md:flex-row justify-between p-2 mb-3'>
                <div className='w-full md:w-[50%] h-[50%] md:h-[100%] flex gap-2'>
                    <div className='h-full w-[60%]  rounded-md '>
                        <img src={image} alt="" srcset="" className='w-full h-full object-cover rounded-md '/>
                    </div>
                    <div className='h-full w-[40%]  flex flex-col gap-3 items-center'>
                        <h2 className='text-[15px] md:text-xl text-yellow-500 font-semibold'>{name}</h2>
                        <div className='w-[100px] h-[50px] flex justify-center items-center rounded-lg border-2 border-yellow-500'>
                            
                           <button onClick={()=>
                            dispatch(decrementQty({id}))
                           } className='w-[30%] h-full text-[20px] font-semibold flex justify-center items-center bg-white cursor-pointer hover:text-yellow-500 transition-all rounded-l-lg 
                            ' >-</button>
                            <span className='w-[40%] h-full text-[20px] font-semibold flex justify-center items-center bg-gray-300'>{qty}</span>
                            <button onClick={()=>
                            dispatch(incrementQty({id}))
                          
                            
                             } className='w-[30%] h-full text-[20px] font-semibold flex justify-center items-center bg-white cursor-pointer hover:text-yellow-500 transition-all  rounded-r-lg '>+</button>
                            
                        </div>
                    </div>
                </div>
                <div className='w-full h-[50%] md:h-full md:w-[20%] p-2 mt-3 md:p-0 md:mt-0 border-t-2 border-gray-300 md:border-t-0 flex justify-between md:justify-center items-center md:flex-col gap-3'>
                    <div className='text-xl text-yellow-500 font-semibold'>Rs. {price}/-</div>
                    <div className='text-[30px] text-red-500 font-semibold cursor-pointer' ><MdDelete onClick={()=>dispatch(RemoveItem({name,image,price,qty,id}))}/></div>
                </div>
            </div>
            
            
        
    )
}

export default Cart_Card