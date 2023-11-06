import React from 'react'
import "./index.css";
import Home from '../src/Components/Pages/Home/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Pages/Loginscreen/Loginform';
import Header from './Components/Layout/Header/Header';
import Footer from './Components/Layout/Footer';
import Forgotpassword from './Components/Pages/Forgotscreen/Forgotpassword';
import Securitypage from './Components/Pages/Otpscreen/Securty';
import AboutPage from './Components/Pages/Aboutus/About';
import { ThemeProvider } from '@mui/material/styles';
import Theme from '../src/Components/Theme/Theme'
import Contactpage from '../src/Components/Pages/ContactUs/Contact'
import Productpage from '../src/Components/Pages/Product/Product'
import SingleProduct from './Components/Pages/Singleproduct/Singleproduct';

function App() {
  return (
    <ThemeProvider theme={Theme}>
    <div>
     <BrowserRouter>
   <Header/>
      <Routes>
      <Route path="/"  element={<Home/>}> </Route>
      <Route path="/home"  element={<Home/>}> </Route>
      <Route path="/securitypage"  element={ <Securitypage/>}></Route>
      <Route path="/Login"  element={ <Login/>}></Route>
     <Route path="/forgotpassword"  element={ <Forgotpassword/>}></Route>
     <Route path="/about"  element={ <AboutPage/>}></Route>
     <Route path="/contact"  element={ <Contactpage/>}></Route>
     <Route path="/product"  element={ <Productpage/>}></Route>
     <Route path="/singleproduct"  element={<SingleProduct/>}> </Route>

      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
    </ThemeProvider>
  );
}

export default App;
