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
interface WelcomeProps {
  user_email:string;
  name:string;
}
const Dashboard: NextPage<WelcomeProps> = (props) => {
  const params = new URLSearchParams(window.location.search);
  const user_email = params.get('user_email');
  const name = params.get('name');
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8081/info");
        console.log(response);
        setData(response.data);
        console.log(response.data[0].count);
        console.log(response.data.rows[0].hour);
        console.log(response.data.rows[1]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const handleClick1 = () => {
    console.log(isVisible)
    setIsVisible(true); 
  };
  const handleClick2 = () => {
    console.log(isVisible)
    setIsVisible(false); 
  };
  return (
    <div className="min-w-screen min-h-screen bg-transparent flex flex-row justify-start">
      <div className="min-w-[20%] h-full bg-stone-900 flex flex-col space-y-10 ">
        <div className="pt-10 ml-10">
          <Image className=" object-cover " src={evlogo} alt="" />
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
        <div className=" px-5 space-y-3 scrollbar-thin scrollbar-track-rounded-full scrollbar-thumb-emerald-400 scrollbar-track-stone-900 overflow-y-auto">
          <CARD name="ARTHER 450" Price="60" milage="45 K/H" vehicle="miniev"/>
          <CARD name="ARTHER 450X" Price="100" milage="55 K/H" vehicle="w1"/>
          <CARD name="kawasaki EV" Price="200" milage="80 K/H" vehicle="w2"/>
          <CARD name="revolt rv400 450X" Price="300" milage="100 K/H" vehicle="w3"/>
        </div>
      </div>
      <div className=" relative flex flex-col min-w-[80%] min-h-full bg-stone-950 text-center">
        <div className="flex flex-row">
          <label className=" font-dangrek text-emerald-400 text-xl absolute left-10 top-8">
            DASHBOARD
          </label>
          <div className=" absolute right-4 top-5 space-x-4 flex flex-row">
            <div className=" flex flex-col">
              <label className=" font-dangrek text-2xl text-emerald-400">
                Account
              </label>
              <label className=" font-dangrek text-sm"> {user_email}</label>
            </div>
            <Image className=" object-cover " src={profile} alt="" />
          </div>
        </div>
        { isVisible && <div className=" h-full flex flex-row pt-10 scrollbar-thin scrollbar-track-rounded-full scrollbar-thumb-emerald-400 scrollbar-track-stone-900 overflow-y-auto">
          {data.rows ? (
            data.rows.map((row, index) => (
              <PP
                hr={row.hour}
                price={row.price}
                label={row.label}
                icon={row.icon}
                color={row.color}
                key={index}
              />
            ))
          ) : (
            <p>Data is not available</p>
          )}
        </div> }
        {!isVisible && <div className="flex flex-row mt-[7rem] ml-[2rem]">
          <TripCard user_email={user_email} name={name}/>
        </div> }
        <div className=" relative z-20 bg-stone-900">
            <BOT/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
