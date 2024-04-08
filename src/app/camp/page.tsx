"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { NextPage } from "next";
import Link from "next/link";
import Cam from "../cam";
const CAMP: NextPage = () => {

  return (
    <div className="h-screen w-screen  px-[10rem]">
         <Cam/>
    </div>
);  
};

export default CAMP;
