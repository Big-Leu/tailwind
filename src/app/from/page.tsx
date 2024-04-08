"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import back from "../assets/1.jpg";
import { NextPage } from "next";
import mail from "../assets/112.svg";
import Link from "next/link";
import aa from "../assets/aadhar.svg";
import bb from "../assets/bb.svg";
import axios from "axios";
import Cam from "../cam";

interface WelcomeProps {
  hr: number;
  price: string;
  label: string;
  icon: string;
  color: string;
}

const FORM: NextPage<WelcomeProps> = (props) => {
  const [checkedStates, setCheckedStates] = useState([false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [drivingLicense, setDrivingLicense] = useState("");

  const handleCheckboxChange = (index) => {
    const newCheckedStates = [...checkedStates];
    newCheckedStates[index] = !newCheckedStates[index];
    setCheckedStates(newCheckedStates);
    
  };

  useEffect(() => {
    console.log(checkedStates);
  }, [checkedStates]);

  const fetchData = async (date) => {
    try {
      const response = await axios.get(
        `http://localhost:8081/date?date=${date}`
      );
      console.log(response.data["0"]);

      for (let key in response.data["0"]) {
        if (response.data["0"].hasOwnProperty(key)) {
          let value = response.data["0"][key];
          if (value == 1) {
            let element = document.getElementById(key);
            if (element) {
              element.classList.add("pointer-events-none", "opacity-50");
            }
          }
        }
      }

     
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const dateValue = event.target.value;
    setSelectedDate(dateValue);
    console.log("Selected date:", dateValue);
    fetchData(dateValue);
    // You can perform further processing with the selected date here
  };
  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:8080/form", {
        userName,
        userEmail,
        aadhar,
        drivingLicense,
        selectedDate,
        checkedStates,
      });
      console.log("Form submitted successfully", response.data);
      const url = `/dashboard?user_email=${encodeURIComponent(userEmail)}&name=${encodeURIComponent(userName)}`;
      window.location.href = url;
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error response
    }
  };
  return (
    <div className="static z-10 w-screen h-screen flex justify-center overflow-hidden">
      <div className="absolute z-20 bg-stone-900 rounded-xl max-h-[85%] min-w-[60%]  my-[3rem] mx-5 py-10  overflow-y-auto">
        <form className=" mx-auto space-y-5 px-10" >
          <div id="userName">
            <label
              htmlFor="website-admin"
              className="block mb-2 text-2sm font-dangrek text-gray-900 dark:text-white"
            >
              Username
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
              </span>
              <input
                type="text"
                id="website-admin"
                className="rounded-none rounded-e-lg font-dangrek border border-gray-300 text-gray-900  block flex-1 min-w-0 w-full text-sm p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="UserName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>
          </div>
          <div id="email">
            <label
              htmlFor="website-admin"
              className="block mb-2 text-2sm font-dangrek text-gray-900 dark:text-white"
            >
              Email
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <Image src={mail} alt="" />
              </span>
              <input
                type="text"
                id="website-admin"
                className="rounded-none rounded-e-lg  font-dangrek border border-gray-300 text-gray-900  block flex-1 min-w-0 w-full text-sm p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="UserEmail"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div id="Addhar">
            <label
              htmlFor="website-admin"
              className="block mb-2 text-2sm font-dangrek text-gray-900 dark:text-white"
            >
              AADHAR
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <Image src={aa} alt="" />
              </span>
              <input
                type="text"
                id="website-admin"
                className="rounded-none rounded-e-lg  font-dangrek border border-gray-300 text-gray-900  block flex-1 min-w-0 w-full text-sm p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="1234-5679-9102"
                value={aadhar}
                onChange={(e) => setAadhar(e.target.value)}
                required
              />
            </div>
          </div>
          <div id="driviling ">
            <label
              htmlFor="website-admin"
              className="block mb-2 text-2sm font-dangrek text-gray-900 dark:text-white"
            >
              Driving Lisence
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <Image src={bb} alt="" />
              </span>
              <input
                type="text"
                id="website-admin"
                className="rounded-none rounded-e-lg  font-dangrek border border-gray-300 text-gray-900  block flex-1 min-w-0 w-full text-sm p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="DL-1420110012345"
                value={drivingLicense}
                onChange={(e) => setDrivingLicense(e.target.value)}
                required
              />
            </div>
          </div>
          <div id="Date ">
            <label
              htmlFor="website-admin"
              className="block mb-2 text-2sm font-dangrek text-gray-900 dark:text-white"
            >
              Date
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <Image src={bb} alt="" />
              </span>
              <input
                type="date"
                id="website-date"
                className="rounded-none rounded-e-lg  font-dangrek border border-gray-300 text-gray-900  block flex-1 min-w-0 w-full text-sm p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="DL-1420110012345"
                onChange={handleDateChange}
              />
            </div>
          </div>
          <div id="time selection">
            <label className="font-dangrek text-xl text-stone-200"> Time</label>
            <div className="mt-2 w-full h-auto grid grid-cols-6 gap-2 bg-gray-600 rounded-xl px-5 py-5">
              <div
                id={`1AM`}
                className={`w-auto h-auto rounded-md ${
                  checkedStates[0] ? "bg-emerald-400" : "bg-stone-700"
                } text-center font-dangrek py-2`}
                onClick={() => handleCheckboxChange(0)}
              >
                1 AM
              </div>
              <div
                id={`2AM`}
                className={`w-auto h-auto rounded-md ${
                  checkedStates[1] ? "bg-emerald-400" : "bg-stone-700"
                } text-center font-dangrek py-2`}
                onClick={() => handleCheckboxChange(1)}
              >
                2 AM
              </div>
              <div
                id={`3AM`}
                className={`w-auto h-auto rounded-md ${
                  checkedStates[2] ? "bg-emerald-400" : "bg-stone-700"
                } text-center font-dangrek py-2`}
                onClick={() => handleCheckboxChange(2)}
              >
                3 AM
              </div>
              <div
                id={`4AM`}
                className={`w-auto h-auto rounded-md ${
                  checkedStates[3] ? "bg-emerald-400" : "bg-stone-700"
                } text-center font-dangrek py-2`}
                onClick={() => handleCheckboxChange(3)}
              >
                4 AM
              </div>
              <div
                id={`5AM`}
                className={`w-auto h-auto rounded-md ${
                  checkedStates[4] ? "bg-emerald-400" : "bg-stone-700"
                } text-center font-dangrek py-2`}
                onClick={() => handleCheckboxChange(4)}
              >
                5 AM
              </div>
              <div
                id={`6AM`}
                className={`w-auto h-auto rounded-md ${
                  checkedStates[5] ? "bg-emerald-400" : "bg-stone-700"
                } text-center font-dangrek py-2`}
                onClick={() => handleCheckboxChange(5)}
              >
                6 AM
              </div>
              <div
                id={`7AM`}
                className={`w-auto h-auto rounded-md ${
                  checkedStates[6] ? "bg-emerald-400" : "bg-stone-700"
                } text-center font-dangrek py-2`}
                onClick={() => handleCheckboxChange(6)}
              >
                7 AM
              </div>
              <div
                id={`8AM`}
                className={`w-auto h-auto rounded-md ${
                  checkedStates[7] ? "bg-emerald-400" : "bg-stone-700"
                } text-center font-dangrek py-2`}
                onClick={() => handleCheckboxChange(7)}
              >
                8 AM
              </div>
              <div
                id={`9AM`}
                className={`w-auto h-auto rounded-md ${
                  checkedStates[8] ? "bg-emerald-400" : "bg-stone-700"
                } text-center font-dangrek py-2`}
                onClick={() => handleCheckboxChange(8)}
              >
                9 AM
              </div>
              <div
                id={`10AM`}
                className={`w-auto h-auto rounded-md ${
                  checkedStates[9] ? "bg-emerald-400" : "bg-stone-700"
                } text-center font-dangrek py-2`}
                onClick={() => handleCheckboxChange(9)}
              >
                10 AM
              </div>
              <div
                id={`11AM`}
                className={`w-auto h-auto rounded-md ${
                  checkedStates[10] ? "bg-emerald-400" : "bg-stone-700"
                } text-center font-dangrek py-2`}
                onClick={() => handleCheckboxChange(10)}
              >
                11 AM
              </div>
              <div
                id={`12AM`}
                className={`w-auto h-auto rounded-md ${
                  checkedStates[11] ? "bg-emerald-400" : "bg-stone-700"
                } text-center font-dangrek py-2`}
                onClick={() => handleCheckboxChange(11)}
              >
                12 AM
              </div>
              <div
                id={`1PM`}
                className={`w-auto h-auto rounded-md ${
                  checkedStates[12] ? "bg-emerald-400" : "bg-stone-700"
                } text-center font-dangrek py-2`}
                onClick={() => handleCheckboxChange(12)}
              >
                1 PM
              </div>
              <div
                id={`2PM`}
                className={`w-auto h-auto rounded-md ${
                  checkedStates[13] ? "bg-emerald-400" : "bg-stone-700"
                } text-center font-dangrek py-2`}
                onClick={() => handleCheckboxChange(13)}
              >
                2 PM
              </div>
              <div
                id={`3PM`}
                className={`w-auto h-auto rounded-md ${
                  checkedStates[14] ? "bg-emerald-400" : "bg-stone-700"
                } text-center font-dangrek py-2`}
                onClick={() => handleCheckboxChange(14)}
              >
                3 PM
              </div>
              <div
                id={`4PM`}
                className={`w-auto h-auto rounded-md ${
                  checkedStates[15] ? "bg-emerald-400" : "bg-stone-700"
                } text-center font-dangrek py-2`}
                onClick={() => handleCheckboxChange(15)}
              >
                4 PM
              </div>
              <div
                id={`5PM`}
                className={`w-auto h-auto rounded-md ${
                  checkedStates[16] ? "bg-emerald-400" : "bg-stone-700"
                } text-center font-dangrek py-2`}
                onClick={() => handleCheckboxChange(16)}
              >
                5 PM
              </div>
              <div
                id={`6PM`}
                className={`w-auto h-auto rounded-md ${
                  checkedStates[17] ? "bg-emerald-400" : "bg-stone-700"
                } text-center font-dangrek py-2`}
                onClick={() => handleCheckboxChange(17)}
              >
                6 PM
              </div>
              <div
                id={`7PM`}
                className={`w-auto h-auto rounded-md ${
                  checkedStates[18] ? "bg-emerald-400" : "bg-stone-700"
                } text-center font-dangrek py-2`}
                onClick={() => handleCheckboxChange(18)}
              >
                7 PM
              </div>
              <div
                id={`8PM`}
                className={`w-auto h-auto rounded-md ${
                  checkedStates[19] ? "bg-emerald-400" : "bg-stone-700"
                } text-center font-dangrek py-2`}
                onClick={() => handleCheckboxChange(19)}
              >
                8 PM
              </div>
              <div
                id={`9PM`}
                className={`w-auto h-auto rounded-md ${
                  checkedStates[20] ? "bg-emerald-400" : "bg-stone-700"
                } text-center font-dangrek py-2`}
                onClick={() => handleCheckboxChange(20)}
              >
                9 PM
              </div>
              <div
                id={`10PM`}
                className={`w-auto h-auto rounded-md ${
                  checkedStates[21] ? "bg-emerald-400" : "bg-stone-700"
                } text-center font-dangrek py-2`}
                onClick={() => handleCheckboxChange(21)}
              >
                10 PM
              </div>
              <div
                id={`11PM`}
                className={`w-auto h-auto rounded-md ${
                  checkedStates[22] ? "bg-emerald-400" : "bg-stone-700"
                } text-center font-dangrek py-2`}
                onClick={() => handleCheckboxChange(22)}
              >
                11 PM
              </div>
              <div
                id={`12PM`}
                className={`w-auto h-auto rounded-md ${
                  checkedStates[23] ? "bg-emerald-400" : "bg-stone-700"
                } text-center font-dangrek py-2`}
                onClick={() => handleCheckboxChange(23)}
              >
                12 PM
              </div>
            </div>
            <div>
              <Cam bucket="addtobucket21" name={userName} mail_id={userEmail} endpointType="predict"/>
            </div>
            <div>
              <button className="mt-[3rem] relative  w-full h-[60px] bg-emerald-400 hover:bg-emerald-600 text-white font-normal text-[30px] font-dangrek py-2 px-4 rounded" onClick={handleSubmit}>
                      Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="absolute inset-0 bg-cover bg-center z-0">
        <Image src={back} alt="" layout="fill" className="blur-md" />
      </div>
    </div>
  );
};

export default FORM;
