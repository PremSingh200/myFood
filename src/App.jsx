
import React from 'react'
import { ToastContainer} from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';

import { BrowserRouter,Route, Routes } from "react-router"
import HomeScreen from './Components/HomeScreen'
import AboutUs from './Components/AboutUs'


import OurFood from './Components/OurFood'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Cart from './Components/Cart'


// import Home from './Components/Home'

function App() {

  return (
    <>
      {/* <Home /> */}
      <BrowserRouter>
        <Header />
        <ToastContainer position='top-right'/>
        <Routes>
          <Route path='/' element={<HomeScreen />}/>
          <Route path='/aboutus' element={<AboutUs />}/>
          <Route path='/ourfoods' element={<OurFood />}/>
          <Route path='/cart' element={<Cart />}/>
        </Routes>
        <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
