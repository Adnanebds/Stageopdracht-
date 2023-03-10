import './App.css';
import {
  BrowserRouter, 
  Routes,
  Route,
} from "react-router-dom";
import { useState } from 'react';
import Home from "./components/Home";
// import Login from './components/Login';
import Registration from './components/Registration';
import About from './components/About';
import Login from './components/Login'
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import CookieConsent from "react-cookie-consent";
import Privacy from './components/Privacy';
import Posts from './components/Posts';


function App() {

  return (
    <>
          
          <CookieConsent  overlay
         onAccept={(acceptedByScrolling) => {
          if (acceptedByScrolling) {
            // triggered if user scrolls past threshold
            alert("Accept was triggered by user scrolling");
          } else {
            alert("Accept was triggered by clicking the Accept button");
          }
        }}
          enableDeclineButton
          onDecline={() => {
            alert("Dat is geen probleem privacy gaat voor!");
    }}
        location="bottom"
        buttonText="Ik Accepteer"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B", fontWeight: "bold" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        This website gebruikt cookies om de gebruiker ervaring te verbeteren.{" "}
      
      </CookieConsent>
      <BrowserRouter>
      <Routes>
      <Route path="/blog" element={<Posts/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/privacy" element={<Privacy/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/registreren" element={<Registration/>}/> 
        <Route path="/contact" element={<Contact />}/>
        <Route path="/overmij" element={<About/>}/>

      </Routes>
    </BrowserRouter>
    
    </>
    
    
  );
}
export default App;