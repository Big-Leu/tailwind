import Image from "next/image";
import faceb from './assets/fb.png'
import facefb from './assets/facefb.svg'
import goog from './assets/goog.svg'
import bike from './assets/bike.png'
import google from './assets/go.png'
import loginpage from "./loginpage";
import equal from "./assets/equal.svg";
import eev from "./assets/ev bike.svg"
import bike2 from "./assets/bike2.svg"
import ather from "./assets/ather.svg"
import slap from "./assets/slap.svg"
export default function Home() {
  return (
    <div className="w-[1920px] h-[1080px]  bg-transparent flex flex-row justify-start items-start">
      <div className=" drop-shadow-lg static w-[975px] h-[1080px] z-10 bg-stone-950 flex flex-col space-y-10 overflow-hidden">
        <div >
          <Image className="relative w-56px top-[70px] left-[943px] z-20 object-cover" src={equal} alt="" />
          <Image className="relative w-[60px] h-[64px] top-[86px] left-[70px] z-20 object-cover " src={eev} alt="" />
        </div>
        <div >
          <h1 className=" relative font-dangrek top-[120px] left-[163px] text-[70px]">Take the </h1>
          <h1 className="relative font-dangrek top-[120px] left-[163px] text-[70px]">Streets.</h1>
          <h1 className="relative font-dangrek text-emerald-400 top-[40px] left-[406px] text-[50px]">Allyna 1.0</h1>
        </div>
        <div>
          <p className="relative top-[10px] left-[163px] w-[614px] font-normal font-dangrek text-[20px]  text-stone-600"><span className="text-white">Shift your journey, not gears.</span> Navigate the city with ease on our rental vehicles, freeing your mind as the bike intuitively adapts to power the speed you desire. Embrace the fastest way to move through the urban landscape and experience the freedom of a seamless ride. </p>
        </div>
        <div className="relative left-[163px]">
          <button className="w-[169px] bg-emerald-400 hover:bg-emerald-500 text-white font-normal text-xl font-dangrek py-3 px-4 rounded">
            Book Ride
          </button>
        </div>
        <div>
          <Image className="relative w-56px top-[-90px] left-[-30px] z-20 object-cover " src={bike2} alt="" />
          <Image className="relative w-[264px] h-[95px] top-[-270px] left-[550px] z-20 object-cover " src={ather} alt="" />
          <Image className="relative w-[953px] h-[953px] top-[-1000px] left-[-200px]  z-10 object-cover " src={slap} alt="" />
        </div>
      </div>
      <div className=" static w-[960px] h-[1080px] z-0 bg-stone-900 overflow-visible">
      <Image className=" relative w-56px top-[70px] left-[-30px] z-20 object-cover" src={equal} alt="" />
      </div>
    </div>
  )
}