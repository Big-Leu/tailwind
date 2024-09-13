"use client";
import React, { useState } from "react";
import Image from "next/image";
import { NextPage } from "next";
import ru from "../assets/pu.svg";
import check from "../assets/check.svg";
import cross from "../assets/cross.svg";
import Link from "next/link";

interface WelcomeProps {
  hr: number;
  price: string;
  labels: string[];   // Updated to handle array
  icons: string[];    // Updated to handle array
  colors: string[];   // Updated to handle array
}

const PP: NextPage<WelcomeProps> = ({ hr, price, labels, icons, colors }) => {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    console.log(isChecked);
  };

  return (
    <div className="relative max-w-[500px] max-h-[495px]  flex justify-center mt-20 shadow-2xl bg-transparent rounded-2xl flex-shrink">
      <div className="relative min-w-[300px] max-h-[481px] z-1  rounded-2xl bg-stone-900 overflow-visible">
        <div className="absolute top-[1rem] left-[-4rem] z-2 rounded-lg rotate-[315deg] transform-gpu text-center min-w-[230px] bg-emerald-600 py-3">
          <label className="relative text-white z-40 rotate-[315deg] font-dangrek px-6 text-2xl">
            {hr} HOURS
          </label>
        </div>
        <div className="relative w-full flex justify-center pt-10">
          <div className="relative items-center z-1 w-[102px] h-[102px] bg-emerald-400 rounded-full flex flex-row justify-center space-x-1">
            <div>
              <Image className="z-2 p-1" src={ru} alt="" />
            </div>
            {price && (
              <div className="z-2">
                <label className="z-2 font-dangrek text-4xl text-stone-900">
                  {price}
                </label>
              </div>
            )}
          </div>
        </div>
        <div className="w-full h-full relative flex flex-col gap-2 my-10 px-[3rem] ">
          {labels && labels.map((label, idx) => (
            <div className="relative w-full flex flex-row space-x-7" key={idx}>
              <Image
                className="z-2 object-cover max-w-5 max-h-5 mt-1"
                src={icons[idx] === "check" ? check : cross}
                alt=""
                layout="fill"
              />
              <label className={`font-dangrek text-xl/2 ${colors[idx]} text-left`}>
                {label}
              </label>
            </div>
          ))} 
        </div>
        <div className="absolute bottom-10 left-[30%] pt-10">
            <Link href="/from">
              <button
                className="py-2 px-3 rounded-lg text-xl font-dangrek bg-emerald-300 text-black hover:text-gray-700 hover:bg-emerald-600 active:text-gray-300"
                onClick={handleCheckboxChange}
              >
                BOOK NOW
              </button>
            </Link>
          </div>
      </div>
    </div>
  );
};

export default PP;
