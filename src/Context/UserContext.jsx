import React, { createContext,useState } from 'react'
import food_items from '../Components/Food'
export const dataContext=createContext()
function UserContext({children}) {
  let [sideNav,setSideNav]=useState(false)
  let [search,setSearch]=useState(false)
  let [cate,setCate]=useState(food_items)
  let [count,setCount]=useState(0)
  let[input,setInput]=useState("")
  let [countqty,setQty]=useState(0)
  let data={
    cate,
    setCate,
    count,
    setCount,
    sideNav,
    setSideNav,
    search,
    setSearch,
    input,
    setInput,
    countqty,
    setQty
  }
  return (
    <div>
      <dataContext.Provider value={data} >{children}</dataContext.Provider>
      
      </div>
  )
}

export default UserContext