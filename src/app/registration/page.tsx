"use client"
import React, { useState } from 'react';
import Cam from "../cam";
import eev from "../assets/ev bike.svg"
import hel from "../assets/hell.svg"
import Image from "next/image";
import { NextPage } from "next";

const Registration: NextPage= () => {
 // State hooks for form fields
 const [firstName, setFirstName] = useState("");
 const [lastName, setLastName] = useState("");
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [phone, setPhone] = useState("");
 const [company, setCompany] = useState("");
 const [photo, setPhoto] = useState(null);

 // Function to handle registration
 const handleRegister = async () => {
   try {
     // Create form data
     const formData = {
       firstName: firstName,
       lastName: lastName,
       work: company,
       mobile: phone,
       email: email,
       password: password
     };
     
     // Convert data object to JSON string
     const jsonData = JSON.stringify(formData);
     // formData.append("photo", photo);
    console.log(jsonData)
    console.log(formData)
     // Send registration request
     const response = await fetch("http://localhost:8080/register", {
       method: "POST",
       headers: {
         "Content-Type": "application/json" // Specify content type
     },
       body: jsonData,
     });

     if (response.ok) {
       console.log("Registration successful");
       window.location.href="/login"
       // Optionally, redirect to a success page
     } else {
       console.error("Registration failed:", response.statusText);
      //  alert("Registration failed!");
     }
   } catch (error) {
     console.error("Error during registration:", error);
   }
 };
 
    return (
        <div className="w-full h-screen bg-transparent flex flex-row justify-start items-start ">
          <div className="static w-[36%] min-h-screen  bg-stone-900">
            <div className="relative w-full h-full flex flex-col space-y-[6rem]">
              <div className="relative w-[60px] h-[64px] mt-[5rem] ml-[4rem] ">
                <Image className=" object-cover " src={eev} alt="" />
              </div>
              <div className="relative px-10">
                <Image className=" object-cover " src={hel} alt="" />
              </div>
              <div className='relative text-center px-10'>
                <div className=" relative font-normal font-dangrek text-5xl ">
                  <h1>Book on demand </h1>
                  <h1 className=" relative">Right in your hand </h1>
                </div>
                <div className="mt-[1rem]  relative font-normal font-dangrek text-[30px]  text-stone-600">
                  <p>Welcome to the future of reading with our Rental Book App.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative-container w-[64%] min-h-screen max-h-full bg-stone-950 overflow-y-auto">
            <form className="w-auto px-10 py-10 min-h-full" onClick={handleRegister}>
              <div className="relative z-0 w-full h-20 mb-5 group">
               <input               
               onChange={(e) => setEmail(e.target.value)} 
               value={email}
               required
               type="email" name="floating_email" id="floating_email" className="h-20 block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-400 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label form="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-emerald-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
              </div>
              <div className="relative z-0 w-full h-20 mb-5 group">
                <input 
                onChange={(e) => setPassword(e.target.value)} 
                value={password}
                required
                type="password" name="floating_password" id="floating_password" className="h-20 block py-2.5 px-0 w-full  text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-400 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label form="floating_password" className="peer-focus:font-meduim absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-emerald-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
              </div>
              <div className="relative z-0 w-full h-20 mb-5 group">
                <input 
                onChange={(e) => setPassword(e.target.value)} 
                value={password}
                required
                type="password" name="repeat_password" id="floating_repeat_password" className="block h-20 py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-400 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label form="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-emerald-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
              </div>
              <div className="grid xl:gap-10 md:grid-cols-2 h-20 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input 
                  onChange={(e) => setFirstName(e.target.value)} 
                  value={firstName}
                  required                  
                  type="text" name="floating_first_name" id="floating_first_name" className=" h-20 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-400 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label form="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-emerald-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                </div>
                <div className="relative z-0 w-full mb-5 group h-20">
                  <input 
                  onChange={(e) => setLastName(e.target.value)} 
                  value={lastName}
                  required                  
                  type="text" name="floating_last_name" id="floating_last_name" className="h-20 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-400 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label form="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-emerald-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username</label>
                </div>
              </div>
              <div className="pt-10 grid  md:grid-cols-2 md:gap-6 h-20">
                <div className="relative z-0 w-full mb-5 group">
                  <input 
                  onChange={(e) => setPhone(e.target.value)} 
                  value={phone}
                  required                  
                  type="tel" pattern="[0-9]{10}" name="floating_phone" id="floating_phone" className="h-20 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-400 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label form="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-emerald-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (+91-1234567890)</label>
                </div>
                <div className="relative z-0 w-full h-20 mb-5 group">
                  <input 
                placeholder=" "
                onChange={(e) => setCompany(e.target.value)} 
                value={company}                 
                  type="text" name="floating_company" id="floating_company" className="h-20 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-400 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label form="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-emerald-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. Google)</label>
                </div>
              </div>
              <div className="relative px-10 mt-[5rem] z-0 w-full">
              <Cam bucket="addtobucket21" name={firstName+lastName} mail_id={email} endpointType="predict"/>
              </div>
              <div className="relative mt-[6rem] px-10">
                <button className=" relative  w-full h-[60px] bg-emerald-400 hover:bg-emerald-600 text-white font-normal text-[30px] font-dangrek py-2 px-4 rounded" type="submit">
                    next
                </button>
              </div>
            </form>
          </div>
        </div>
      );
};

export default Registration;