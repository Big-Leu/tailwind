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
        <h1 className="relative font-normal font-dangrek text-[30px] top-[30px] text-emerald-400">Image Capture</h1>
      </header>
      {!isCaptureEnable && (
        <button className=" relative left-[1000px] w-[114px] top-[-10px] bg-emerald-400 hover:bg-emerald-500 text-white font-normal text-xl font-dangrek py-2 px-4 rounded" onClick={() => setCaptureEnable(true)}>Start</button>
      )}
      {isCaptureEnable && (
        <>
          <div>
            <button className="relative left-[1000px] w-[114px] top-[-10px] bg-emerald-400 hover:bg-emerald-500 text-white font-normal text-xl font-dangrek py-2 px-4 rounded"onClick={() => setCaptureEnable(false)}>End</button>
          </div>
          <div className="rounded-md border-double border-4 w-[540px] border-emerald-400">
            <Webcam
              audio={false}
              width={540}
              height={360}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
            />
          </div>
          <button className="relative top-[-330px] left-[850px] w-[114px] bg-emerald-400 hover:bg-emerald-500 text-white font-normal text-xl font-dangrek py-2 px-4 rounded" onClick={capture}>Capture</button>
        </>
      )}
      {url && (
        <>
          <div>
            <button onClick={() => setUrl(null)}>Delete</button>
          </div>
          <div>
            <Image src={url} alt="Screenshot" width="540" height="360"/>
          </div>
        </>
      )}
    </>
  );
};

export default Cam;
