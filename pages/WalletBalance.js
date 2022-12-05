import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import img1 from "../public/assets/SVG/Menu Right.svg";
import img2 from "../public/assets/SVG/Menu Center.svg";
import img3 from "../public/assets/SVG/Menu Bottom Left.svg";
import img4 from "../public/assets/SVG/Menu Bottom Right.svg";
import img5 from "../public/assets/SVG/Main Wallet Box.svg";
import img6 from "../public/assets/SVG/Code Entry.svg";
import { motion } from "framer-motion";
import cryft2 from "../public/assets/cryft2.png";
import BNB from "../public/assets/Asset_6.png";
import cardBg from "../public/Components_assets/Balances_Page/SVG/Display Box.svg";
import img7 from "../public/assets/SVG/EMIAL Button.svg";
import Logo from "../public/assets/Cryft_Social_Logo.png";
import WalletHeader from "./WalletHeader";
import MainWalletBox from "../utils/MainWalletBox";
import MetaMaskButton from "../utils/MetaMaskButton";
import { useWindowSize } from "../utils/hooks/useWindowResize";
// import BgVideo from "../public/assets/animation_re_render_ (1).mp4";
const WalletBalance = () => {
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
  const [height, width] = useWindowSize();
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
        {width >= 786 && <WalletHeader hide={hide} />}
        {/* .......Bottom........... */}
        {width >= 786 ? (
          <>
            <div
              className={
                hide
                  ? "relative z-[1]  lg:h-10 md:h-10 h-24 mb-2 lg:top-96 md:top-96 top-40 flex justify-center items-center"
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
                <p className="tracking-wide lg:ml-52 md:ml-52 ml-32 lg:text-2xl md:text-2xl text-lg lg:mt-6 md:mt-6 -mt-6">
                  {" "}
                  BALANCES
                </p>
              </div>
              <Link href="/Wallet">
                <div className="flex flex-col cursor-pointer justify-center items-center  lg:mr-72 md:mr-72 mr-44 w-[15vh] mt-2 text-sm z-[100]">
                  <MetaMaskButton height={30} />
                  <div className="absolute">GO BACK</div>
                </div>
              </Link>

              <div className="flex space-x-5 lg:text-2xl md:text-2xl text-lg">
                <p className="text-regal-blue">USD</p>
                <p>$10000.3213233</p>
              </div>
              <div className="flex space-x-5 lg:text-2xl md:text-2xl text-lg">
                <p className="text-regal-blue">QTY</p>
                <p>3231,14324.4323</p>
              </div>

              <div
                className={
                  hide
                    ? "flex space-x-5 justify-center lg:mt-0 md:mt-0 mt-3  content-center"
                    : "hidden"
                }
              >
                <div className="flex flex-col justify-center lg:scale-100 md:scale-100 scale-[1.2]  items-center">
                  <div className="relative lg:w-[25vh] md:w-[25vh] w-[12vh] ">
                    <Image src={cardBg} layout="responsive" />
                  </div>
                  <div className="lg:w-[5vw]  lg:mt-10 md:mt-10 -mt-2 w-[10vw]  absolute lg:mb-24 md:mb-10 ">
                    <Image src={BNB} />
                  </div>
                  <div className="w-[8vw] absolute space-x-2 lg:ml-0 -ml-3 md:-ml-10 lg:mt-16 md:mt-16 mt-10 flex">
                    <p className="lg:text-3xl md:text-3xl text-lg">BNB </p>
                    <p className="lg:text-sm md:text-sm lg:flex md:flex hidden  text-xs mt-3 ml-2">
                      (GAS)
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-center lg:scale-100 md:scale-100 scale-[1.2] items-center">
                  <div className="relative lg:w-[25vh] md:w-[25vh] w-[12vh] ">
                    <Image src={cardBg} layout="responsive" />
                  </div>
                  <div className="lg:w-[5vw] w-[12vw] lg:mt-10 md:mt-10 -mt-1  absolute lg:mb-24 md:mb-10 mb-0">
                    <Image src={cryft2} />
                  </div>
                  <div className="w-[8vw] absolute lg:ml-0 md:-ml-10 -ml-7  lg:mt-16 md:mt-16 mt-10  flex">
                    <p className="lg:text-3xl md:text-2xl text-sm font-extrabold">
                      CRYFT
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-center lg:scale-100 md:scale-100 scale-[1.2] items-center">
                  <div className="relative lg:w-[25vh] md:w-[25vh] w-[12vh] ">
                    <Image src={cardBg} layout="responsive" />
                  </div>
                  <div className="w-[8vw] lg:mt-10 md:mt-10 -mt-1 absolute justify-center items-center flex">
                    <p className="lg:text-8xl md:text-7xl text-5xl    lg:-mt-24 md:-mt-10 -mt-5 font-extrabold">
                      ?
                    </p>
                  </div>
                  <div className="w-[8vw] absolute lg:mt-16 md:mt-16 mt-10 justify-center items-center flex">
                    <p className="lg:text-3xl md:text-2xl text-sm font-extrabold">
                      SOON
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-2 lg:mt-2 md:mt-2 mt-4">
                <div className="relative lg:w-[20vh] md:w-[20vh] w-[15vh] flex justify-center cursor-pointer ">
                  <MetaMaskButton height={30} />
                  <p className="cursor-pointer absolute lg:text-xl md:text-xl text-lg">
                    LEFT
                  </p>
                </div>
                <div className="relative lg:w-[20vh] md:w-[20vh] w-[15vh] flex justify-center cursor-pointer ">
                  <MetaMaskButton height={30} />
                  <p className="cursor-pointer absolute lg:text-xl md:text-xl text-lg">
                    RIGHT
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div
              style={{ boxShadow: "0 0 6px rgb(19 168 158)" }}
              className={
                hide
                  ? "text-white bg-[#0000008e] backdrop-blur-md w-[90%] gap-4 m-auto py-12 rounded-xl justify-center items-center z-[2] flex flex-col font-Changeling text-sm "
                  : "hidden"
              }
            >
              <div className="text-white justify-center items-center flex font-Changeling text-3xl">
                <p className="tracking-wide text-2xl"> BALANCES</p>
              </div>
              <Link href="/Wallet">
                <div className="flex flex-col cursor-pointer  mt-2 text-sm z-[100]">
                  <button className="bg-regal-blue tracking-widest text-[10px] py-2 px-8 rounded-xl">
                    GO BACK
                  </button>
                </div>
              </Link>

              <div className="flex space-x-5 lg:text-2xl md:text-2xl text-lg">
                <p className="text-regal-blue">USD</p>
                <p>$10000.3213233</p>
              </div>
              <div className="flex space-x-5 lg:text-2xl md:text-2xl text-lg">
                <p className="text-regal-blue">QTY</p>
                <p>3231,14324.4323</p>
              </div>

              <div
                className={
                  hide ? "flex space-x-20 py-4 justify-center " : "hidden"
                }
              >
                <div className="flex flex-col justify-center lg:scale-100 md:scale-100 scale-[1.2]  items-center">
                  <div className="lg:w-[5vw] w-[10vw]">
                    <Image src={BNB} />
                  </div>
                  <div className="w-[8vw]  space-x-2  flex">
                    <p className="lg:text-3xl md:text-3xl text-lg">BNB </p>
                    <p className="lg:text-sm md:text-sm lg:flex md:flex hidden  text-xs mt-3 ml-2">
                      (GAS)
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-center lg:scale-100 md:scale-100 scale-[1.2] items-center">
                  <div className="lg:w-[5vw] w-[12vw] ">
                    <Image src={cryft2} />
                  </div>
                  <div className="w-[8vw]  flex">
                    <p className="lg:text-3xl md:text-2xl text-sm font-extrabold">
                      CRYFT
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-center lg:scale-100 md:scale-100 scale-[1.2] items-center">
                  <div className="w-[8vw]   justify-center items-center flex">
                    <p className="lg:text-8xl md:text-7xl text-5xl  font-extrabold">
                      ?
                    </p>
                  </div>
                  <div className="w-[8vw]  justify-center items-center flex">
                    <p className="lg:text-3xl md:text-2xl text-sm font-extrabold">
                      SOON
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-8 ">
                <div className=" lg:w-[20vh] md:w-[20vh] w-[15vh] flex justify-center cursor-pointer ">
                  <button className="bg-regal-blue tracking-widest text-[14px] py-2 px-8 rounded-xl">
                    LEFT
                  </button>
                </div>
                <div className=" lg:w-[20vh] md:w-[20vh] w-[15vh] flex justify-center cursor-pointer ">
                  <button className="bg-regal-blue tracking-widest text-[14px] py-2 px-8 rounded-xl">
                    RIGHT
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
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

export default WalletBalance;
