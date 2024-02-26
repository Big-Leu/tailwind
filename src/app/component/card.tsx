"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import miniev from "../assets/mini.svg"
import { NextPage } from "next";
import Link from "next/link";

const CARD: NextPage = () => {
  return (
    <div className="w-lvh h-lvh bg-slate-50 flex py-60 justify-center">
      <div className=" rounded-3xl w-[300px] h-[200px] bg-black flex flex-col  px-2">
        <div className="flex flex-row font-dangrek text-xl">
            <Image className=" max-h-[111px] max-w-[151px] pt-3" src={miniev} alt="" />
            <label className=" mt-12 "> ATHER 450X </label>
        </div>
        <div className=" rounded-full min-h-0.5 bg-stone-900 max-w-[280px] mb-10"></div>
        <div className=" "></div>
      </div>
    </div>
  );
};

export default CARD;
