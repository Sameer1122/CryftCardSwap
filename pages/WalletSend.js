import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import img5 from "../public/assets/SVG/Main Wallet Box.svg";
import img6 from "../public/assets/SVG/Code Entry.svg";
import img7 from "../public/assets/SVG/EMIAL Button.svg";
import Logo from "../public/assets/Cryft_Social_Logo.png";
import WalletHeader from "./WalletHeader";
import { motion } from "framer-motion";
import MainWalletBox from "../utils/MainWalletBox";
import MetaMaskButton from "../utils/MetaMaskButton";
import { useWindowSize } from "../utils/hooks/useWindowResize";
const WalletSend = () => {
  const [hide, sethide] = useState(true);
  const [height, width] = useWindowSize();

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
            : "hidden"
        }
      >
        {" "}
        {width > 786 && <WalletHeader hide={hide} />}
        {/* .......Bottom........... */}
        {width >= 786 ? (
          <>
            <div
              className={
                hide
                  ? "relative z-[1]  lg:h-10 md:h-10 h-24 mb-2 customlg:h-7 custommd:h-0 lg:top-96 md:top-96 top-40 flex justify-center items-center"
                  : "hidden"
              }
            >
              <MainWalletBox />
            </div>
            <div
              className={
                hide
                  ? "text-white lg:mt-36 md:mt-36 mt-0 justify-center items-center z-[2] flex flex-col font-Changeling text-sm "
                  : "hidden"
              }
            >
              <div className="text-white justify-center items-center flex font-Changeling text-3xl">
                <p className="lg:ml-52 md:ml-52 ml-32 lg:text-2xl md:text-2xl text-lg customlg:mt-5 custommd:mt-8 lg:mt-6 md:mt-6 -mt-6">
                  {" "}
                  SEND TOKEN
                </p>
              </div>
              <Link href="/Wallet">
                <div className="flex flex-col cursor-pointer justify-center items-center  lg:mr-72 md:mr-72 mr-44 w-[15vh] mt-2 text-sm z-[100]">
                  <MetaMaskButton height={30} />
                  <div className="absolute">GO BACK</div>
                </div>
              </Link>
              <div className="flex justify-center content-center text-white w-[90%]">
                <input
                  className="lg:text-xl md:text-xl placeholder:text-gray-300 py-2  placeholder:text-center active:outline-none  text-sm mt-8 z-10 bg-[#ffffff17] content-center"
                  placeholder="10234.304267 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; CRYFT"
                />
              </div>

              <div className="relative lg:flex md:flex hidden text-3xl z-[1] mt-5 text-regal-blue font-Changeling">
                <p>TO</p>
              </div>
              <div className="flex justify-center content-center text-white w-[90%]">
                <input
                  className="lg:text-xl md:text-xl placeholder:text-gray-300 py-2   placeholder:text-center active:outline-none  text-sm mt-8 z-10 bg-[#ffffff17] content-center"
                  placeholder="10234.304267 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; BNB"
                />
              </div>

              <div className="relative lg:w-fit md:w-fit w-[40%] flex cursor-pointer lg:mt-3 md:mt-3 mt-0">
                <MetaMaskButton height={50} />
              </div>
              <div className="relative flex cursor-pointer lg:text-3xl md:text-3xl text-xl lg:-mt-11 md:-mt-11 -mt-8">
                <p className="cursor-pointer">SEND</p>
              </div>
              <div className="lg:text-lg md:text-sm text-xs tracking-wider self-center lg:mt-14 md:mt-14 mt-8 ml-10">
                HISTORY
              </div>
            </div>
          </>
        ) : (
          <>
            <div
              style={{ boxShadow: "0 0 6px rgb(19 168 158)" }}
              className={
                hide
                  ? "text-white bg-[#0000008e] backdrop-blur-md gap-4 rounded-xl w-[90%] m-auto  justify-center items-center z-[2] flex flex-col font-Changeling text-sm "
                  : "hidden"
              }
            >
              <div className="text-white justify-center items-center flex font-Changeling text-3xl">
                <p className="text-2xl  customlg:mt-5 custommd:mt-8 lg:mt-6 md:mt-6 -mt-6">
                  {" "}
                  SEND TOKEN
                </p>
              </div>
              <Link href="/Wallet">
                <div className="flex flex-col cursor-pointer justify-center items-center  lg:mr-72 md:mr-72 mr-44 w-[15vh] mt-2 text-sm z-[100]">
                  <button className="bg-regal-blue tracking-widest text-[10px] py-2 px-4 rounded-2xl">
                    GO BACK
                  </button>
                </div>
              </Link>
              <div className="flex justify-center content-center text-white w-[100%]">
                <input
                  className="lg:text-xl md:text-xl placeholder:text-gray-300 py-2 px-4  placeholder:text-center active:outline-none  text-sm mt-8 z-10 bg-[#ffffff17] content-center"
                  placeholder="10234.304267 &nbsp; CRYFT"
                />
              </div>

              <div className=" lg:flex md:flex hidden text-3xl z-[1] mt-5 text-regal-blue font-Changeling">
                <p>TO</p>
              </div>
              <div className="flex justify-center content-center text-white w-[100%]">
                <input
                  className="lg:text-xl md:text-xl placeholder:text-gray-300 py-2 px-4   placeholder:text-center active:outline-none  text-sm mt-8 z-10 bg-[#ffffff17] content-center"
                  placeholder="10234.304267 &nbsp; &nbsp; &nbsp; &nbsp;  BNB"
                />
              </div>

              <div className=" flex cursor-pointer lg:text-3xl md:text-3xl text-xl ">
                <button className="bg-regal-blue tracking-widest text-[14px] py-2 px-8 rounded-2xl">
                  SEND
                </button>
              </div>
              <div className="lg:text-lg md:text-sm text-xs tracking-wider  py-4">
                HISTORY
              </div>
            </div>
          </>
        )}
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

export default WalletSend;
