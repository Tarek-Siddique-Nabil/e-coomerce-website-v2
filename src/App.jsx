import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Body from './Components/Body/Body';
import Footer from './Components/Body/Footer';
import Header from './Components/Body/Header';
import Cart from './Components/Cart/Cart';
import { CartContextProvider } from './Components/Hooks/useCart';
import Shop from './Components/Shop/Shop';


const App = () => {
  return (
 
  <CartContextProvider>
      <Router>
    <Header/>
   <Routes>
      <Route path="/" element={<Body />} />
     
    <Route path='/shop'  element={<Shop/>}/>
    <Route path='/cart'  element={<Cart/>}/>
 
   </Routes>
  <Footer/>
  <ToastContainer/>
   </Router>
   </CartContextProvider>
 
  );
};

export default App;