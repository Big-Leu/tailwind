"use client";
import React, { useState, useEffect } from "react";
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
  // const { data:plans } = useFetchPlans();
  // console.log(plans);
  const [data, setData] = useState<Data>({ user_email: '', name: '', profile: '' });
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [src,setSrc] = useState(menuimg);

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
    console.log(isVisible)
    setIsVisible(true); 
  };
  const handleClick2 = () => {
    console.log(isVisible)
    setIsVisible(false); 
  };

 const handlemenu =  (event:React.MouseEvent<HTMLImageElement>) =>{
    if(src==menuimg) setSrc(closeimg);
    else setSrc(menuimg);
 }

  return (
    <div className="min-w-screen  h-screen bg-stone-950 flex flex-row justify-start overflow-hidden select-none ">
      <Image className={`object-cover absolute z-20 m-10  cursor-pointer transition-all ${src==closeimg && "translate-x-56 p-2 hover:rotate-90 "} `} onClick={handlemenu} src={src} alt="menu"/>
      
      
      <div className={`min-w-[300px] h-full bg-stone-900 flex flex-col space-y-10 overflow-y-auto absolute z-10 transition-all ${src==menuimg && "-translate-x-[300px] invisible"}`}>
        <div className="pt-10 ml-10">
          <Image className="object-cover" src={evlogo} alt="" />
        </div>
        <div className="flex flex-col space-y-6">
          <div className="flex flex-row hover:text-emerald-400 font-dangrek text-xl px-10 justify-stretch">
            <Image className=" object-cover " src={dash} alt="" />
            <h2 className="ml-5"  onClick={handleClick1}>DASHBOARD</h2>
          </div>
          <div className="flex flex-row font-dangrek hover:text-emerald-400 text-xl px-10 justify-stretch">
            <Image className=" object-cover " src={station} alt="" />
            <h2 className="pl-5 pt-1">STATIONS</h2>
          </div>
          <div className="flex flex-row font-dangrek  hover:text-emerald-400 text-xl px-10 justify-stretch">
            <Image className=" object-cover " src={maps} alt="" />
            <h2 className="pl-5" onClick={handleClick2}>MY TRIPS</h2>
          </div>
          <div className="flex flex-row font-dangrek text-xl px-10 hover:text-emerald-400 justify-stretch">
            <Image className=" object-cover " src={acc} alt="" />
            <h2 className="pl-5">ACCOUNT</h2>
          </div>
          <div className="flex flex-row font-dangrek text-xl hover:text-emerald-400 px-10 justify-stretch">
            <Image className=" object-cover " src={sub} alt="" />
            <h2 className="pl-5">SUBCRIPTION PLAN</h2>
          </div>
        </div>
        <div className=" font-dangrek text-2xl text-center">
          <h1>AVAILABLE VEHICLES</h1>
        </div>
        <div className=" px-5 space-y-3 scrollbar-thin scrollbar-track-rounded-full scrollbar-thumb-emerald-400 scrollbar-track-stone-900 overflow-y-scroll  overflow-x-hidden min-h-[200px]">
          <CARD name="ARTHER 450" Price="60" milage="45 K/H" vehicle="miniev"/>
          <CARD name="ARTHER 450X" Price="100" milage="55 K/H" vehicle="w1"/>
          <CARD name="kawasaki EV" Price="200" milage="80 K/H" vehicle="w2"/>
          <CARD name="revolt rv400 450X" Price="300" milage="100 K/H" vehicle="w3"/>
        </div>
      </div>
      <div className=" relative flex flex-col min-w-full bg-stone-950 text-center px-[4rem] p-10">
        <div className="flex flex-row">
          <label className=" font-dangrek text-emerald-400 text-xl absolute left-24 top-10">
            DASHBOARD
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
        { isVisible && <div className=" h-full flex flex-row pt-10 pl-12 gap-[4rem] min-h-[200px]">
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
            <p>Data is not available</p>
          )}
        </div> }
        {!isVisible && <div className="flex flex-row mt-[7rem] ml-[2rem]">
          <TripCard user_email={data.user_email} name={data.name}/>
        </div> }
        <div className=" relative z-20 bg-stone-900">
            <BOT/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
