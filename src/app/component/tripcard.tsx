"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { NextPage } from "next";
import Link from "next/link";
import hel from "../assets/hell.svg"
import bb1 from "../assets/bb1.png"
interface WelcomeProps {
  user_email:string;
  name:string;
}
const TripCard: NextPage<WelcomeProps> = (props) => {

  const redirectToSite = () => {
    const url = `/camp?user_email=${encodeURIComponent(props.user_email)}&name=${encodeURIComponent(props.name)}`;
    window.location.href = url;
  };

  return (

        <div className="relative  bg-stone-900 rounded-[10px] flex flex-col py-4 items-center">
            <label className=" absolute bg-emerald-400 w-full rounded-t-[10px]  text-3xl font-dangrek text-center">
                    TOKEN
            </label>
            <div className=" relative mt-[10%] space-y-[5%] flex flex-col items-center">
              <div className="flex flex-rows space-x-10 mt-5 justify-around ">
                <div className="flex flex-col">
                    <label className="text-emerald-500 font-dangrek text-xl">10:00AM </label>
                    <label className="font-dangrek text-xl">FROM </label>
                </div>
                <div className="flex flex-col">
                    <label className="text-emerald-500 font-dangrek text-xl">2:00PM </label>
                    <label className="font-dangrek ml-[1rem] text-xl">TO </label>
                </div>
              </div>
              <div className=" flex flex-col px-2 space-x-6">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col  ">
                        <label className=" font-dangrek text-xl ">EMAIL </label>
                        <label className=" text-emerald-500 font-dangrek  text-sm">{props.user_email}</label>
                    </div>
                    <div className="flex flex-col">
                        <label className="font-dangrek text-xl">VEHICLE ID : </label>
                        <label className="text-emerald-500 font-dangrek  text-xl">21IF </label>
                    </div>
                </div>
              </div>
                  <Image className=" object-cover " width={50} src={bb1} alt="" />
                <button 
                onClick={redirectToSite}
                className="bg-emerald-400 px-10 rounded-[4px] font-dangrek text-xl mx-auto">
                    VERIFY
                </button>
            </div>
        </div>
       );
};

export default TripCard;
