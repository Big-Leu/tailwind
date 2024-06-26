"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import miniev from "../assets/mini.svg"
import w1 from "../assets/w1.png"
import w2 from "../assets/w2.png"
import w3 from "../assets/w33.png"

import { NextPage } from "next";
import Link from "next/link";

interface WelcomeProps {
name:string;
milage :string;
Price:string;
vehicle:string;
  }

const CARD: NextPage<WelcomeProps> = (props) => {
  return (
   
      <div className=" rounded-3xl w-full h-[200px] bg-stone-950 flex flex-col  px-2">
        <div className="flex flex-row font-dangrek text-stone-500 text-xl">
            <Image className=" max-h-[111px] max-w-[151px] pt-3" src={props.vehicle === "miniev" ? miniev : props.vehicle === "w1" ? w1 : props.vehicle === "w2" ? w2 : w3} alt="" width="100" height="60"/>
            <label className=" mt-12 "> {props.name} </label>
        </div>
        <div className=" rounded-full min-h-0.5 bg-stone-900 max-w-[280px]"></div>
        <div className="flex flex-row space-x-20 font-dangrek text-sm mt-5 justify-center">
            <div className="flex flex-col">
                <label className=" text-emerald-400">MILAGE</label>
                <label className="">{props.milage}</label>
            </div>
            <div className="flex flex-col">
                <label className="text-emerald-400">HOURLY RENT</label>
                <label className="">{props.Price}</label>

            </div>
        </div>
      </div>
  );
};

export default CARD;
