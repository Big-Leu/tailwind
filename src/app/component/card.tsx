"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import miniev from "../assets/mini.svg"
import { NextPage } from "next";
import Link from "next/link";

const CARD: NextPage = () => {
  return (
   
      <div className=" rounded-3xl w-full h-[200px] bg-stone-950 flex flex-col  px-2">
        <div className="flex flex-row font-dangrek text-stone-500 text-xl">
            <Image className=" max-h-[111px] max-w-[151px] pt-3" src={miniev} alt="" />
            <label className=" mt-12 "> ATHER 450X </label>
        </div>
        <div className=" rounded-full min-h-0.5 bg-stone-900 max-w-[280px]"></div>
        <div className="flex flex-row space-x-20 font-dangrek text-sm mt-5 justify-center">
            <div className="flex flex-col">
                <label className=" text-emerald-400">MILEGE</label>
                <label className="">55 KM/L</label>
            </div>
            <div className="flex flex-col">
                <label className="text-emerald-400">HOURLY RENT</label>
                <label className="">100 RUPEES</label>

            </div>
        </div>
      </div>
  );
};

export default CARD;
