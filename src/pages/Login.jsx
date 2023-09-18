import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase-config"
import { UserContext } from "../contexts/ContextProvider";



const Login = () => {

  const { user, setUser } = React.useContext(UserContext);

  const [LoginId, setLoginId] = useState("");
  const [LoginPassword, setLoginPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState("lawyer");

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };
  
  const handleLogin = async () => {
    try {
      // Now you can access the selected role using the selectedRole state.
      console.log("Selected Role:", selectedRole);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        LoginId,
        LoginPassword
      );
  
      // Update the user context with the signed-in user and selected role.
      setUser(selectedRole);
      
      // Redirect to the Home page
      window.location.href = "/Home";
      console.log("User:", user);
    } catch (error) {
      alert("Wrong Credentials");
    }
  };
  
  

return(
<div>
  <section className="m-auto bg-gray-50 dark:bg-gray-900">
    <div>
      <h1 className="text-sky-700 font-bold text-xl absolute right-6 top-6 ">NyaySanvad</h1>
    </div>
    <div className="flex flex-col items-center mt-20 px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-slate-200 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Welcome Back
          </h1>

          <htmlForm className="space-y-4 md:space-y-6" action="#">
            <br />

            {/* DropDown */}
            <div>
              <label
                htmlFor="role"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select your role
              </label>
              <div className="relative inline-block text-gray-700 dark:text-gray-200">
                <select
                  id="role"
                  name="role"
                  className="w-full px-8 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  onChange={handleRoleChange}
                >
                  <option value="client">Select your Role</option>
                  <option value="lawyer">Lawyer</option>
                  <option value="admin">Admin</option>
                  <option value="general">General</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="userID"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your User ID
              </label>
              <input
                type="text"
                name="userID"
                id="userID"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your user ID"
                onChange={(event) =>{
                  setLoginId(event.target.value+"@gmail.com")
                }}
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                onChange={(event) =>{
                  setLoginPassword(event.target.value)
                }}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
           
            <div>

              <button 
                onClick={handleLogin}
                type="button"
                className="mt-10 items-center justify-center text-base bg-blue-500 hover:bg-blue-700 text-white m-4 font-bold py-2 px-16 rounded"

              >
                LOGIN
              </button>
            </div>
          </htmlForm>
        </div>
      </div>
    </div>
  </section>
</div>
)};
export default Login;
