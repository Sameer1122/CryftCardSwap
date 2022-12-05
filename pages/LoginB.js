import React, { useState, useEffect } from "react";
import Image from "next/image";
import Router from "next/router";
import img1 from "../public/assets/SVG/VERIFY.svg";
import img4 from "../public/assets/Cryft_Social_Logo.png";
import img2 from "../public/assets/meta.svg";
import img3 from "../public/assets/walletc.svg";
import LoginSvg from "../utils/LoginSvg";
import MetaMaskButton from "../utils/MetaMaskButton";
import { motion } from "framer-motion";
import { useWindowSize } from "../utils/hooks/useWindowResize";
// import sample from '../public/assets/LoginVideo_2.mp4';

const LoginB = () => {
  const [loginComplete, setloginComplete] = useState(true);
  const [height, width] = useWindowSize();

  const loginCheck = () => {
    setloginComplete(false);
  };
  const videoEnds = () => {
    console.log("Ends");
    Router.push("/Redeem");
  };
  return (
    <>
      {loginComplete ? (
        width > 786 ? (
          <>
            <div className="h-[100vh] bg-no-repeat bg-center bg-cover text-white flex flex-col bg-LoginB justify-center">
              <div className="flex flex-col justify-center">
                <h1 className="text-regal-blue font-Changeling self-center absolute top-1">
                  PATENT PENDING
                </h1>

                <motion.div
                  initial={{
                    scale: 0.5,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0,
                  }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                  }}
                  className="flex flex-col justify-center customlg:top-5 custommd:top-16 top-10 relative"
                >
                  <Image
                    className="h-[100%] custommd:h-1/2"
                    src={img1}
                    height="100"
                    width="100"
                    alt="CRYFT SOCIAL LOGO"
                  />
                  <h1 className="-mt-16 sm:text-2xl text-xl text-regal-blue font-Changeling self-center mb-24 ">
                    VERIFY
                  </h1>
                </motion.div>
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  transition={{
                    duration: 1,
                    delay: 1,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  className="text-2xl flex flex-col text-white z-10 font-Changeling items-center absolute self-center -space-y-6"
                >
                  <div className="flex flex-col items-center z-10 relative top-20 -space-y-2">
                    <p>VERIFICATION</p>
                    <p> METHODS</p>
                  </div>
                  <div className="flex flex-col -space-y-16 z-10 relative top-5  ">
                    <div className="relative top-20 flex flex-col items-center">
                      <MetaMaskButton />
                      <div
                        onClick={loginCheck}
                        className="relative flex cursor-pointer flex-col -space-y-2 justify-center items-center -top-[4.5rem] text-lg z-20 tracking-wide"
                      >
                        <p>EMAIL PHONE </p>
                        <p>& SOCIAL</p>
                      </div>
                    </div>
                    <div className="relative top-20 flex flex-col items-center">
                      <MetaMaskButton />
                      <div
                        onClick={loginCheck}
                        className="relative flex  flex-col justify-center items-center -top-16 -space-y-2 text-lg z-[100]"
                      >
                        <p className="tracking-wide cursor-pointer">METAMASK</p>
                      </div>
                    </div>
                    <div className="relative top-20 flex flex-col  items-center">
                      <MetaMaskButton />
                      <div
                        onClick={loginCheck}
                        className="relative flex flex-col justify-center items-center tracking-wide cursor-pointer  -top-[4.6rem] -space-y-2 text-lg z-20"
                      >
                        <p>WALLET</p>
                        <p>CONNECT</p>
                      </div>
                    </div>
                    <div className="relative top-24 flex flex-col items-center text-sm right-9 tracking-wider">
                      <p>EMAIL,PHONE & SOCIAL</p>
                      <p className="relative left-1">METHODS GENERATE</p>
                      <p className="relative right-2">NEW WALLETS VIA</p>
                      <p className="relative right-8">MAGIC LINK</p>
                      <p className="relative right-6">SERVICE</p>
                      <div className="relative tracking-wider text-xs -right-[9.4rem] -rotate-45 -top-9">
                        <p className="relative right-4">VERSION</p>
                        <p className="relative right-4">0.0.0.0</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
                {/* <h1 className="text-2xl text-white z-10 font-Changeling self-center">METHODS</h1> */}
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  className="flex items-center justify-center"
                >
                  <LoginSvg />
                </motion.div>
                {/* <Image
                src={img2}
                height="500"
                width="100"
                alt="CRYFT SOCIAL LOGO"
              /> */}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="h-[100vh] bg-no-repeat bg-center overflow-hidden bg-cover text-white flex flex-col justify-between gap-4  bg-LoginB ">
              <div className="flex justify-center py-6">
                <h1 className="text-regal-blue font-Changeling">
                  PTATENT PENDING
                </h1>
              </div>
              {/* <motion.div
                initial={{
                  scale: 0.5,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                style={{ boxShadow: "0 0 4px rgb(19 168 158)" }}
                className="flex  justify-center bg-[#0000008e] items-center py-4 backdrop:blur-md w-[90%] mx-auto rounded-xl "
              >
                <h1 className="text-regal-blue tracking-widest text-2xl font-Changeling">
                  VERIFY
                </h1>
              </motion.div> */}
              <div>
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  transition={{
                    duration: 1,
                    delay: 1,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  style={{ boxShadow: "0 0 6px rgb(19 168 158)" }}
                  className="text-2xl flex flex-col text-white z-10 font-Changeling items-center bg-[#0000008e] py-8 rounded-xl w-[90%] m-auto"
                >
                  <div className="flex flex-col items-center z-10 mb-8 ">
                    <p className="tracking-wider">VERIFICATION</p>
                    <p className="tracking-wider"> METHODS</p>
                  </div>
                  <div className="flex flex-col gap-8 z-10  ">
                    <div
                      onClick={loginCheck}
                      className="  cursor-pointer flex-col  justify-center items-center  text-lg z-20 tracking-wide"
                    >
                      <button className="bg-regal-blue tracking-widest w-[100%] flex items-center justify-start gap-2 text-[14px] py-2 px-4 rounded-2xl">
                        <Image src={img4} width={36} height={36} />{" "}
                        <span> EMAIL & SOCIAL </span>
                      </button>
                    </div>

                    <div
                      onClick={loginCheck}
                      className=" flex  flex-col justify-center items-center text-lg z-[100]"
                    >
                      <button className="bg-regal-blue flex items-center justify-start gap-2 tracking-widest w-[100%] text-[14px] py-2 px-4 rounded-2xl">
                        <Image src={img2} width={36} height={36} />
                        <span> METAMASK </span>
                      </button>
                    </div>

                    <div
                      onClick={loginCheck}
                      className=" flex flex-col justify-center items-center tracking-wide cursor-pointer  text-lg z-20"
                    >
                      <button className="bg-regal-blue tracking-widest flex items-center justify-start gap-2 w-[100%] text-[14px] py-2 px-4 rounded-2xl">
                        <Image src={img3} width={36} height={36} />
                        <span> WALLET CONNECT</span>
                      </button>
                    </div>

                    <div className=" flex flex-col text-sm  tracking-wider">
                      <p className="text-xs">EMAIL,PHONE & SOCIAL</p>
                      <p className="text-xs">METHODS GENERATE</p>
                      <p className="text-xs">NEW WALLETS VIA</p>
                      <p className="text-xs">MAGIC LINK</p>
                      <p className="text-xs">SERVICE</p>
                      <div className="relative left-[77%] tracking-wider text-xs -rotate-45 -top-14 overflow-hidden">
                        <p className=" right-4">VERSION</p>
                        <p className=" relative right-0">0.0.0.0</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="flex flex-col justify-center">
                {/* <h1 className="text-regal-blue font-Changeling self-center absolute top-1">
                  PATENT PENDING
                </h1> */}

                {/* <motion.div
                  initial={{
                    scale: 0.5,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0,
                  }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                  }}
                  className="flex flex-col justify-center customlg:top-5 custommd:top-16 top-10 relative"
                >
                  <Image
                    className="h-[100%] custommd:h-1/2"
                    src={img1}
                    height="100"
                    width="100"
                    alt="CRYFT SOCIAL LOGO"
                  />
                  <h1 className="-mt-16 sm:text-2xl text-xl text-regal-blue font-Changeling self-center mb-24 ">
                    VERIFY
                  </h1>
                </motion.div> */}
                {/* <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  transition={{
                    duration: 1,
                    delay: 1,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  className="text-2xl flex flex-col text-white z-10 font-Changeling items-center absolute self-center -space-y-6"
                >
                  <div className="flex flex-col items-center z-10 relative top-20 -space-y-2">
                    <p>VERIFICATION</p>
                    <p> METHODS</p>
                  </div>
                  <div className="flex flex-col -space-y-16 z-10 relative top-5  ">
                    <div className="relative top-20 flex flex-col items-center">
                      <MetaMaskButton />
                      <div
                        onClick={loginCheck}
                        className="relative flex cursor-pointer flex-col -space-y-2 justify-center items-center -top-[4.5rem] text-lg z-20 tracking-wide"
                      >
                        <p>EMAIL PHONE </p>
                        <p>& SOCIAL</p>
                      </div>
                    </div>
                    <div className="relative top-20 flex flex-col items-center">
                      <MetaMaskButton />
                      <div
                        onClick={loginCheck}
                        className="relative flex  flex-col justify-center items-center -top-16 -space-y-2 text-lg z-[100]"
                      >
                        <p className="tracking-wide cursor-pointer">METAMASK</p>
                      </div>
                    </div>
                    <div className="relative top-20 flex flex-col  items-center">
                      <MetaMaskButton />
                      <div
                        onClick={loginCheck}
                        className="relative flex flex-col justify-center items-center tracking-wide cursor-pointer  -top-[4.6rem] -space-y-2 text-lg z-20"
                      >
                        <p>WALLET</p>
                        <p>CONNECT</p>
                      </div>
                    </div>
                    <div className="relative top-24 flex flex-col items-center text-sm right-9 tracking-wider">
                      <p>EMAIL,PHONE & SOCIAL</p>
                      <p className="relative left-1">METHODS GENERATE</p>
                      <p className="relative right-2">NEW WALLETS VIA</p>
                      <p className="relative right-8">MAGIC LINK</p>
                      <p className="relative right-6">SERVICE</p>
                      <div className="relative tracking-wider text-xs -right-[9.4rem] -rotate-45 -top-9">
                        <p className="relative right-4">VERSION</p>
                        <p className="relative right-4">0.0.0.0</p>
                      </div>
                    </div>
                  </div>
                </motion.div> */}
                {/* <h1 className="text-2xl text-white z-10 font-Changeling self-center">METHODS</h1> */}
                {/* <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  className="flex items-center justify-center"
                >
                  <LoginSvg />
                </motion.div> */}
              </div>
            </div>
          </>
        )
      ) : (
        <motion.div
          className="w-[100%] min-h-screen"
          key={"video2"}
          transition={{
            duration: 2,
          }}
          initial={{
            opacity: 0,
            clipPath: "polygon(0px 50%, 0px 50%, 100% 50%, 100% 50%)",
          }}
          animate={{
            opacity: 1,
            clipPath: "polygon(0px 100%, 0px 0%, 100% 0%, 100% 100%)",
          }}
          exit={{
            opacity: 0,
            clipPath: "polygon(0px 100%, 0px 0%, 100% 0%, 100% 100%)",
          }}
        >
          <motion.video
            onEnded={videoEnds}
            className="object-cover object-center h-[100vh] w-[100vw] bg-LoginB bg-cover bg-no-repeat bg-center"
            autoPlay
            muted
          >
            <source src={"/assets/LoginVideo_2.mp4"} type="video/mp4" />
          </motion.video>
        </motion.div>
      )}
    </>
  );
};

export default LoginB;
