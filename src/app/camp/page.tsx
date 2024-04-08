"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { NextPage } from "next";
import Link from "next/link";
import Cam from "../cam";
const CAMP: NextPage = () => {
  const params = new URLSearchParams(window.location.search);
  const user_email = params.get('user_email');
  const name = params.get('name');
  return (
    <div className="h-screen w-screen  px-[10rem]">
         <Cam bucket="addtonewface21" name={name} mail_id={user_email} endpointType="recognize"/>
    </div>
);  
};

export default CAMP;
