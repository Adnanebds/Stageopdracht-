
import { useState } from "react";

const Registration = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("vrijwilliger");
  const [isRegistered, setIsRegistered] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const validate = () => {
    let isValid = true;
    let errorMessage = "";

    if (!username && !password && !email) {
      alert("Username and password and email are required");
      return;
    }
    if (!email && !email) {
      alert("Email and Password are required");
      return;
    }
    if (!username && !password) {
      alert("Email and Password are required");
      return;
    }
    if (!username && !email) {
      alert("username and Password are required");
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
  if (email == "") {
    alert("email must be filled out");
    return false;
}
  
    return { isValid, errorMessage };
  };

  const handleSubmit = (event) => {

    event.preventDefault();
    const { isValid, errorMessage } = validate();

    if (!isValid) {
      setErrorMessage(errorMessage);
      return;
    }
    fetch("https://lazy-dragons-retire-185-88-64-239.loca.lt/auth/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
        role: role,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("User registered successfully!");
        console.log(data);
        setIsRegistered(true);
        setErrorMessage("")
      })
      .catch((error) => {
        console.log("Error registering user: ", error);
        setErrorMessage("Error registering user")
      });
  };
  
return(
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
							<input onChange={e => setEmail(e.target.value)} utocomplete="off" id="email" name="email" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
							<label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
						</div> 
						<div class="relative">
							<input autocomplete="off" id="password" name="password" type="password" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password"  onChange={e => setPassword(e.target.value)} />
							<label for="password" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
						</div>
                        <div>
                            <label for="role" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Role (directie,magazijnmedewerker,vrijwilliger) </label>
                            <input type="role" name="role" id="role" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={role} onChange={({ target }) => setRole(target.value)} required=""/>
                        </div>
						<div class="relative">
							<button class="bg-blue-500 text-white rounded-md px-2 py-1">Submit</button>
						</div>
            <a href='/login'>Al een account? Klik Hier</a>
					</div>
				</div>
			</div>
            {isRegistered ? <p style={{ color: "green" }}>User created!</p> : <p style={{ color: "red" }}>{errorMessage}</p>}
		</div>
	</div>
</div>
</form>
)}

export default Registration;