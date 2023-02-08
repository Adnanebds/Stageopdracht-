import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigate,} from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState()

  

  const handleSubmit = async e => {
    e.preventDefault();
    if (!username && !password) {
      alert("Username and password are required");
      return;
    }
    if (username == "") {
      alert("Username must be filled out");
      return false;
  }
  if (password == "") {
      alert("Password must be filled out");
      return false;
  }
  
    const user = { username, password };
    // send the username and password to the server
    const response = await axios.post(
      "http://localhost:8800/auth/login",
      user
    );
    // set the state of the user
    setUser(response.data)
    // store the user in localStorage
    localStorage.setItem('user', response.data.details.tokens[0].token)
    localStorage.setItem('username', response.data.details.username)
    
  };


  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = (loggedInUser);
      setUser(foundUser);
    }
  }, []);

  
// if there's a user show the message below
  if (user) {
    return <Navigate to="/" />;
  } 
 


  return(

    
    <>
    <Navbar />
        <form onSubmit={handleSubmit}>

<div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 animate__animated animate__lightSpeedInLeft">
	<div class="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div class="max-w-md mx-auto">
				<div>
					<h1 class="text-2xl font-semibold">Login met ReactJS en NodeJS</h1>
				</div>
				<div class="divide-y divide-gray-200">
					<div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<div class="relative">
							<input onChange={e => setUsername(e.target.value)} utocomplete="off" id="email" name="email" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
							<label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Username</label>
						</div>  
						<div class="relative">
							<input autocomplete="off" id="password" name="password" type="password" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password"  onChange={e => setPassword(e.target.value)} />
							<label for="password" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
						</div>
						<div class="relative">
							<button class="bg-blue-500 text-white rounded-md px-2 py-1">Submit</button>
						</div>
            <a href='/registreren'>Geen account? Registreer hier</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</form>
<Footer />
    </>
  

  )
}

export default Login;