"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { NextPage } from "next";
import Link from "next/link";
import evlogo from "../assets/ev bike.svg";
import acc from "../assets/Account.svg";
import dash from "../assets/svd.svg";
import station from "../assets/location.svg";
import maps from "../assets/maaps.svg";
import sub from "../assets/subp.svg";
import CARD from "../component/card";
import profile from "../assets/profile.svg";
import Slider from "react-slick";
import PLAN from "../component/plan";
import PP from "../component/plans";
import axios from "axios";
import TripCard from "../component/tripcard"; 
import BOT from "../component/bot";
import { useFetchPlans } from '../fuctionsBackend/plans';
import menuimg from "../assets/menu.png"
import closeimg from "../assets/close.png"
import { plans } from '../utils/data';
const Dashboard: NextPage = () => {
  interface Data {
    user_email: string;
    name: string;
    profile: string;
  }

  const data1 = [
    {
      user_email: "bigleu88@gmail.com",
      name: "Big Leu",
    },
    {
      user_email: "bigleu88@gmail.com",
      name: "Big Leu",
    },
    {
      user_email: "bigleu88@gmail.com",
      name: "Big Leu",
    },
    {
      user_email: "bigleu88@gmail.com",
      name: "Big Leu",
    },
    {
      user_email: "bigleu88@gmail.com",
      name: "Big Leu",
    },
    {
      user_email: "bigleu88@gmail.com",
      name: "Big Leu",
    },
    {
      user_email: "bigleu88@gmail.com",
      name: "Big Leu",
    },
    {
      user_email: "bigleu88@gmail.com",
      name: "Big Leu",
    },
    {
      user_email: "bigleu88@gmail.com",
      name: "Big Leu",
    },
  ];


  const [data, setData] = useState<Data>({ user_email: '', name: '', profile: '' });
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [other,setOther] = useState<boolean>(false);
  const [src,setSrc] = useState(menuimg);
  const [curRoute, setCurrentRoute]=useState("DASHBOARD"); 
  const scrollContainer = useRef<HTMLDivElement>(null);
  
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
  const handleClick1 = () => {
    setOther(false)
    setIsVisible(true);
    setCurrentRoute("DASHBOARD"); 
  };
  const handleClick2 = () => {
    setIsVisible(false); 
    setOther(false)
    setCurrentRoute("MY TRIPS")
  };

  const handleClick3 = () => {
    setOther(true)
    setCurrentRoute("STATIONS")
  };

  const handleClick4 = () => {
    setOther(true)
    setCurrentRoute("ACCOUNT")
  };

  const handleClick5 = () => {
    setOther(true)
    setCurrentRoute("SUBSCRIPTION PLAN")
  };

 const handlemenu =  (event:React.MouseEvent<HTMLImageElement>) =>{
    if(src==menuimg) setSrc(closeimg);
    else setSrc(menuimg);
 }

 useEffect(() => {
  const handleScroll = (e: WheelEvent) => {
    if (scrollContainer.current) {
        const scrollSpeed = 0.5;
        scrollContainer.current.scrollLeft += e.deltaY * scrollSpeed;
    }
  };

  const current = scrollContainer.current;

  if (current) {
    current.addEventListener('wheel', handleScroll, { passive: false });
  }

  return () => {
    if (current) {
      current.removeEventListener('wheel', handleScroll);
    }
  };
}, []);


  return (
    <div className="min-w-screen  min-h-screen bg-stone-950 flex flex-row justify-start  select-none">
      <Image className={`object-cover absolute z-20 m-10  cursor-pointer transition-all ${src==closeimg && "translate-x-56 p-2 hover:rotate-90 "} `} onClick={handlemenu} src={src} alt="menu"/>
      
      
      <div className={`min-w-[300px] h-full bg-stone-900 flex flex-col space-y-10 overflow-y-auto absolute z-10  bg-opacity-80 backdrop-blur-lg  transition-all ${src==menuimg && "-translate-x-[300px] invisible"}`}>
        <div className="pt-10 ml-10">
          <Image className="object-cover" src={evlogo} alt="" />
        </div>
        <div className="flex flex-col space-y-6">
          <div className="flex flex-row hover:text-emerald-400 font-dangrek text-xl px-10 justify-stretch">
            <Image className=" object-cover " src={dash} alt="" />
            <h2 className={`ml-5 ${curRoute=="DASHBOARD" && "text-stone-400 translate-x-2"}`}  onClick={handleClick1}>DASHBOARD</h2>
          </div>
          <div className="flex flex-row font-dangrek hover:text-emerald-400 text-xl px-10 justify-stretch">
            <Image className=" object-cover " src={station} alt="" />
            <h2 className={`pl-5 pt-1 ${curRoute=="STATIONS" && "text-stone-400 translate-x-2"}`} onClick={handleClick3}>STATIONS</h2>
          </div>
          <div className="flex flex-row font-dangrek  hover:text-emerald-400 text-xl px-10 justify-stretch">
            <Image className=" object-cover " src={maps} alt="" />
            <h2 className={`pl-5 ${curRoute=="MY TRIPS" && "text-stone-400 translate-x-2"}`} onClick={handleClick2}>MY TRIPS</h2>
          </div>
          <div className="flex flex-row font-dangrek text-xl px-10 hover:text-emerald-400 justify-stretch">
            <Image className=" object-cover " src={acc} alt="" />
            <h2 className={`pl-5 ${curRoute=="ACCOUNT" && "text-stone-400 translate-x-2"}`} onClick={handleClick4}>ACCOUNT</h2>
          </div>
          <div className="flex flex-row font-dangrek text-xl hover:text-emerald-400 px-10 justify-stretch">
            <Image className=" object-cover " src={sub} alt="" />
            <h2 className={`pl-5 ${curRoute=="SUBSCRIPTION PLAN" && "text-stone-400 translate-x-2"}`} onClick={handleClick5}>SUBSCRIPTION PLAN</h2>
          </div>
        </div>
        <div className=" font-dangrek text-2xl text-center">
          <h1>AVAILABLE VEHICLES</h1>
        </div>
        <div className=" px-5 space-y-3 overflow-y-scroll  overflow-x-hidden min-h-[20%] scrollbar-none">
          <CARD name="TVS NTORQ 125" Price="60" milage="35 K/H" vehicle="miniev"/>
          <CARD name="TVS NTORQ 125" Price="60" milage="35 K/H" vehicle="miniev"/>
        </div>
      </div>
      <div className={`relative flex flex-col  bg-stone-950 text-center w-[100%] px-[4rem] p-10 ${src==closeimg && "lg:translate-x-[260px] lg:w-[80%]"}`}>
        <div className="flex flex-row">
          <label className=" font-dangrek text-emerald-400 text-xl absolute left-24 top-10">
            {curRoute}
          </label>
          <div className=" absolute right-4 top-5 space-x-4 flex flex-row">
            <div className=" flex flex-col">
              <label className=" font-dangrek text-2xl text-emerald-400">
                Account
              </label>
              <label className=" font-dangrek text-sm"> {data.user_email}</label>
            </div>
            <Image className=" object-cover w-[53px] h-[52px] rounded-[26px]" src={data.profile} alt="" width={96} height={96} />
          </div>
        </div>
        {!other && isVisible && <div ref={scrollContainer} className=" h-full w-full lg:justify-center px-16 md:px-12 flex flex-row mt-10  gap-12  min-h-[200px] overflow-x-auto overflow-y-clip  scrollbar-thin scrollbar-track-rounded-full scrollbar-thumb-emerald-400 scrollbar-track-stone-900 ">
          {plans && plans.result ? (
            plans.result.map((row:any, index:any) => (
              <PP
                hr={row.hours}
                price={row.price}
                labels={row.label}  // Updated to handle array
                icons={row.icon}    // Updated to handle array
                colors={row.color}  // Updated to handle array
                key={index}
              />
            ))
          ) : (
            <p className="text-xl text-gray-400"> Plans are currently Unavailable</p>
          )}
        </div> }
        {!other && !isVisible && <div className="grid grid-cols-4 gap-12 mt-[3rem] overflow-y-auto max-h-[80vh] scrollbar-none">
          {data1.map((data, index) => (
            <TripCard user_email={data.user_email} name={data.name} key={index}/>
          ))}
        </div> }

        {other &&  <div className="h-full flex items-center justify-center text-2xl">
            <span>Coming soon...</span>
        </div> }

        {/* <div className=" relative z-20 bg-stone-900">
            <BOT/>
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
