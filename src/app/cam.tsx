"use client";
import { NextPage } from "next";
import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import Webcam from "react-webcam";
import axios from "axios";
import { MouseEventHandler } from 'react';

interface WelcomeProps {
  bucket: string;
  name: string;
  mail_id: string;
  endpointType: string;
}

const Cam: NextPage<WelcomeProps> = (props) => {
  const videoConstraints = {
    width: 1920,
    height: 1080,
    facingMode: "user",
  };

  const [isCaptureEnable, setCaptureEnable] = useState<boolean>(false);
  const webcamRef = useRef<Webcam>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const capture = useCallback(async () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      try {
        const response = await axios.post(
          `http://localhost:5000/${props.bucket}`,
          {
            imageData: imageSrc,
          }
        );
        console.log(imageSrc);
        setImageUrl(response.data);
        console.log(imageUrl);
        if (imageUrl) {
          handleImageClick(imageUrl, props.name, props.mail_id);
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  }, [webcamRef]);

  const handleImageClick = (
    imageUrl: string,
    name: string,
    mail_id: string
  ): void => {
    const data = {
      user_info: [
        {
          image_url: imageUrl,
          mail_id,
          name,
        },
      ],
    };

    axios
      .post(`http://localhost:5000/${props.endpointType}`, data)
      .then((response) => {
        console.log("Prediction result:", response.data);
        if(response.data==="YES" && props.endpointType==="recognize"){
          console.log("entered NO")
          window.location.href = '/happy';
        }
        else if(response.data==="NO" && props.endpointType==="recognize"){
          console.log("entered NO")
          alert("NO Matched")
        }
        else{
          console.log("sdkfhkdhk")
        }
      })
      .catch((error) => {
        console.error("Error making prediction:", error);
      });
  };
  return (
    <>
      <header>
        <h1 className="relative font-normal font-dangrek text-4xl mt-[2rem] text-emerald-400">
          Image Capture
        </h1>
      </header>
      {!isCaptureEnable && (
        <button
          className="absolute ml-[48rem] mt-[-2.3rem] bg-emerald-400 hover:bg-emerald-500 text-white font-normal text-3xl font-dangrek py-[0.1rem] px-[.5rem] rounded"
          onClick={() => setCaptureEnable(true)}
        >
          Start
        </button>
      )}
      {isCaptureEnable && (
        <>
          <div className="rounded-md mt-10 mb-10 border-double border-[1vw] border-emerald-400">
            <Webcam
              audio={false}
              width="100%"
              height="auto"
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
            />
          </div>
          <div>
            <button
              className="absolute mt-[-1rem] ml-[1rem] bg-emerald-400 hover:bg-emerald-500 text-white font-normal text-3xl font-dangrek py-[0.1rem] px-[1rem] rounded"
              onClick={() => setCaptureEnable(false)}
            >
              End
            </button>
          </div>
          <button
            className="absolute mt-[-1rem] ml-[8rem] bg-emerald-400 hover:bg-emerald-500 text-white font-normal text-3xl font-dangrek py-[0.1rem] px-[1rem] rounded"
            onClick={capture}
          >
            Capture
          </button>
        </>
      )}
      {imageUrl && (
        <>
          <div>
            <button
              className="absolute mt-[2rem] ml-[1rem] bg-emerald-400 hover:bg-emerald-500 text-white font-normal text-3xl font-dangrek py-[0.1rem] px-[1rem] rounded"
              onClick={() => setImageUrl(null)}
            >
              Delete
            </button>
          </div>
          <div className="mt-[8rem]" onClick={() => handleImageClick(imageUrl, props.name, props.mail_id)}>
            <Image
              src={imageUrl}
              alt="Screenshot"
              width="1920"
              height="1080"
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </>
      )}
    </>
  );
};

export default Cam;
