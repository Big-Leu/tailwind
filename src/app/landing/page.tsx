import React from "react";
import Image from "next/image";
import equal from "../assets/equal.svg";
import eev from "../assets/ev bike.svg";
import bike2 from "../assets/bike2.svg";
import ather from "../assets/ather.svg";
import slap from "../assets/slap.svg";
import newev from "../assets/newev.svg";
import { NextPage } from "next";
import Link from "next/link";

const Landing: NextPage = () => {
  return (
<div  className="flex flex-col lg:flex-row w-screen h-screen">
    <div className="bg-stone-950 flex flex-col lg:flex-row lg:min-h-screen  min-w-full p-6 overflow-x-hidden overflow-y-clip lg:overflow-x-visible lg:min-w-[50%]" >
      <div className="w-full drop-shadow-lg z-30 bg-stone-950 flex flex-col justify-between">
        <div>
          <Image
            className="relative justify-start z-20 object-cover ms-2 m-5"
            src={eev}
            alt=""
          />
        </div>
        <div className="flex justify-end z-30 left-10 mt-[-80px] lg:absolute lg:-right-16 lg:top-20">
          <Image
            className=" w-[46px] object-cover m-5"
            src={equal}
            alt=""
          />
        </div>
        <div className="mt-[3rem]">
            <div className="relative flex flex-col">
              <h1 className=" ms-10 font-dangrek text-5xl">Take the </h1>
              <div className=" flex flex-row text-center">
                <h1 className="ms-10 font-dangrek text-5xl">Streets.</h1>
                <h1 className="font-dangrek mt-3 text-emerald-400 text-3xl">
                  Allyna 1.0
                </h1>
              </div>
            </div>
            <div className="flex">
              <p className="relative mt-[2rem] ml-10 max-w-[614px]  font-normal font-dangrek text-[20px]  text-stone-600">
                <span className="text-white">Shift your journey, not gears.</span>{" "}
                Navigate the city with ease on our rental vehicles, freeing your
                mind as the bike intuitively adapts to power the speed you desire.
                Embrace the fastest way to move through the urban landscape and
                experience the freedom of a seamless ride.{" "}
              </p>
            </div>
            <div className="relative pt-5 z-30">
            <Link href="/login">
              <button className="absolute right-8 max-w-[169px] bg-emerald-600 hover:bg-emerald-800 text-white font-normal text-xl font-dangrek py-3 px-4 rounded">
                Book Ride
              </button>
            </Link>
            </div>
        </div>
        <div className="flex flex-col ms-[-24px] z-20 h-[20rem] sm:h-[270px]  relative">
          <div className="absolute bottom-[-45vw] md:bottom-[-50vw] lg:bottom-[-25vw]">
            <Image className="absolute object-cover lg:-top-[20px]" src={bike2} alt="" />
            <Image className=" " src={slap} alt="" />
          </div>
          
        </div>
      </div>
    </div>
      <div className="bg-stone-950 lg:bg-stone-900 -mt-2 min-h-full  relative z-0 " >
        <div className="flex lg:flex-col lg:min-h-screen flex-col-reverse p-10 overflow-x-hidden lg:justify-between ">
          <div>
            <ul className="lg:flex flex-row justify-end font-normal font-dangrek text-emerald-400 gap-20 text-[30px]  hidden lg:visible">
              <li className="hover:text-emerald-500">
                <a href="#experties">Book</a>
              </li>
              <li className="hover:text-emerald-500">
                <a href="#work">About Us</a>
              </li>
              <li className="hover:text-emerald-500">
                <a href="#work">Service and Support</a>
              </li>
            </ul>
          </div>
          <div className="relative  sm:static  lg:relative lg:-left-[70%] lg:w-[160%]">
            <Image
              className="lg:w-[58vw]"
              src={newev}
              alt=""
            />
          </div>
          <div className="relative flex flex-col md:flex-row justify-around w-[40%] ml-10 sm:ml-60 md:m-0 md:w-[100%]">
            <div>
              <h2 className="font-normal font-dangrek text-[35px] text-white">
                35 km/h
              </h2>
              <h3 className="font-normal font-dangrek text-[15px] text-emerald-400">
                Mileage
              </h3>
            </div>
            <div>
              <h2 className="font-normal font-dangrek text-[35px] text-white">
                Fuel
              </h2>
              <h3 className="font-normal font-dangrek text-[15px] text-emerald-400">
                Extra emergency
              </h3>
            </div>
            <div>
              <h2 className="font-normal font-dangrek text-[35px] text-white">
                59/H
              </h2>
              <h3 className="font-normal font-dangrek text-[15px] text-emerald-400">
                Hourly
              </h3>
            </div>
            <div>
              <h2 className="font-normal font-dangrek text-[35px] text-white">
                Helmet
              </h2>
              <h3 className="font-normal font-dangrek text-[15px] text-emerald-400">
                Two in boot space
              </h3>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Landing;
