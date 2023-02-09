import React, { useState, useEffect } from "react";
import { FaHome,FaBlogger, FaArrowCircleRight, FaChild, FaBuffer, FaPhoneAlt, FaAddressCard } from 'react-icons/fa';  
import LogoutAlert from "./LogoutAlert";

const Navbar = () => {
const [user, setUser] = useState(null);
const [userName, setUserName] = useState(null);
const [showLogoutAlert, setShowLogoutAlert] = useState(false);


useEffect(() => {
const storedUser = localStorage.getItem("user");
if (storedUser) {
setUser(storedUser);
}
}, []);

useEffect(() => {
  const storedUsername = localStorage.getItem("username");
  if (storedUsername) {
    setUserName(storedUsername);
  }
  }, []);



const handleLogout = () => {
localStorage.removeItem("user");
localStorage.removeItem("username");
setUser(null);
setUserName(null);

setShowLogoutAlert(true);
setTimeout(() => {
  setShowLogoutAlert(false);
}, 3000);

}





return (
  <div class="navbar">
  <nav class="p-3 border-gray-200 rounded bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
    <a href="#" class="flex items-center">
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Adnane</span>
        </a>
      <button data-collapse-toggle="navbar-solid-bg" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
        <ul class="flex flex-col mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
          <li>
          < FaHome />
            <a href="/" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a> 
          </li>
          <li>
            <FaChild />
            <a href="/overmij" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Over Mij</a>
          </li>
          <li>
            <FaBuffer />
            <a href="/portfolio" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Portfolio</a>
          </li>
          <li>
            <FaPhoneAlt />
            <a href="/contact" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
          </li>
          <li>
            <FaBlogger />
            <a href="/blog" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Blog</a>
          </li>
         {user ? (
          <>
          <li>
            <FaArrowCircleRight />
          <button onClick={handleLogout} class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Logout</button>
          </li>
          </>
         ) : (
          <li>
          <FaAddressCard />
          <a href="/login" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</a>
        </li>
         )
      }
          <>  <div>
            
            {userName && <div> <FaAddressCard />{userName}</div>}
            </div>
        </>
        </ul>
      </div>
    </div>
  </nav>
  {showLogoutAlert && <LogoutAlert />}
  </div>
);
};

export default Navbar;