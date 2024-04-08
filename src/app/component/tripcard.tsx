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

        <div className="relative max-w-[400px]  h-auto bg-stone-900 rounded-[30px] flex flex-col ">
          <div className="bg-emerald-400 rounded-t-[30px] py-5 text-3xl font-dangrek text-center">
                  TOKEN
          </div>
          <div className="flex flex-rows space-x-10 mt-5 justify-around ">
            <div className="flex flex-col">
                <label className="text-emerald-500 font-dangrek text-4xl">10:00AM </label>
                <label className="font-dangrek text-xl">FROM </label>
            </div>
            <div className="flex flex-col">
                <label className="text-emerald-500 font-dangrek text-4xl">2:00PM </label>
                <label className="font-dangrek ml-[1rem] text-xl">TO </label>
            </div>
          </div>
          <div className=" flex flex-row mt-[2rem] px-4 space-x-6">
            <div>
                <div className="flex flex-col">
                    <label className="ml-[1rem] font-dangrek text-xl">Email OF USER : </label>
                    <label className="ml-[1rem] text-emerald-500 font-dangrek  text-2xl">{props.user_email}</label>
                </div>
                <div className="flex flex-col mt-[1rem]">
                    <label className="font-dangrek text-xl">VEHICLE ID : </label>
                    <label className="text-emerald-500 font-dangrek  text-2xl">21IF </label>
                </div>
            </div>
            <div className=" mt-[1.3rem] w-[150px] h-auto">
                <Image className=" object-cover " src={hel} alt="" />
            </div>
          </div>
          <div className=" mt-[2rem] flex justify-center h-auto ">
                <Image className=" object-cover " src={bb1} alt="" />
          </div>
          <div className="flex justify-center py-7 ">
            <button 
            onClick={redirectToSite}
            className="bg-emerald-400 px-10 rounded-[4px] font-dangrek text-xl py-1">
                VERIFY
            </button>
          </div>
        </div>
       );
};

export default TripCard;
