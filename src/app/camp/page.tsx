"use client";
import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import Cam from "../cam";
const CAMP: NextPage = () => {
  interface Data {
    user_email: string;
    name: string;
  }
  const [data, setData] = useState<Data>({ user_email: '', name: ''});
  useEffect(() => {
    const user_email = sessionStorage.getItem('user_email')!;
    const name = sessionStorage.getItem('user_name')!;
    const profile = sessionStorage.getItem('user_picture')!;
    if (user_email && name && profile) {
      setData({ user_email, name });
    } else {
      console.error('No user data found in session storage');
    }
  }, []);
  return (
    <div className="h-screen w-screen  px-[10rem]">
         <Cam bucket="addtonewface21" name={data.name} mail_id={data.user_email} endpointType="recognize"/>
    </div>
);  
};

export default CAMP;
