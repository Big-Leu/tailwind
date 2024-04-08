"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { NextPage } from "next";
import Link from "next/link";
import Cam from "../cam";
import hel from "../assets/hell.svg"
const HAPPY: NextPage = () => {

  return (
    <div className=" relative h-screen w-screen bg-stone-900">
        <div className="flex flex-row justify-around ">  
            <div className="mt-[12rem] ">
                <Image src={hel} className="object-cover" alt=""></Image>
            </div>
            <div className="flex flex-col ml-[1rem] mt-[17rem]">
            <label className="ml-[13rem] font-dangrek text-[70px]">THANK YOU</label>
            <label className="ml-[6rem] max-w-[600px] text-emerald-500 font-dangrek  text-4xl">"Where Every Mile is a Moment of Joy: Happy Trip Ahead!"</label>
            <Link href="/landing">
              <button className="mt-[3rem] ml-[16rem] bg-emerald-400 hover:bg-emerald-500 text-white font-normal text-2xl font-dangrek py-2 px-4 rounded">GO BACK TO HOME</button>
            </Link>
            </div>
        </div>
    </div>
);  
};

export default HAPPY;
