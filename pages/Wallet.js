import React, { useState, useEffect } from "react";
import Image from "next/image";
import img5 from "../public/assets/SVG/Main Wallet Box.svg";
import img7 from "../public/assets/SVG/EMIAL Button.svg";
import Logo from "../public/assets/Cryft_Social_Logo.png";
import Link from "next/link";
import WalletHeader from "./WalletHeader";
import { motion } from "framer-motion";
import MainWalletBox from "../utils/MainWalletBox";
import MetaMaskButton from "../utils/MetaMaskButton";
// import BgVideo from "../public/assets/animation_re_render_ (1).mp4";
const Wallet = () => {
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
      {hide && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={
            hide
              ? `bg-Redeem1 h-[100vh] font-Changeling text-white w-[100vw] bg-cover bg-center bg-no-repeat flex flex-col `
              : "hidden"
          }
        >
          {" "}
          <WalletHeader hide={hide} />
          {/* ............Bottom................ */}
          <div
            className={
              hide
                ? "z-[1] relative h-full w-full flex flex-col lg:mt-0 customlg:mt-0 custommd:mt-20 items-center justify-center"
                : "hidden"
            }
          >
            <MainWalletBox />
            <div className="absolute">
              <div className="lg:text-[1.7rem] md:text-[1.7rem] sm:text-lg text-sm lg:ml-40 md:ml-40 ml-40 mt-1">
                <p> TOKEN WALLET</p>
              </div>
              <div className=" flex flex-col justify-center items-start ml-2">
                <div className="mt-5 flex lg:space-x-16 md:space-x-16 space-x-12">
                  <div className="relative flex flex-col lg:w-52 md:w-52 sm:w-44  w-28 justify-center items-center">
                    <MetaMaskButton height={80} />
                    <div className="absolute -mt-16 lg:text-sm md:text-sm sm:text-sm text-xs tracking-wider">
                      .1111 BNB EACH
                    </div>

                    <Link href={"/WalletBuyCode"}>
                      <p className="absolute cursor-pointer z-[100] lg:text-2xl md:text-2xl sm:text-xl text-sm">
                        {" "}
                        BUY CODE{" "}
                      </p>
                    </Link>
                  </div>
                  <div className="lg:text-sm md:text-sm text-xs lg:space-y-0 md:space-y-0 -space-y-1 flex flex-col justify-center items-center tracking-widest">
                    <p>CRYFT CODE</p>
                    <p>REDEEMS FOR</p>
                    <p>CRYFT TOKEN</p>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col lg:mt-2 md:mt-2 sm:mt-2 mt-1  justify-center items-start ml-2">
                <div className=" flex  lg:space-x-16 md:space-x-16 space-x-12">
                  <div className="relative flex lg:w-40 md:w-40 sm:w-36 w-28 flex-col justify-center items-center">
                    <MetaMaskButton height={40} />
                    <Link href={"/WalletSend"}>
                      <p className="absolute z-[100] cursor-pointer lg:text-2xl md:text-2xl sm:text-xl text-sm">
                        {" "}
                        SEND
                      </p>
                    </Link>
                  </div>
                  <div className="relative flex flex-col lg:w-40 md:w-40 sm:w-36 w-28 justify-center items-center">
                    <MetaMaskButton height={40} />
                    <Link href={"/WalletReceive"}>
                      <p className="absolute z-[100] cursor-pointer lg:text-2xl md:text-2xl sm:text-xl text-sm">
                        {" "}
                        RECEIVE{" "}
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col justify-center items-start ml-2">
                <div className="lg:mt-2 md:mt-2 sm:mt-2 mt-1  flex  lg:space-x-20 md:space-x-20 space-x-12">
                  <div className="relative flex flex-col lg:w-52 md:w-52 sm:w-44 w-28 justify-center items-center">
                    <MetaMaskButton height={60} />
                    <Link href={"/WalletBalance"}>
                      <p className="absolute z-[100] cursor-pointer lg:text-2xl md:text-2xl sm:text-xl text-sm">
                        {" "}
                        BALANCE{" "}
                      </p>
                    </Link>
                  </div>
                  <div className="lg:text-sm md:text-sm text-xs lg:space-y-0 md:space-y-0 -space-y-1 tracking-widest flex flex-col justify-center items-center">
                    <p>VIEW YOUR</p>
                    <p>TOKEN</p>
                    <p>BALANCES</p>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col justify-center items-start ml-2">
                <div className="lg:mt-2 md:mt-2 sm:mt-2 mt-1  flex  lg:space-x-20 md:space-x-20 space-x-12">
                  <div className="relative flex flex-col lg:w-52 md:w-52 sm:w-44 w-32 justify-center items-center">
                    <MetaMaskButton height={60} />
                    <Link href={"/WalletCollection"}>
                      <p className="absolute z-[100] cursor-pointer lg:text-2xl md:text-2xl sm:text-xl text-sm">
                        COLLECTION
                      </p>
                    </Link>
                  </div>
                  <div className="lg:text-sm md:text-sm text-xs lg:space-y-0 md:space-y-0 -space-y-1 tracking-widest flex flex-col justify-center items-center">
                    <p>VIEW YOUR</p>
                    <p>NFT</p>
                    <p>BALANCES</p>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col justify-center items-start ml-2">
                <div className="lg:mt-2 md:mt-2 sm:mt-2 mt-1 flex space-x-2">
                  <div className="relative flex flex-col lg:w-52 md:w-52 sm:w-44 w-32 justify-center items-center">
                    <MetaMaskButton height={60} />

                    <p className="absolute lg:text-2xl md:text-2xl sm:text-xl text-sm">
                      BUY GAS
                    </p>
                  </div>
                  <div className="lg:text-sm md:text-sm text-xs lg:space-y-0 md:space-y-0 -space-y-1 tracking-widest flex flex-col justify-center items-center">
                    <p>YOU NEED BNB GAS</p>
                    <p>TO BUY CODE,</p>
                    <p>SWAP & SEND</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
      <div
        onClick={toggleItem}
        className="absolute lg:bottom-8 md:bottom-8 bottom-1 z-[100] lg:w-[18vh] md:w-[15vh] w-[10vh] cursor-pointer lg:right-5 md:right-5 right-1"
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

export default Wallet;