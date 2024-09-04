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
    <div className="static max-w-[500px] h-auto bg-inherit flex justify-center pt-32">
      <div className="left-[2.2rem] top-[13.4rem] min-w-[100px] min-h-[40px] rounded-lg rotate-[-45deg] bg-emerald-500 z-10"></div>
      <div className="relative min-w-[400px] max-h-[681px] z-20 hover:shadow-md rounded-2xl bg-stone-900 overflow-visible">
        <div className="absolute top-[1rem] left-[-4rem] z-30 rounded-tl-lg rounded-bl-lg rounded-br-lg rounded-tr-lg rotate-[315deg] transform-gpu text-center min-w-[230px] bg-emerald-400 py-3">
          <label className="relative text-white z-40 rotate-[315deg] font-dangrek px-6 text-3xl">
            {hr} HOURS
          </label>
        </div>
        <div className="relative w-full flex justify-center pt-10">
          <div className="relative items-center z-20 w-[132px] h-[132px] bg-emerald-400 rounded-full flex flex-row justify-center space-x-1">
            <div>
              <Image className="z-30" src={ru} alt="" />
            </div>
            {price && (
              <div className="z-30">
                <label className="z-30 font-dangrek text-5xl text-stone-900">
                  {price}
                </label>
              </div>
            )}
          </div>
        </div>
        <div className="w-full h-full relative flex flex-col space-y-5 px-[3rem] pt-20">
          {labels && labels.map((label, idx) => (
            <div className="relative w-full flex flex-row space-x-7" key={idx}>
              <Image
                className="z-30 object-cover max-w-5 max-h-5 mt-1"
                src={icons[idx] === "check" ? check : cross}
                alt=""
                layout="fill"
              />
              <label className={`font-dangrek text-xl/2 mt-1 ${colors[idx]}`}>
                {label}
              </label>
            </div>
          ))}
          <div className="relative pt-10">
            <Link href="/from">
              <button
                className="py-2 px-3 rounded-lg text-xl font-dangrek bg-emerald-400"
                onClick={handleCheckboxChange}
              >
                BOOK NOW
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PP;
