import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import img1 from "../public/assets/SVG/Menu Right.svg";
import img2 from "../public/assets/SVG/Menu Center.svg";
import img3 from "../public/assets/SVG/Menu Bottom Left.svg";
import img4 from "../public/assets/SVG/Menu Bottom Right.svg";
import cardBg from "../public/assets/SVG/Item Border.svg";

import img7 from "../public/assets/SVG/EMIAL Button.svg";
import Logo from "../public/assets/Cryft_Social_Logo.png";
import cryft2 from "../public/assets/cryft2.png";
import BNB from "../public/assets/Asset_6.png";
import { motion } from "framer-motion";
import Header from "./WalletHeader";
import WalletHeader from "./WalletHeader";
import MetaMaskButton from "../utils/MetaMaskButton";
import CollectionCard from "../utils/CollectionCard";
// import BgVideo from "../public/assets/animation_re_render_ (1).mp4";
const WalletCollection = () => {
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
        <WalletHeader hide={hide} />

        {/* .......Bottom........... */}
        <div
          className={
            hide
              ? "flex flex-col items-center justify-center lg:mt-32 md:mt-32 mt-5"
              : "hidden"
          }
        >
          <div className=" lg:w-[20vh] md:w-[20vh] w-[14vh] self-center">
            <MetaMaskButton height={30} width={"100%"} />
          </div>
          <Link href={"Wallet"}>
            <p className="absolute cursor-pointer -mt-2 lg:text-lg md:text-sm text-xs">
              GO BACK
            </p>
          </Link>
        </div>
        <div
          className={
            hide
              ? "flex  space-x-5 justify-center lg:mt-5 md:mt-5 mt-10 content-center"
              : "hidden"
          }
        >
          <div className="flex flex-col justify-center lg:scale-100 md:scale-100 scale-[1.2]  items-center">
            <div className="relative lg:w-[40vh] md:w-[25vh] w-[12vh] ">
              <CollectionCard src={cardBg} layout="responsive" />
            </div>
            <div className="lg:w-[8vw] md:w-[6vw] w-[6vw] customlg:w-[8vw] custommd:w-[6vw] absolute lg:mb-24 md:mb-10 ">
              <Image src={cryft2} />
            </div>

            <div className="absolute lg:w-[14vw] md:w-[14vw] w-[18vw] lg:mt-32 mt-10 cursor-pointer flex justify-center items-center">
              <MetaMaskButton height={50} />
              <div className="absolute">
                <p className=" z-[10] text-white lg:text-2xl md:text-2xl text-sm ">
                  BUY
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center lg:scale-100 md:scale-100 scale-[1.2] items-center">
            <div className="relative lg:w-[40vh] md:w-[25vh] w-[12vh] ">
              <CollectionCard src={cardBg} layout="responsive" />
            </div>
            <div className="w-[8vw] customlg:w-[8vw] custommd:w-[6vw] absolute lg:mb-24 md:mb-10 mb-0">
              <Image src={cryft2} />
            </div>
            {/* <div className="w-[8vw] absolute lg:ml-0 md:-ml-10 -ml-7  lg:mt-10 md:mt-10 mt-10 flex">
              <p className="lg:text-3xl md:text-2xl text-sm font-extrabold">
                CRYFT
              </p>
            </div> */}
            <div className="absolute lg:w-[14vw] md:w-[14vw] w-[18vw] lg:mt-32 mt-12 cursor-pointer flex justify-center items-center">
              <MetaMaskButton height={50} />
              <div className="absolute">
                <p className=" z-[10] text-white  lg:text-2xl md:text-2xl text-sm">
                  BUY
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center lg:scale-100 md:scale-100 scale-[1.2] items-center">
            <div className="relative lg:w-[40vh] md:w-[25vh] w-[12vh] ">
              <CollectionCard src={cardBg} layout="responsive" />
            </div>
            <div className="w-[8vw] customlg:w-[8vw] custommd:w-[6vw] absolute lg:mb-24 md:mb-10 mb-0">
              <Image src={cryft2} />
            </div>
            <div className="absolute lg:w-[14vw] md:w-[14vw] w-[18vw] items-center lg:mt-32 mt-10 cursor-pointer flex justify-center">
              <MetaMaskButton height={50} />
              <div className="absolute">
                <p className=" z-[10] text-white lg:text-2xl md:text-2xl text-sm ">
                  BUY
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            hide
              ? "flex space-x-3 justify-center item lg:mt-5 md:mt-2 mt-7"
              : "hidden"
          }
        >
          <div className="relative lg:w-[20vh] md:w-[20vh] w-[15vh] items-center flex justify-center cursor-pointer ">
            <MetaMaskButton height={32} />
            <p className="cursor-pointer absolute lg:text-xl md:text-xl text-lg">
              LEFT
            </p>
          </div>
          <div className="relative lg:w-[20vh] md:w-[20vh] w-[15vh] flex items-center justify-center cursor-pointer ">
            <MetaMaskButton height={32} />
            <p className="cursor-pointer absolute lg:text-xl md:text-xl text-lg">
              RIGHT
            </p>
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

export default WalletCollection;
