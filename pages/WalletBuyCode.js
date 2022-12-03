import React, { useState, useEffect } from "react";
import Image from "next/image";
import img1 from "../public/assets/SVG/Menu Right.svg";
import img2 from "../public/assets/SVG/Menu Center.svg";
import img3 from "../public/assets/SVG/Menu Bottom Left.svg";
import img4 from "../public/assets/SVG/Menu Bottom Right.svg";
import img5 from "../public/assets/SVG/Main Wallet Box.svg";
import img6 from "../public/assets/SVG/Code Entry.svg";
import img7 from "../public/assets/SVG/EMIAL Button.svg";
import Logo from "../public/assets/Cryft_Social_Logo.png";
import Link from "next/link";
import { motion } from "framer-motion";
import WalletHeader from "./WalletHeader";
import MainWalletBox from "../utils/MainWalletBox";
// import BgVideo from "../public/assets/animation_re_render_ (1).mp4";
const WalletBuyCode = () => {
  const [hide, sethide] = useState(true);
  const toggleItem = () => {
    hide ? sethide(false) : sethide(true);
  };
  useEffect(() => {
    let video = document.getElementById("Vid");
    if (!hide) {
      video.play();
    }
  });
  return (
    <>
      {!hide && (
        <motion.video
          initial={{
            opacity: 0,
            clipPath: "polygon (50% 0, 50% 0, 50% 100%, 50% 100%)",
          }}
          transition={{
            duration: 0.5,
          }}
          animate={{
            opacity: 1,
            clipPath: "polygon (50% 0, 50% 0, 50% 100%, 50% 100%)",
          }}
          exit={{
            clipPath: "polygon(0% 0px, 100% 0%, 100% 100%, 0% 100%)",
          }}
          id="Vid"
          className={"object-cover object-center h-[100vh] w-[100vw] "}
          loop
        >
          <source src={"/assets/animationBG.mp4"} type="video/mp4" />
        </motion.video>
      )}
      <div
        className={
          hide
            ? `bg-Redeem1 h-[100vh] font-Changeling text-white w-[100vw] bg-cover bg-center bg-no-repeat flex flex-col `
            : "hidden "
        }
      >
        {" "}
        <WalletHeader hide={hide} />
        {/* ............Bottom................ */}
        <div
          className={
            hide
              ? "relative z-[1]  lg:scale-y-100 md:scale-y-100 scale-y-[1.2]  lg:h-10 md:h-10 h-24 mb-2 customlg:h-7 custommd:h-0 lg:top-96 md:top-96 top-52 flex justify-center items-center"
              : "hidden"
          }
        >
          <MainWalletBox />
        </div>
        <div
          className={
            hide
              ? "text-white lg:mt-24 md:mt-24  mt-4 justify-center items-center z-[2] flex flex-col gap-4 font-Changeling text-sm "
              : "hidden"
          }
        >
          <div className="text-white justify-center items-center flex z-[2] font-Changeling text-3xl">
            <p className="lg:ml-44 md:ml-44 ml-40 lg:text-2xl md:text-2xl text-sm customlg:mt-5 custommd:mt-8 lg:mt-4 md:mt-3 -mt-8">
              CRYFT CODE
            </p>
          </div>
          <Link href="/Wallet">
            <div className="flex flex-col cursor-pointer justify-center items-center  lg:mr-72 md:mr-72 mr-44 w-[15vh] mt-2 text-sm z-[100]">
              <Image layout="intrinsic" objectFit="contain" src={img7} />
              <div className="absolute">GO BACK</div>
            </div>
          </Link>
          <div className="flex flex-col justify-center items-center mt-2 lg:text-sm md:text-sm text-xs  z-[100]">
            <div className="absolute">.1111 BNB EACH</div>
          </div>
          <div className="flex flex-col cursor-pointer justify-center items-center lg:w-[30vh] md:w-[30vh] w-[25vh] mt-2 lg:text-2xl md:text-2xl text-lg z-[100]">
            <Image layout="intrinsic" objectFit="contain" src={img7} />
            <div className="absolute">BUY CODE</div>
          </div>

          <div className="flex flex-col justify-center items-center mt-4 lg:text-sm md:text-sm text-xs z-[100]">
            <div className="absolute mt-4 flex flex-col items-center">
              <p>CRYFT CODES RESULT IN CRYFT TOKEN</p>
              <p>AT TIME OF REDEMPTION</p>
            </div>
          </div>

          <div className="flex flex-col justify-center tracking-wider items-center lg:mt-14 md:mt-14 mt-10 lg:text-3xl md:text-2xl text-xl  z-[100]">
            <div className="absolute">CODES PURCHASED</div>
          </div>
          <div className="flex flex-col justify-center items-center mt-5 lg:text-sm md:text-sm text-xs z-[100]">
            <div className="absolute">STORE CODE IN SAFE PLACE</div>
          </div>

          <div className="flex flex-col lg:mt-4 md:mt-4 mt-0  items-center">
            <div className="flex space-x-5">
              <p className="mt-3 lg:text-xl md:text-xl text-sm">
                1234567891234
              </p>
              <div className="flex cursor-pointer flex-col justify-center items-center lg:w-[15vh] md:w-[15vh] w-[13vh] mt-2 lg:text-sm md:text-sm text-xs z-[100]">
                <Image layout="intrinsic" objectFit="contain" src={img7} />
                <div className="absolute">REMOVE</div>
              </div>
            </div>
            <div className="flex space-x-5">
              <p className="mt-3 lg:text-xl md:text-xl text-sm">
                1234567891234
              </p>
              <div className="flex flex-col cursor-pointer justify-center items-center lg:w-[15vh] md:w-[15vh] w-[13vh] mt-2 lg:text-sm md:text-sm text-xs z-[100]">
                <Image layout="intrinsic" objectFit="contain" src={img7} />
                <div className="absolute">REMOVE</div>
              </div>
            </div>
            <div className="flex space-x-5">
              <p className="mt-3 lg:text-xl md:text-xl text-sm">
                1234567891234
              </p>
              <div className="flex flex-col cursor-pointer  justify-center items-center lg:w-[15vh] md:w-[15vh] w-[13vh] mt-2 lg:text-sm md:text-sm text-xs z-[100]">
                <Image layout="intrinsic" objectFit="contain" src={img7} />
                <div className="absolute">REMOVE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={toggleItem}
        className="absolute lg:bottom-8 md:bottom-8 bottom-1 z-[1000] lg:w-[18vh] md:w-[15vh] w-[10vh] cursor-pointer lg:right-5 md:right-5 right-1"
      >
        <Image
          className="image-logo"
          src={Logo}
          layout="intrinsic"
          objectFit="contain"
        />
      </div>
    </>
  );
};

export default WalletBuyCode;
