"use client";
import React, { useState, useEffect, use } from "react";
import Image from "next/image";
import back from "../assets/1211.jpg";
import { NextPage } from "next";
import mail from "../assets/112.svg";
import Link from "next/link";
import aa from "../assets/aadhar.svg";
import bb from "../assets/bb.svg";
import axios from "axios";
import Cam from "../cam";
import { slots } from "../utils/data";
import { v4 as uuidv4}  from "uuid";
import { number, set, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import bbb from "../assets/calendar_today_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg";
import { useRouter } from 'next/navigation';

const loginSchema = z.object({
  userName: z.string().min(2, "User name must be at least 2 characters long"),
  aadhar: z.string()
    .length(12, "Aadhar number must be exactly 12 digits")
    .regex(/^\d{12}$/, "Aadhar number must be exactly 12 digits"),
  license: z.string()
    .length(15, "License number must be exactly 15 characters") 
    .regex(/^[A-Z0-9]+$/, "License number must be alphanumeric"), 
  email: z.string().email("Invalid email address"),
});

type LoginFormInputs = z.infer<typeof loginSchema>;


const FORM: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors }, watch } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
    mode: "all"
  });

  const [checkedStates, setCheckedStates] = useState([]);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [useme, setUseme] = useState<boolean>(false);
   
  const getid = (str: string) =>{
    return Number(str.toString().replace("AM", "").replace("PM", ""))
  }
  const[bookedSlots, setbookedSlots] = useState<number[]>([]);
  const handleClick = (e:any) => {
    e.target.classList.toggle("bg-stone-900");
    let id = getid(e.target.id) ;
    setbookedSlots([...bookedSlots, id]);
  }
  

  const handleslots = async (bookedSlots:number[]) => {
    try {
          const raw = {
            "slots": bookedSlots
          };
        
         console.log("Payload:", raw);
        const response = await fetch(`http://localhost:8000/api/v1/form/fillslots/${selectedDate}`,{
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(raw),
          credentials: 'include',
        });
        console.log(response);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        window.location.href = '/happy';
    }catch (error) {
       console.log("Error fetching data:", error);
    }
  }

   const handleformSubmit = async (data: LoginFormInputs) => {
    try {
      console.log(data);
      const response = await fetch('http://localhost:8000/api/v1/form/fill', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          userName: data.userName,
          email: data.email,
          userAadhar: data.aadhar,
          userDrivingLicense: data.license,
        }),
      });
      console.log(response);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      handleslots(bookedSlots);
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };
  


  const [data, setData] = useState({ user_email: '', name: '', profile: '' });
  useEffect(() => {
    const user_email = sessionStorage.getItem('user_email')!;
    const name = sessionStorage.getItem('user_name')!;
    const profile = sessionStorage.getItem('user_picture')!;
    if (user_email && name && profile) {
      setData({ user_email, name , profile });
    } else {
      console.error('No user data found in session storage');
    }
  }, []);


  useEffect(() => {
    const getslots = async ( selectedDate: string) =>{
      try {
        const response = await fetch(`http://localhost:8000/api/v1/form/slots/${selectedDate}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        }
      )
      const { result } = await response.json();
      if( result ){
        setCheckedStates(result);
        console.log("result from the server",result);
        console.log("checkedStates:",checkedStates);
      }
      else{
        setCheckedStates([]);
      }
     
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
   
    getslots(selectedDate);
  }, [selectedDate]);
 
  
   const unavail = (str:string) =>{
         str=str.replace("AM", "");
         str=str.replace("PM", "");
         for(let i =0 ; i< checkedStates.length; i++){

           if(checkedStates[i] == str){
             return true;
           }
         }

   }
   
  useEffect(() => {
    setTimeout(() => {
      setUseme(false);
      setbookedSlots([]);
    }, 500);
    if(selectedDate !== ""){
      setTimeout(() => {
        setUseme(true);
      },500);
    }
  },[selectedDate]);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const dateValue = event.target.value;
    setSelectedDate(dateValue);
    console.log("Selected date:", dateValue);
  };

  return (
    <div className="static z-10 w-screen h-screen flex justify-center overflow-hidden">
      <div className="absolute z-20 bg-stone-900 rounded-xl max-h-[85%] min-w-[60%]  my-[3rem] mx-5 py-10  overflow-y-auto scrollbar-hidden scrollbar-none">
        <form className=" mx-auto space-y-5 px-10"  onSubmit={handleSubmit(handleformSubmit)}>
          <div id="userName">
            <label
              htmlFor="website-admin"
              className="block mb-2 text-2sm font-dangrek text-gray-900 dark:text-white"
            >
              Username
            </label>
            {errors.userName && <p className="text-red-500 font-dangrek text-xs mb-1">{errors.userName.message}</p>}
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
              </span>
              <input
                {...register("userName")}
                type="text"
                id="website-admin"
                className="rounded-none rounded-e-lg font-dangrek border border-gray-300 text-gray-900  block flex-1 min-w-0 w-full text-sm p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="UserName"
                required
              />
            </div>
          </div>
          <div id="email">
            <label
              htmlFor="website-admin"
              className="block mb-2 text-2sm font-dangrek text-gray-900 dark:text-white"
            >
              Email
            </label>
              {errors.email && <p className="text-red-500 font-dangrek text-xs mb-1">{errors.email.message}</p>}
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <Image src={mail} alt="" />
              </span>
              <input
                {...register("email")}
                type="text"
                id="website-admin"
                className="rounded-none rounded-e-lg  font-dangrek border border-gray-300 text-gray-900  block flex-1 min-w-0 w-full text-sm p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="UserEmail"
                required
              />
            </div>
          </div>
          <div id="Addhar">
            <label
              htmlFor="website-admin"
              className="block mb-2 text-2sm font-dangrek text-gray-900 dark:text-white"
            >
              AADHAR
            </label>
            {errors.aadhar && <p className="text-red-500 font-dangrek text-xs mb-1">{errors.aadhar.message}</p>}
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <Image src={aa} alt="" />
              </span>
              <input
                {...register("aadhar")}
                type="text"
                id="website-admin"
                className="rounded-none rounded-e-lg  font-dangrek border border-gray-300 text-gray-900  block flex-1 min-w-0 w-full text-sm p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="1234-5679-9102"
                required
              />
            </div>
          </div>
          <div id="driviling ">
            <label
              htmlFor="website-admin"
              className="block mb-2 text-2sm font-dangrek text-gray-900 dark:text-white"
            >
              Driving Lisence
            </label>
            {errors.license && <p className="text-red-500 font-dangrek text-xs mb-1">{errors.license.message}</p>}
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <Image src={bb} alt="" />
              </span>
              <input
               {...register("license")}
                type="text"
                className="rounded-none rounded-e-lg  font-dangrek border border-gray-300 text-gray-900  block flex-1 min-w-0 w-full text-sm p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="DL-1420110012345"
                required
              />
            </div>
          </div>
          <div id="Date ">
            <label
              htmlFor="website-admin"
              className="block mb-2 text-2sm font-dangrek text-gray-900 dark:text-white"
            >
              Date
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <Image src={bbb} alt="" />
              </span>
              <input
                type="date"
                id="website-date"
                className="rounded-none rounded-e-lg  font-dangrek border border-gray-300 text-gray-900  block flex-1 min-w-0 w-full text-sm p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="DL-1420110012345"
                onChange={handleDateChange}
              />
            </div>
          </div>
          <div id="time selection">
            {useme ? (
                <>
                  <label className="font-dangrek text-xl text-stone-200">Time</label>
                  <div className="mt-2 w-full h-auto grid grid-cols-6 gap-2 bg-gray-600 rounded-xl px-5 py-5">
                    {slots.slot.map((slot: any) => (

                      <div id ={ slot.id}  key = {slot.id} className = {`w-auto h-auto rounded-md ${ checkedStates && unavail(slot.id) ? " bg-stone-700 pointer-events-none" : (bookedSlots.includes(getid(slot.id)) ? "bg-emerald-400" :"bg-stone-900") } text-center font-dangrek py-2`} onClick={handleClick}> {slot.label}</div>
                    ))}

                  </div>
                </>
              ) : (
                <>
                </>
              )}
            <div>
              <Cam bucket="addtobucket21" name={data.name} mail_id={data.user_email} endpointType="predict"/>
            </div>
            <div>
              <button 
               type="submit"
               className="mt-[3rem] relative  w-full h-[60px] bg-emerald-400 hover:bg-emerald-600 text-white font-normal text-[30px] font-dangrek py-2 px-4 rounded" onClick={handleSubmit}>
                      Submit
                
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="absolute inset-0 bg-cover bg-center z-0">
        <Image src={back} alt="" layout="fill" className="blur-md" />
      </div>
    </div>
  );
};

export default FORM;
