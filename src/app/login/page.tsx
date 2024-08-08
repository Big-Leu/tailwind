"use client";
import React from "react";
import Image from "next/image";
import facefb from "../assets/facefb.svg";
import goog from "../assets/goog.svg";
import bike from "../assets/bike.png";
import { NextPage } from "next";
import Link from "next/link";
import { handleLoginGoogle } from "../fuctionsBackend/loginpage";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {handleLogin} from "../fuctionsBackend/basiclogin";
// Define the schema using zod
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  staySignedIn: z.boolean().optional(),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

const Loginpage: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
    mode:"all"
  });

  return (
    <div className="bg-transparent flex flex-row items-center  h-[100vh] resize-both min-h-[600px]">
      <div className=" bg-stone-900 flex flex-col space-y-10 h-[100%] justify-center">
        <div className=" bg-stone-60 w-450 h-45 px-20 pt-20 absolute -top-10">
          <svg
            width="41"
            height="45"
            viewBox="0 0 41 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.15 34.7727C4.44167 34.7727 2.98958 34.1761 1.79375 32.983C0.597917 31.7898 0 30.3409 0 28.6364C0 26.9318 0.597917 25.483 1.79375 24.2898C2.98958 23.0966 4.44167 22.5 6.15 22.5C7.4825 22.5 8.66979 22.8835 9.71187 23.6506C10.754 24.4176 11.48 25.3977 11.89 26.5909H22.755C23.1308 24.2727 24.096 22.2443 25.6506 20.5057C27.2052 18.767 29.11 17.5568 31.365 16.875L28.495 4.09091H20.5V0H28.495C29.4175 0 30.2631 0.298295 31.0319 0.894886C31.8006 1.49148 32.2875 2.25 32.4925 3.17045L36.3875 20.4545H34.85C32.595 20.4545 30.6646 21.2557 29.0588 22.858C27.4529 24.4602 26.65 26.3864 26.65 28.6364V30.6818H11.89C11.48 31.875 10.754 32.8551 9.71187 33.6222C8.66979 34.3892 7.4825 34.7727 6.15 34.7727ZM6.15 30.6818C6.73083 30.6818 7.21771 30.4858 7.61062 30.0938C8.00354 29.7017 8.2 29.2159 8.2 28.6364C8.2 28.0568 8.00354 27.571 7.61062 27.179C7.21771 26.7869 6.73083 26.5909 6.15 26.5909C5.56917 26.5909 5.08229 26.7869 4.68937 27.179C4.29646 27.571 4.1 28.0568 4.1 28.6364C4.1 29.2159 4.29646 29.7017 4.68937 30.0938C5.08229 30.4858 5.56917 30.6818 6.15 30.6818ZM34.85 34.7727C33.1417 34.7727 31.6896 34.1761 30.4937 32.983C29.2979 31.7898 28.7 30.3409 28.7 28.6364C28.7 26.9318 29.2979 25.483 30.4937 24.2898C31.6896 23.0966 33.1417 22.5 34.85 22.5C36.5583 22.5 38.0104 23.0966 39.2062 24.2898C40.4021 25.483 41 26.9318 41 28.6364C41 30.3409 40.4021 31.7898 39.2062 32.983C38.0104 34.1761 36.5583 34.7727 34.85 34.7727ZM34.85 30.6818C35.4308 30.6818 35.9177 30.4858 36.3106 30.0938C36.7035 29.7017 36.9 29.2159 36.9 28.6364C36.9 28.0568 36.7035 27.571 36.3106 27.179C35.9177 26.7869 35.4308 26.5909 34.85 26.5909C34.2692 26.5909 33.7823 26.7869 33.3894 27.179C32.9965 27.571 32.8 28.0568 32.8 28.6364C32.8 29.2159 32.9965 29.7017 33.3894 30.0938C33.7823 30.4858 34.2692 30.6818 34.85 30.6818ZM22.55 45L10.25 38.8636H18.45V34.7727L30.75 40.9091H22.55V45Z"
              fill="#2FDC9B"
            />
          </svg>
        </div>
        <div></div>
        <form className="flex flex-col space-y-10  lg:w-[38vw] w-[100vw] items-center" onSubmit={handleSubmit(handleLogin)}>
          <div className="text-center pt-1">
            <label className="text-white text-4xl font-normal font-dangrek">
              LOGIN
            </label>
          </div>
          <div className="flex flex-col gap-10 px-10 w-[80%]">
            <div className="relative w-full min-w-[200px] h-14">
              <input
                type="email"
                {...register("email")}
                className="peer w-full h-full bg-transparent 0 font-dangrek focus:outline-0 disabled:bg-emerald-400 disabled:border-1 transition-all placeholder-shown:border placeholder-shown:border-emerald-400 placeholder-shown:border-t-emerald-400 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-emerald-400 focus:border-emerald-400"
                placeholder=" "
                required
              />
              <label
                form="floating_email"
                className="flex w-full font-dangrek h-full select-none pointer-events-none absolute left-0 !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-emerald-400 peer-focus:text-emerald-400 before:border-emerald-400 peer-focus:before:!border-emerald-400 after:border-blue-gray-200 peer-focus:after:!border-emerald-400"
              >
                EMAIL
              </label>
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>
            <div className="relative w-full min-w-[200px] h-14">
              <input
                type="password"
                {...register("password")}
                className="peer w-full h-full bg-transparent 0 font-dangrek focus:outline-0 disabled:bg-emerald-400 disabled:border-1 transition-all placeholder-shown:border placeholder-shown:border-emerald-400 placeholder-shown:border-t-emerald-400 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-emerald-400 focus:border-emerald-400"
                placeholder=" "
                required
              />
              <label
                form="floating_repeat_password"
                className="flex w-full h-full font-dangrek select-none pointer-events-none absolute left-0 !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-emerald-400 peer-focus:text-emerald-400 before:border-blue-gray-200 peer-focus:before:!border-emerald-400 after:border-blue-gray-200 peer-focus:after:!border-emerald-400"
              >
                PASSWORD
              </label>
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
            </div>
          </div>
          <div className="flex flex-row justify-center items-center gap-3 ">
            <Image className=" object-cover " src={facefb} alt="" />
            <Image className=" object-cover " src={goog} alt="" onClick={(e: React.MouseEvent<HTMLImageElement>) => handleLoginGoogle(e)} />
          </div>
          <div className="flex  flex-row justify-center">
            <label className="font-dangrek text-xl">
              <input
                type="checkbox"
                className="accent-emerald-400"
                {...register("staySignedIn")}
              />{" "}
              Stay signed in
            </label>
          </div>
          <div className="flex justify-center gap-3">
            <button type="submit" className="w-[114px] bg-emerald-400 hover:bg-emerald-500 text-white font-normal text-xl font-dangrek py-2 px-4 rounded">
              Login
            </button>
            <Link href="/registration">
              <button className="w-[114px] bg-emerald-400 hover:bg-emerald-500 text-white font-normal text-xl font-dangrek py-2 px-4 rounded">
                Sign up
              </button>
            </Link>
          </div>
        </form>
        {/* <div className="flex flex-col items-center pt-32 space-y-4">
          <div className="">
            <label className=" text-white text-2xl font-normal font-dangrek">
              New Customer?
            </label>
          </div>
          <div className="flex justify-center">
            <Link href="/registration">
              <button className="w-[114px] bg-emerald-400 hover:bg-emerald-500 text-white font-normal text-xl font-dangrek py-2 px-4 rounded">
                Sign up
              </button>
            </Link>
          </div>
        </div>   */}
      </div>
      <div className="w-full  bg-stone-950  relative h-[100%] lg:flex lg:justify-center hidden">
        <div className=" absolute text-centre top-10 left-[10vw]">
          <span className="text-emerald-400 text-5xl font-dangrek pt-6">
            Rev Up Your Day:
          </span>
          <span className="text-black text-5xl font-normal font-dangrek">
            {" "}
          </span>
          <span className="text-neutral-500 text-5xl font-normal font-dangrek  xl:text-center">
            Rent, Ride, Repeat
            <br />
          </span>
          <span className="text-black text-5xl font-normal font-dangrek ">
            <br />
          </span>
        </div>
        <Image src={bike} alt="Bike" width={800} className="self-center" />
      </div>
    </div>
  );
};

export default Loginpage;


