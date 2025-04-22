import React from 'react'
import Cart_Card from './Cart_Card'
import { useSelector } from 'react-redux'
import { TiShoppingCart } from "react-icons/ti";

const Cart = () => {
  let items=useSelector(state=>state.cart.cart)
  let subtotal=items.reduce((total,item)=>total+(item.price*item.qty),0)
  let deliveryFee=20;
  let taxes=subtotal*0.5/100;
  let grandTotal=Math.floor(subtotal+deliveryFee+taxes)
  console.log(grandTotal)
  return (
    <div>
     {
      items.length>0? <div className='w-[90%]  mx-auto my-5 px-4 py-3 flex items-center flex-col'>
      {items.map((item)=>(
        <Cart_Card name={item.name} price={item.price} image={item.image} qty={item.qty} id={item.id} />
      ))}
      
      <div className='w-full border-t-2 border-b-2 border-gray-600 mt-7 flex flex-col gap-4 p-8'>
        <div className='w-[90%] flex  items-center justify-between '>
          <span className='text-md font-semibold text-gray-600'>Subtotal</span>
          <span className='text-md font-semibold text-yellow-600'>Rs {subtotal}/-</span>
        </div>
        <div className='w-[90%] flex  items-center justify-between '>
          <span className='text-md font-semibold text-gray-600'>Delivery Fee</span>
          <span className='text-md font-semibold text-yellow-600'>Rs {deliveryFee}/-</span>
        </div>
        <div className='w-[90%] flex  items-center justify-between '>
          <span className='text-md font-semibold text-gray-600'>Taxes</span>
          <span className='text-md font-semibold text-yellow-600'>Rs {taxes}/-</span>
        </div>
        
      </div>
      <div className='w-full flex  items-center justify-between p-9'>
          <span className='text-lg font-semibold text-gray-600'>Grand Total</span>
          <span className='text-lg font-semibold text-yellow-600'>Rs {grandTotal}/-</span>
        </div>
      <button className='w-[60%]  p-3 font-bold text-[15px] cursor-pointer bg-yellow-500 hover:bg-yellow-300 transition-all'>
        Place Order</button>
        </div>:<div className='flex justify-center items-center min-h-[60vh] flex-col'>
          <div><TiShoppingCart className='text-yellow-500 h-[100px] w-[100px] md:h-[200px] md:w-[200px]'/></div>
          <div className='text-yellow-500 text-xl md:text-2xl font-semibold'>Empty Cart</div>

        </div>
     }
      
    </div>
  )
}

export default Cart