import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import img1 from "../public/assets/SVG/Menu Right.svg";
import img2 from "../public/assets/SVG/Menu Center.svg";
import img3 from "../public/assets/SVG/Menu Bottom Left.svg";
import img4 from "../public/assets/SVG/Menu Bottom Right.svg";
import cardBg from "../public/Components_assets/Balances_Page/SVG/Display Box.svg";

import img7 from "../public/assets/SVG/EMIAL Button.svg";
import Logo from "../public/assets/Cryft_Social_Logo.png";
import cryft2 from "../public/assets/cryft2.png";
import BNB from "../public/assets/Asset_6.png";
import centerMain from "../public/assets/Menu Center.svg";
import Wallet from "../public/assets/Wallet_Address (2).svg";
import CenterSvg from "../utils/CenterSvg";
import { motion } from "framer-motion";
import MetaMaskButton from "../utils/MetaMaskButton";
import { useWindowSize } from "../utils/hooks/useWindowResize";
const Token = () => {
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
            : "hidden "
        }
      >
        <div
          className={
            hide
              ? "lg:flex md:flex text-regal-blue customlg:mt-5 custommd:mt-1 hidden justify-center"
              : "hidden"
          }
        >
          <div>
            <p className="text-sm text-regal-blue">PATENT PENDING</p>
          </div>
          <div className="absolute flex lg:flex-row md:flex-row sm:flex-col justify-center mt-8 -space-x-28">
            <div className="relative">
              <div className=" z-[-1]">
                <Image src={img1} />
              </div>
              <div className="flex lg:text-2xl z-10 text-xl space-x-16 justify-center lg:-mt-[3.2rem] md:-mt-[3.2rem] -mt-10">
                <Link href={"/Swap"}>
                  <p className="cursor-pointer z-[1000]">SWAP</p>
                </Link>
                <Link href="/Redeem">
                  <p className="cursor-pointer z-[1000]">REDEEM</p>
                </Link>
              </div>
              <div className="text-regal-blue space-x-2 tracking-wider absolute lg:flex md:flex hidden left-10 lg:bottom-4 bottom-5   lg:text-base">
                <p className="text-xs">LIVE</p>
                <p className="text-xs">REDEEM</p>
              </div>
              <div className="lg:flex md:flex hidden text-regal-blue justify-center mt-5 mr-24">
                <div className="absolute space-x-2 flex">
                  <p className="text-sm mt-[0.15rem]">0.0023556</p>
                  <p className="text-lg -mt-1 ">CRYFT </p>
                </div>
                <Image src={img3} />
              </div>
            </div>
            <div className="">
              <Link href="/Token">
                <CenterSvg />
              </Link>
              <div className="flex justify-center lg:text-2xl text-xl lg:-mt-20 md:-mt-20 -mt-16 items-center ">
                <p>TOKEN</p>
                <div className="justify-end items-center top-14 text-xs lg:text-sm absolute flex flex-col">
                  <p className="text-regal-blue">WALLET ADDRESS </p>
                  <p className="tracking-widest absolute lg:top-4 top-3">
                    0X127665848616841516841556
                  </p>
                </div>
              </div>
            </div>
            <div>
              <Link href="/LoginB">
                <div className="cursor-pointer">
                  {" "}
                  <Image src={img1} />{" "}
                </div>
              </Link>
              <div className="flex justify-center space-x-20 lg:text-2xl text-xl lg:-mt-[3.2rem] md:-mt-[3.2rem] -mt-10">
                <Link href={"/Wallet"}>
                  <p className="cursor-pointer z-[1000]">WALLET</p>
                </Link>
                <Link href="/LoginB">
                  <p className="cursor-pointer z-[1000]">EXIT</p>
                </Link>
              </div>
              <div className="text-regal-blue space-x-2 absolute lg:flex  md:flex hidden right-12 tracking-widest text-xs lg:text-base bottom-4">
                <p className="text-xs">GAS</p>
                <p className="text-xs">TANK</p>
              </div>
              <div className="lg:flex md:flex hidden justify-center ml-24 mt-5">
                <div className="absolute space-x-2 flex">
                  <p className="text-lg -mt-1">CRYFT </p>
                  <p className="text-sm mt-[0.1rem]">0.0023556</p>
                </div>
                <Image src={img4} />
              </div>
            </div>
          </div>
        </div>

        <div
          className={
            hide
              ? "lg:hidden md:hidden text-regal-blue space-y-8 hidden flex-col justify-center items-center content-center"
              : "hidden"
          }
        >
          <div>PATENT PENDING</div>
          <div className="flex flex-col h-10 justify-center relative items-center">
            <Image
              src={img1}
              // objectFit="contain"
              // layout='intrinsic'
            />
            <div className="flex space-x-4 text-xl absolute">
              <Link href={"/Swap"}>
                <p className="cursor-pointer z-[1000]">SWAP</p>
              </Link>
              <Link href="/Redeem">
                <p className="cursor-pointer z-[1000]">REDEEM</p>
              </Link>
            </div>
          </div>
          <div className="relative flex flex-col justify-center items-center ">
            <Image src={centerMain} layout="intrinsic" objectFit="contain" />
            <p className="text-2xl absolute">TOKEN</p>
            <p className="absolute top-16 tracking-wider text-regal-blue">
              WALLET ADDRESS
            </p>
          </div>
          <div className="relative  mx-2 flex flex-col justify-center items-center">
            <Image layout="intrinsic" objectFit="contain" src={Wallet} />
            <p className="absolute text-xs tracking-wider">
              0X127665848616841516841556
            </p>
          </div>
          <div className="flex flex-col h-10 justify-center relative items-center">
            <Image src={img1} />

            <div className="flex space-x-4 text-xl absolute">
              <Link href={"/Wallet"}>
                <p className="cursor-pointer z-[1000]">WALLET </p>
              </Link>
              <Link href="/LoginB">
                <p className="cursor-pointer z-[1000]">EXIT</p>
              </Link>
            </div>
          </div>
        </div>
        {/* .......Bottom........... */}

        {width >= 786 && (
          <div
            className={
              hide
                ? "flex  space-x-5 justify-center lg:mt-40 md:mt-40 mt-24 content-center"
                : "hidden"
            }
          >
            <div className="flex flex-col justify-center lg:scale-100 md:scale-100 scale-[1.2]  items-center">
              <div className="relative lg:w-[40vh] md:w-[25vh] w-[12vh] ">
                <Image src={cardBg} layout="responsive" />
              </div>
              <div className="lg:w-[8vw] md:w-[6vw] w-[6vw] customlg:w-[8vw] custommd:w-[6vw] absolute lg:mb-24 md:mb-10 ">
                <Image src={BNB} />
              </div>
              <div className="w-[8vw] absolute space-x-2 lg:ml-0 -ml-3 md:-ml-10 mt-12 flex">
                <p className="lg:text-3xl md:text-3xl text-lg">BNB </p>
                <p className="lg:text-sm md:text-sm lg:flex md:flex hidden  text-xs mt-3 ml-2">
                  (GAS)
                </p>
              </div>
              <div className="absolute lg:w-[14vw] md:w-[14vw] w-[18vw] mt-32 cursor-pointer flex justify-center">
                <MetaMaskButton height={50} />
                <div className="absolute">
                  <p className=" z-[10] text-white lg:text-2xl md:text-2xl text-sm lg:mt-2  mt-0">
                    BUY
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center lg:scale-100 md:scale-100 scale-[1.2] items-center">
              <div className="relative lg:w-[40vh] md:w-[25vh] w-[12vh] ">
                <Image src={cardBg} layout="responsive" />
              </div>
              <div className="w-[8vw] customlg:w-[8vw] custommd:w-[6vw] absolute lg:mb-24 md:mb-10 mb-0">
                <Image src={cryft2} />
              </div>
              <div className="w-[8vw] absolute lg:ml-0 md:-ml-10 -ml-7  lg:mt-10 md:mt-10 mt-10 flex">
                <p className="lg:text-3xl md:text-2xl text-sm font-extrabold">
                  CRYFT
                </p>
              </div>
              <div className="absolute lg:w-[14vw] md:w-[14vw] w-[18vw] mt-32 cursor-pointer flex justify-center">
                <MetaMaskButton height={50} />
                <div className="absolute">
                  <p className=" z-[10] text-white  lg:text-2xl md:text-2xl text-sm lg:mt-2  mt-0">
                    BUY
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center lg:scale-100 md:scale-100 scale-[1.2] items-center">
              <div className="relative lg:w-[40vh] md:w-[25vh] w-[12vh] ">
                <Image src={cardBg} layout="responsive" />
              </div>
              <div className="w-[8vw] absolute justify-center items-center flex">
                <p className="lg:text-9xl md:text-7xl text-3xl customlg:text-9xl custommd2:text-3xl text-regal-blue  lg:-mt-24 md:-mt-10 -mt-5 font-extrabold">
                  ?
                </p>
              </div>
              <div className="absolute lg:w-[14vw] md:w-[14vw] w-[18vw] mt-32 cursor-pointer flex justify-center">
                <MetaMaskButton height={50} />
                <div className="absolute">
                  <p className=" z-[10] text-white lg:text-2xl md:text-2xl text-sm lg:mt-2  mt-0">
                    SOON
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        {width < 786 && (
          <div
            className={
              hide
                ? "flex flex-col bg-[#0000008e] backdrop-blur-md rounded-xl py-12 w-[90%] m-auto  space-x-5 justify-center gap-16"
                : "hidden"
            }
          >
            <div
              className="flex flex-col justify-center lg:scale-100 md:scale-100 scale-[1.2]  items-center gap-2 w-[50%] m-auto"
              style={{ margin: "auto" }}
            >
              <div className="">
                <Image width={64} height={64} src={BNB} />
              </div>
              <div className="  flex">
                <p className="lg:text-3xl md:text-3xl text-lg">BNB </p>
              </div>
              <div className=" cursor-pointer flex justify-center">
                <div className="">
                  <button className="bg-regal-blue tracking-widest text-[14px] py-2 px-8 rounded-xl">
                    BUY
                  </button>
                </div>
              </div>
            </div>

            <div
              className="flex flex-col justify-center lg:scale-100 md:scale-100 scale-[1.2] items-center gap-2 w-[50%] m-auto"
              style={{ margin: "auto" }}
            >
              <div className="">
                <Image width={64} height={64} src={cryft2} />
              </div>
              <div className=" flex">
                <p className="lg:text-3xl md:text-2xl text-sm font-extrabold">
                  CRYFT
                </p>
              </div>
              <div className=" cursor-pointer flex justify-center">
                <div className="">
                  <button className="bg-regal-blue tracking-widest text-[14px] py-2 px-8 rounded-xl">
                    BUY
                  </button>
                </div>
              </div>
            </div>

            <div
              className="flex flex-col justify-center lg:scale-100 md:scale-100 scale-[1.2] items-center gap-2 w-[50%] m-auto"
              style={{ margin: "auto" }}
            >
              <div className=" justify-center items-center flex">
                <p className="lg:text-9xl md:text-7xl text-3xl customlg:text-9xl custommd2:text-3xl text-regal-blue  font-extrabold">
                  ?
                </p>
              </div>
              <div className=" cursor-pointer flex justify-center">
                <div className="">
                  <button className="bg-black tracking-widest text-[14px] py-2 px-8 rounded-xl">
                    SOON
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        onClick={toggleItem}
        className=" absolute lg:bottom-8 md:bottom-8 bottom-1 z-[1000] lg:w-[18vh] md:w-[15vh] w-[10vh] cursor-pointer lg:right-5 md:right-5 right-1"
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

export default Token;
