"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { NextPage } from "next";
import Link from "next/link";
import evlogo from "../assets/ev bike.svg"
import acc from "../assets/Account.svg"
import dash from "../assets/svd.svg"
import station from "../assets/location.svg"
import maps from "../assets/maaps.svg"
import sub from "../assets/subp.svg"

const Dashboard: NextPage = () => {

  return (
    <div className="w-lvh h-lvh bg-transparent flex flex-row justify-start">
       <div className="min-h-dvh min-w-dvh xl:w-[400px] bg-stone-900 flex flex-col space-y-10 ">
          <div className="pt-10 ml-10">
          <Image className=" object-cover " src={evlogo} alt="" />
          </div>
          <div className="flex flex-col space-y-6">
              <div className="flex flex-row hover:text-emerald-400 font-dangrek text-xl px-10 justify-stretch">
                <Image className=" object-cover " src={dash} alt="" />
                <h2 className="ml-5">DASHBOARD</h2>
              </div>
              <div className="flex flex-row font-dangrek hover:text-emerald-400 text-xl px-10 justify-stretch">
                <Image className=" object-cover " src={station} alt="" />
                <h2 className="pl-5 pt-1">STATIONS</h2>
              </div>
              <div className="flex flex-row font-dangrek  hover:text-emerald-400 text-xl px-10 justify-stretch">
                <Image className=" object-cover " src={maps} alt="" />
                <h2 className="pl-5">MY TRIPS</h2>
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
       </div>
       <div className="flex flex-col w-full h-full bg-stone-950 text-center">
           
       </div>
    </div>
  );
};

export default Dashboard;
