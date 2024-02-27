"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { NextPage } from "next";
import ru from "../assets/pu.svg";
import check from "../assets/check.svg";
import cross from "../assets/cross.svg";
import Link from "next/link";

const PP: NextPage = () => {
  return (
    <div className="w-lvh h-lvh  bg-inherit flex justify-center pt-32">
      <div className="relative z-20 hover:shadow-md rounded-2xl bg-stone-900 max-w-[500px] max-h-[600px] overflow-visible ">
        <div className="absolute z-30 top-5 left-[-70px] rounded-tl-lg rounded-tr-lg rotate-[315deg] transform-gpu text-center w-[250px] h-[70px] bg-emerald-400">
          <label className=" relative text-white z-40 rotate-[315deg] font-dangrek text-4xl top-4">
            12 HOURS
          </label>
        </div>
        <div className=" relative top-[5rem] left-[7rem] z-20 w-[132px] h-[132px] bg-emerald-400 rounded-full flex flex-row justify-center space-x-1">
          <div>
            <Image className="z-30 mt-11" src={ru} alt="" />
          </div>
          <div className="z-30 mt-10">
            <label className="z-30 font-dangrek text-5xl text-stone-900">
              600
            </label>
          </div>
        </div>
        <div className="w-full h-full relative top-[7rem] left-[1rem] flex flex-col space-y-3">
          <div className="flex flex-row space-x-3">
            <Image className="z-30  object-cover max-w-5 max-h-5 mt-1" src={check} alt="" />
            <label className=" font-dangrek text-xl/2 text-emerald-400 mt-1">Neque porro quisquam est qui dolorem</label>
          </div>
          <div className="flex flex-row space-x-3">
            <Image className="z-30 object-cover max-w-5 max-h-5 mt-1" src={cross} alt="" />
            <label className=" font-dangrek text-xl/2 text-stone-500 mt-1">Neque porro quisquam est qui dolorem</label>
          </div>
          <div className="flex flex-row space-x-3">
            <Image className="z-30 object-cover max-w-5 max-h-5 mt-1" src={cross} alt="" />
            <label className=" font-dangrek text-xl/2 text-stone-500 mt-1">Neque porro quisquam est qui dolorem</label>
          </div>
          <div className="flex flex-row space-x-3">
            <Image className="z-30 object-cover max-w-5 max-h-5 mt-1" src={check} alt="" />
            <label className=" font-dangrek text-xl/2 text-emerald-400 mt-1">Neque porro quisquam est qui dolorem</label>
          </div>
          <div className="flex flex-row space-x-3">
            <Image className="z-30 object-cover max-w-5 max-h-5 mt-1" src={check} alt="" />
            <label className=" font-dangrek text-xl/2 text-emerald-400 mt-1">Neque porro quisquam est qui dolorem</label>
          </div>
          <div className="flex flex-row space-x-3">
            <Image className="z-30 object-cover max-w-5 max-h-5 mt-1" src={cross} alt="" />
            <label className=" font-dangrek text-xl/2 text-stone-500 mt-1">Neque porro quisquam est qui dolorem</label>
          </div>
            <button className="left-[1rem] py-4 px-2 max-w-[100px] rounded-lg text-xl/2 font-dangrek bg-emerald-400">BOOK NOW</button>
        </div>
      </div>
      <div className=" relative w-[70px] h-[40px] rounded-bl-lg mt-[8.1rem] left-[-24.1rem] transform-gpu bg-emerald-700 z-10 "></div>
      <div className=" absolute w-[70px] h-[40px] rotate-[315deg] rounded-br-lg ml-[-10.4rem] mt-[-0.64rem] transform-gpu bg-emerald-500 z-10 "></div>
    </div>
  );
};

export default PP;
