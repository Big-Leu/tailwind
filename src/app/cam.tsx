"use client"
import Image from "next/image";
import { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
const Cam: React.FC = () => {
  const videoConstraints = {
    width: 720,
    height: 360,
    facingMode: "user"
  };

  const [isCaptureEnable, setCaptureEnable] = useState<boolean>(false);
  const webcamRef = useRef<Webcam>(null);
  const [url, setUrl] = useState<string | null>(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setUrl(imageSrc);
    }
  }, [webcamRef]);

  return (
    <>
      <header>
        <h1 className="relative font-normal font-dangrek text-4xl mt-[2rem] text-emerald-400">Image Capture</h1>
      </header>
      {!isCaptureEnable && (
        <button className="absolute ml-[48rem] mt-[-2.3rem] bg-emerald-400 hover:bg-emerald-500 text-white font-normal text-3xl font-dangrek py-[0.1rem] px-[.5rem] rounded" onClick={() => setCaptureEnable(true)}>Start</button>
      )}
      {isCaptureEnable && (
        <>
          <div>
            <button className="absolute mt-[32.5rem] ml-[1rem] bg-emerald-400 hover:bg-emerald-500 text-white font-normal text-3xl font-dangrek py-[0.1rem] px-[1rem] rounded" onClick={() => setCaptureEnable(false)}>End</button>
          </div>
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
          <button className="absolute mt-[-1rem] ml-[8rem] bg-emerald-400 hover:bg-emerald-500 text-white font-normal text-3xl font-dangrek py-[0.1rem] px-[1rem] rounded" onClick={capture}>Capture</button>
        </>
      )}
      {url && (
        <>
          <div>
            <button onClick={() => setUrl(null)}>Delete</button>
          </div>
          <div>
            <Image src={url} alt="Screenshot" width="100%" height="auto"/>
          </div>
        </>
      )}
    </>
  )
};

export default Cam;
