"use client"
import React from 'react';
import Cam from "../cam";
import eev from "../assets/ev bike.svg";
import hel from "../assets/hell.svg";
import Image from "next/image";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { handleRegister } from "../fuctionsBackend/registration";
const loginSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters long"),
  lastName: z.string().min(2, "Last name must be at least 2 characters long"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  confirmPassword: z.string().min(6, "Confirm password must be at least 6 characters long"),
  phone: z.string().min(10, "Phone number must be at least 10 characters long"),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type LoginFormInputs = z.infer<typeof loginSchema>;

const Registration: NextPage = () => {
  const { register, handleSubmit, formState: { errors }, watch} = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
    mode: "all"
  });

   console.log(watch());
  // const handleRegister = (data: LoginFormInputs) => {
  //   console.log(data);
  // };

  return (
    <div className="min-w-screen min-h-full bg-transparent flex flex-row justify-start items-start overflow-hidden">
      <div className="static min-w-[36%] min-h-full bg-stone-900 overflow-y-clip">
        <div className="relative w-full h-full flex flex-col space-y-[6rem]">
          <div className="relative w-[60px] h-[64px] mt-[5rem] ml-[4rem]">
            <Image className="object-cover" src={eev} alt="" />
          </div>
          <div className="relative px-10">
            <Image className="object-cover" src={hel} alt="" />
          </div>
          <div className='relative text-center px-10'>
            <div className="relative font-normal font-dangrek text-5xl">
              <h1>Book on demand</h1>
              <h1 className="relative">Right in your hand</h1>
            </div>
            <div className="mt-[1rem] relative font-normal font-dangrek text-[30px] text-stone-600">
              <p>Welcome to the future of reading with our Rental Book App.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative min-w-[64%] min-h-full bg-stone-950">
        <form className="w-auto px-10 py-10 min-h-full" onSubmit={handleSubmit(handleRegister)}>
          <div className="relative z-0 w-full h-20 mb-5 ">
            <input
              {...register("email")}
              required
              type="email"
              className={`h-[5rem] block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white focus:outline-none focus:ring-0 peer 
                          ${errors.email ? 'border-red-500 dark:border-red-500 focus:border-red-500 dark:focus:border-red-500' : 'border-gray-300 dark:border-gray-600 focus:border-blue-600 dark:focus:border-emerald-400'}`}
              placeholder=" "
            />
            <label
              htmlFor="floating_email"
              className={`peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                          ${errors.email ? 'text-red-500 dark:text-red-500' : 'text-gray-500 dark:text-gray-400'} 
                          peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto 
                          ${errors.email ? '' : 'peer-focus:text-blue-600 peer-focus:dark:text-emerald-400'} 
                          peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
            >
              Email address
            </label>
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>
          <div className="relative z-0 w-full h-20 mb-5 group">
            <input
              {...register("password")}
              required
              type="password"
              className={`h-[5rem] block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white focus:outline-none focus:ring-0 peer 
                          ${errors.password ? 'border-red-500 dark:border-red-500 focus:border-red-500 dark:focus:border-red-500' : 'border-gray-300 dark:border-gray-600 focus:border-blue-600 dark:focus:border-emerald-400'}`}
              placeholder=" "
            />
            <label
              htmlFor="floating_password"
              className={`peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                          ${errors.password ? 'text-red-500 dark:text-red-500' : 'text-gray-500 dark:text-gray-400'} 
                          peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto 
                          ${errors.password ? '' : 'peer-focus:text-blue-600 peer-focus:dark:text-emerald-400'} 
                          peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
            >
              Password
            </label>
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>
          <div className="relative z-0 w-full h-20 mb-5 group">
            <input
              {...register("confirmPassword")}
              required
              type="password"
              className={`h-[5rem] block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white focus:outline-none focus:ring-0 peer 
                          ${errors.confirmPassword ? 'border-red-500 dark:border-red-500 focus:border-red-500 dark:focus:border-red-500' : 'border-gray-300 dark:border-gray-600 focus:border-blue-600 dark:focus:border-emerald-400'}`}
              placeholder=" "
            />
            <label
              htmlFor="floating_repeat_password"
              className={`peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                          ${errors.confirmPassword ? 'text-red-500 dark:text-red-500' : 'text-gray-500 dark:text-gray-400'} 
                          peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto 
                          ${errors.confirmPassword ? '' : 'peer-focus:text-blue-600 peer-focus:dark:text-emerald-400'} 
                          peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
            >
              Confirm password
            </label>
            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
          </div>
          <div className="grid xl:gap-10 md:grid-cols-2 h-20 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                {...register("firstName")}
                required
                type="text"
                className={`h-20 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white focus:outline-none focus:ring-0 peer 
                            ${errors.firstName ? 'border-red-500 dark:border-red-500 focus:border-red-500 dark:focus:border-red-500' : 'border-gray-300 dark:border-gray-600 focus:border-blue-600 dark:focus:border-emerald-400'}`}
                placeholder=" "
              />
              <label
                htmlFor="floating_first_name"
                className={`peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                            ${errors.firstName ? 'text-red-500 dark:text-red-500' : 'text-gray-500 dark:text-gray-400'} 
                            peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto 
                            ${errors.firstName ? '' : 'peer-focus:text-blue-600 peer-focus:dark:text-emerald-400'} 
                            peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
              >
                First Name
              </label>
              {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
            </div>
            <div className="relative z-0 w-full mb-5 group h-20">
              <input
                {...register("lastName")}
                required
                type="text"
                className={`h-20 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white focus:outline-none focus:ring-0 peer 
                            ${errors.lastName ? 'border-red-500 dark:border-red-500 focus:border-red-500 dark:focus:border-red-500' : 'border-gray-300 dark:border-gray-600 focus:border-blue-600 dark:focus:border-emerald-400'}`}
                placeholder=" "
              />
              <label
                htmlFor="floating_last_name"
                className={`peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                            ${errors.lastName ? 'text-red-500 dark:text-red-500' : 'text-gray-500 dark:text-gray-400'} 
                            peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto 
                            ${errors.lastName ? '' : 'peer-focus:text-blue-600 peer-focus:dark:text-emerald-400'} 
                            peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
              >
                Last Name
              </label>
              {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
            </div>
          </div>
          <div className="relative pt-10  grid md:grid-cols-1 md:gap-6 h-20">
            <div className="relative z-0 w-full mb-5 group">
              <input
                {...register("phone")}
                required
                type="tel"
                className={`h-20 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 appearance-none dark:text-white focus:outline-none focus:ring-0 peer 
                            ${errors.phone ? 'border-red-500 dark:border-red-500 focus:border-red-500 dark:focus:border-red-500' : 'border-gray-300 dark:border-gray-600 focus:border-blue-600 dark:focus:border-emerald-400'}`}
                placeholder=" "
              />
              <label
                htmlFor="floating_phone"
                className={`peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                            ${errors.phone ? 'text-red-500 dark:text-red-500' : 'text-gray-500 dark:text-gray-400'} 
                            peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto 
                            ${errors.phone ? '' : 'peer-focus:text-blue-600 peer-focus:dark:text-emerald-400'} 
                            peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}
              >
                Phone number (+91-1234567890)
              </label>
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
            </div>
          </div>
          <div className="relative px-10 mt-[5rem] z-0 w-full">
            <Cam bucket="addtobucket21" name={watch.firstName} mail_id={watch.email} endpointType="predict"/>
          </div>
          <div className="relative flex justify-center w-full mt-[10rem]">
            <button
              type="submit"
              className="relative min-w-[30%] h-[60px] bg-emerald-400 hover:bg-emerald-600 text-white font-normal text-[30px] font-dangrek py-2 px-4 rounded"
              // onClick={handleSubmit(handleRegister)}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
