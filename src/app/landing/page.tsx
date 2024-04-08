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
    <div className=" w-screen h-screen bg-transparent flex flex-row justify-start items-start overflow-hidden" >
      <div className=" static w-[50%] drop-shadow-lg  h-full z-30 bg-stone-950 flex flex-col">
        <div>
          <Image
            className="relative justify-start z-20 pt-10 object-cover ms-10 "
            src={eev}
            alt=""
          />
        </div>
        <div className="flex justify-end z-30 left-10 mt-[-80px] overflow-visible">
          <Image
            className="relative w-[56px] pt-[50px] object-cover left-[27px]"
            src={equal}
            alt=""
          />
        </div>
        <div className="mt-[3rem]">
            <div className="relative flex flex-col">
              <h1 className=" ms-20 font-dangrek text-5xl">Take the </h1>
              <div className=" flex flex-row text-center">
                <h1 className="ms-20 font-dangrek text-5xl">Streets.</h1>
                <h1 className="font-dangrek mt-3 text-emerald-400 text-3xl">
                  Allyna 1.0
                </h1>
              </div>
            </div>
            <div className="flex">
              <p className="relative mt-[2rem] ml-20 max-w-[614px]  font-normal font-dangrek text-[20px]  text-stone-600">
                <span className="text-white">Shift your journey, not gears.</span>{" "}
                Navigate the city with ease on our rental vehicles, freeing your
                mind as the bike intuitively adapts to power the speed you desire.
                Embrace the fastest way to move through the urban landscape and
                experience the freedom of a seamless ride.{" "}
              </p>
            </div>
            <div className="relative ms-20 pt-5 z-30">
            <Link href="/login">
              <button className="max-w-[169px] bg-emerald-400 hover:bg-emerald-600 text-white font-normal text-xl font-dangrek py-3 px-4 rounded">
                Book Ride
              </button>
            </Link>
            </div>
        </div>
        <div className="relative flex flex-row">
          <div className="absolute flex-none mt-[-8rem]">
            <Image className="absolute t-0 z-20 object-cover " src={bike2} alt="" />
            <Image className="z-10 object-cover " src={slap} alt="" />
          </div>
          <div className="mt-[12rem] ml-[30rem]">
            <Image
              className="absolute max-w-[264px] z-20 object-cover "
              src={ather}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className=" relative w-[50%] h-full z-0 bg-stone-900 overflow-visible">
        {/* <div className=" relative flex justify-start pt-[50px] ">
          <Image className=" relative w-40px " src={equal} alt="" />
        </div> */}
        <div className="flex flex-col mt-[1rem]">
          <div>
            <ul className="flex flex-row justify-end font-normal font-dangrek text-emerald-400 gap-20 text-[30px] pt-8 pr-20  ">
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
          <div className="h-[720px] w-[1280px]">
            <Image
              className="relative object-cover ml-[-40rem] mt-[-9rem] z-20"
              src={newev}
              alt=""
            />
          </div>
          <div className=" relative flex flex-row  justify-around mt-[-10rem] ">
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
