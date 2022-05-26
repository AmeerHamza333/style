import React from 'react';
import './App.css';

import Dashboard from './Dashboard';
import ContactUs from './ContactUs';
import Blog from './Blog';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Shop from './ShopComponent/Shop';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from './About';



function App() {
  return (
    <>
 <BrowserRouter>
      <Routes>
        <Route exact path="/style" element={<Dashboard/>} />
          <Route exact path="contact" element={<ContactUs />} />
          <Route exact path="about" element={<About />} />
          <Route exact path="blogs" element={<Blog />} />
          <Route exact path="shop" element={<Shop />} />
          <Route exact path="login" element={<SignIn />} />
          <Route exact path="signup" element={<SignUp />} />
          {/* <Route exact path="checkout" element={<CheckOut />} /> */}
      </Routes>
    </BrowserRouter>
     </>
  );
}

export default App;
