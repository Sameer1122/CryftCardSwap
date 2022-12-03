import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import img1 from "../public/assets/SVG/Menu Right.svg";
import img2 from "../public/assets/SVG/Menu Center.svg";
import img3 from "../public/assets/SVG/Menu Bottom Left.svg";
import img4 from "../public/assets/SVG/Menu Bottom Right.svg";
import img5 from "../public/assets/SVG/Redeem Main Box.svg";
import img6 from "../public/assets/SVG/Code Entry.svg";
import img7 from "../public/assets/SVG/EMIAL Button.svg";
import Logo from "../public/assets/Cryft_Social_Logo.png";
import centerMain from "../public/assets/Menu Center.svg";
import Wallet from "../public/assets/Wallet_Address (2).svg";
import Header from "./WalletHeader";
import { motion } from "framer-motion";
import RedeemSvg from "../utils/RedeemSvg";
import MetaMaskButton from "../utils/MetaMaskButton";
import CenterSvg from "../utils/CenterSvg";
import MainMobileWallet from "../utils/MainMobileWallet";
import { useWindowSize } from "../utils/hooks/useWindowResize";
// import BgVideo from "../public/assets/animation_re_render_ (1).mp4";
const Redeem = () => {
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

      {hide && (
        <motion.div
          key={"video3"}
          transition={{
            duration: 1,
          }}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className={
            hide
              ? `bg-Redeem1 h-[100vh] font-Changeling text-white w-[100vw] bg-cover bg-center bg-no-repeat flex flex-col `
              : "hidden"
          }
        >
          {" "}
          <div
            className={
              hide
                ? "lg:flex md:flex customlg:mt-5 custommd:mt-1 hidden justify-center"
                : "hidden"
            }
          >
            <div>
              <p className="text-sm text-regal-blue">PATENT PENDING</p>
            </div>
            <motion.div
              initial={{
                opacity: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              className="absolute flex text-regal-blue  lg:flex-row md:flex-row sm:flex-col justify-center mt-8 -space-x-28"
            >
              <motion.div
                initial={{
                  y: -100,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.75,
                }}
                animate={{
                  y: 0,
                }}
                className="relative"
              >
                <div className=" z-[-1]">
                  <Image src={img1} />
                </div>
                <div className="flex lg:text-2xl z-10 text-xl space-x-16 justify-center lg:-mt-[3.2rem] md:-mt-[3.2rem] -mt-12">
                  <Link href="/Wallet">
                    <p className="cursor-pointer z-[1000]">WALLET</p>
                  </Link>
                  <Link href={"/Swap"}>
                    <p className="cursor-pointer z-[1000]">SWAP</p>
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
              </motion.div>
              <motion.div
                initial={{
                  y: -100,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.25,
                }}
                animate={{
                  y: 0,
                }}
                className=""
              >
                <Link href="/Redeem">
                  <div className="cursor-pointer">
                    {/* {" "}
                    <Image
                      src={img2}
                      layout="intrinsic"
                      objectFit="contain"
                    />{" "} */}
                    <CenterSvg />
                  </div>
                </Link>
                <div className="flex justify-center lg:text-2xl text-xl lg:-mt-20 md:-mt-20 -mt-16 items-center ">
                  <p>REDEEM</p>
                  <div className="justify-end items-center top-14 text-xs lg:text-sm absolute flex flex-col">
                    <p className="text-regal-blue">WALLET ADDRESS </p>
                    <p className="tracking-widest absolute lg:top-4 top-3">
                      0X127665848616841516841556
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{
                  y: -100,
                }}
                transition={{
                  duration: 0.75,
                  delay: 1.5,
                }}
                animate={{
                  y: 0,
                }}
              >
                <Link href="/LoginB">
                  <div className="cursor-pointer">
                    {" "}
                    <Image src={img1} />{" "}
                  </div>
                </Link>
                <div className="flex justify-center space-x-20  lg:text-2xl text-xl lg:-mt-[3.2rem] md:-mt-[3.2rem] -mt-10">
                  <Link href={"/Token"}>
                    <p className="cursor-pointer z-[1000]">TOKEN </p>
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
              </motion.div>
            </motion.div>
          </div>
          <div
            className={
              hide
                ? "lg:hidden md:hidden absolute space-y-8 transform translate-x-[100%] text-regal-blue flex flex-col justify-center items-center content-center"
                : "hidden"
            }
          >
            <div>PATENT PENDING</div>
            <div className="flex flex-col h-10 justify-center relative items-center">
              <Image src={img1} />
              <div className="flex space-x-4 text-xl absolute">
                <Link href="/Wallet">
                  <p className="cursor-pointer z-[1000]">WALLET</p>
                </Link>
                <Link href={"/Swap"}>
                  <p className="cursor-pointer z-[1000]">SWAP</p>
                </Link>
              </div>
            </div>
            <div className="relative flex flex-col justify-center items-center ">
              <Image src={centerMain} layout="intrinsic" objectFit="contain" />
              <p className="text-2xl absolute">REDEEM</p>
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
            {/* <div className="flex flex-col h-30 w-100 object-contain justify-center relative items-center">
              <Image src={img2} />
              <div className="flex space-x-4 text-xl absolute top-2">
                <Link href="/Redeem">
                  <p className="cursor-pointer z-[1000]">REDEEM</p>
                </Link>
              </div>
              <div className="tracking-wide text-xs flex flex-col justify-center items-center absolute top-14">
                <p className="text-regal-blue">WALLET ADDRESS </p>
                <p className=" absolute top-4">0X127665848616841516841556</p>
              </div>
            </div> */}
            <div className="flex flex-col h-10 justify-center relative items-center">
              <Image src={img1} />
              <Link href="/LoginB">
                <div className="flex space-x-4 z-[1000] text-xl absolute">
                  <Link href={"/Token"}>
                    <p className="cursor-pointer z-[1000]">TOKEN </p>
                  </Link>
                  <Link href="/LoginB">
                    <p className="cursor-pointer z-[1000]">EXIT</p>
                  </Link>
                </div>
              </Link>
            </div>
          </div>
          {/* ..........Bottom............... */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 2,
            }}
            animate={{
              opacity: 1,
            }}
            className={
              "relative z-[1]  lg:h-10 md:h-10 h-24 mb-2 customlg:h-7 custommd:h-0 lg:top-[26rem] md:top-[26rem] top-[42%] flex justify-center items-center"
            }
          >
            {width > 768 ? <RedeemSvg /> : <MainMobileWallet />}
          </motion.div>
          <motion.div
            initial={{
              scale: 0.5,
              opacity: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 2.7,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            className={
              hide
                ? "text-white lg:mt-[11rem] md:mt-36 mt-4 justify-center md:static  absolute top-[29%] items-center z-[2] flex flex-col font-Changeling text-sm "
                : "hidden"
            }
          >
            <div className="text-white mt-12 tracking-wider justify-center items-center flex z-[2] font-Changeling text-2xl">
              <p className="lg:ml-36 md:ml-36 ml-16 lg:text-3xl md:text-3xl text-sm customlg:mt-5 custommd:mt-8 mt-0">
                {" "}
                REDEEM CRYFT CARD{" "}
              </p>
            </div>
            <p className="mt-8"> 13 DIGIT CARD FOR CRYFT CARD </p>
            <div className="flex justify-center content-center text-white">
              <input
                className="lg:text-3xl md:text-3xl placeholder:text-gray-300  placeholder:text-center active:outline-none  text-lg mt-5 z-10 bg-[#ffffff17] w-[500px] mb-4 m-auto content-center"
                placeholder="ENTER CODE"
              />
            </div>
            {/* <div className="relative lg:-mt-9 md:-mt-9 -mt-6 h-10 lg:w-fit md:w-fit w-[70%]">
              <Image layout="" src={img6} />
            </div> */}
            <div className="relative lg:w-fit md:w-fit w-[40%] flex cursor-pointer lg:mt-3 md:mt-3 mt-0">
              {/* <Image layout="" src={img7} /> */}
              <MetaMaskButton height={width > 768 ? 48 : 32} />
            </div>
            <div className="relative flex cursor-pointer lg:text-3xl md:text-3xl text-xl lg:-mt-11 md:-mt-11 -mt-8">
              <p className="cursor-pointer">SUBMIT</p>
            </div>
            <div className="relative lg:flex md:flex hidden cursor-pointer text-sm -mt-11">
              <p className="ml-[26rem]">
                *COST ZERO GAS <br /> TO REDEEM
              </p>
            </div>

            <div className="relative lg:flex md:flex hidden text-2xl mt-8 text-white font-Changeling">
              <p>CARDS REDEEMED</p>
            </div>
            <div className="relative lg:flex md:flex hidden lg:space-x-10 md:space-x-10 space-x-2 font-Changeling text-white md:text-xl text-sm lg:text-xl tracking-wide mt-4">
              <p>1234567891234</p>
              <p>1234567891234</p>
            </div>
            <div className="relative lg:flex md:flex hidden lg:space-x-10 md:space-x-10 space-x-2  font-Changeling font-light text-white md:text-xl text-sm lg:text-xl tracking-wide">
              <p>1234567891234</p>
              <p>1234567891234</p>
            </div>
          </motion.div>
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

export default Redeem;
