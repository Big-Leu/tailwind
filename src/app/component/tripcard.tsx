"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { NextPage } from "next";
import Link from "next/link";
import hel from "../assets/hell.svg"
import bb1 from "../assets/bb1.png"
const TripCard: NextPage = () => {

  return (

        <div className="relative max-w-[400px]  h-auto bg-stone-900 rounded-[30px] flex flex-col ">
          <div className="bg-emerald-400 rounded-t-[30px] py-5 text-3xl font-dangrek text-center">
                  TOKEN
          </div>
          <div className="flex flex-rows space-x-10 mt-5 justify-around ">
            <div className="flex flex-col">
                <label className="text-emerald-500 font-dangrek text-4xl">10:00AM </label>
                <label className="font-dangrek ml-[2.5rem] text-xl">FROM </label>
            </div>
            <div className="flex flex-col">
                <label className="text-emerald-500 font-dangrek text-4xl">2:00PM </label>
                <label className="font-dangrek ml-[3rem] text-xl">TO </label>
            </div>
          </div>
          <div className=" flex flex-row mt-[2rem] ml-[1rem]">
            <div>
                <div className="flex flex-col">
                    <label className="ml-[1rem] font-dangrek text-xl">NAME OF USER : </label>
                    <label className="ml-[1rem] text-emerald-500 font-dangrek  text-2xl">Ganesh Gandu </label>
                </div>
                <div className="flex flex-col mt-[1rem]">
                    <label className="ml-[1rem] font-dangrek text-xl">VEHICLE ID : </label>
                    <label className="ml-[1rem] text-emerald-500 font-dangrek  text-2xl">21IF </label>
                </div>
            </div>
            <div className="ml-[2.4rem] mt-[1.3rem] w-[150px] h-auto">
                <Image className=" object-cover " src={hel} alt="" />
            </div>
          </div>
          <div className=" mt-[2rem] flex justify-center h-auto ">
                <Image className=" object-cover " src={bb1} alt="" />
          </div>
          <div className="flex justify-center py-7 ">
            <button className="bg-emerald-400 w-[50%] rounded-[4px] font-dangrek text-xl py-1">
                VERIFY
            </button>
          </div>
        </div>
       );
};

export default TripCard;
