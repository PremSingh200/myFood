import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        cart:[]
    },
    reducers:{
        AddItem:(state,action)=>{
            const existingItem=state.cart.find(item=>item.id===action.payload.id);
            console.log(`existing item=${existingItem}`)
            if(existingItem){
                state.cart=state.cart.map((item)=>item.id===action.payload.id?{...item,qty:item.qty+1}:item)
            }else{
                state.cart.push(action.payload)

            }
          
        },
        RemoveItem:(state,action)=>{
            state.cart= state.cart.filter((item)=>item.id!==action.payload.id)
        },
        incrementQty:(state,action)=>{
           
           state.cart=state.cart.map((item)=>item.id===action.payload.id?{...item,qty:item.qty+1}:item);
        },
        decrementQty:(state,action)=>{
            // state.cart=state.cart.map((item)=>item.id===action.payload.id?{...item,qty:item.qty-1}:item);
            const decItem=state.cart.find(item=>item.id===action.payload.id);
            if(decItem && decItem.qty>1){
                state.cart=state.cart.map((item)=>item.id===action.payload.id?{...item,qty:item.qty-1}:item)

            }
        }
    }
})

export const {AddItem,RemoveItem,incrementQty,decrementQty}=cartSlice.actions
export default cartSlice.reducer