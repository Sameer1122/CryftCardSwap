import React from "react";
import Image from "next/image";
import img1 from "../public/assets/SVG/Menu Right.svg";
import img2 from "../public/assets/SVG/Menu Center.svg";
import img3 from "../public/assets/SVG/Menu Bottom Left.svg";
import img4 from "../public/assets/SVG/Menu Bottom Right.svg";
import centerMain from "../public/assets/Menu Center.svg";
import Wallet from "../public/assets/Wallet_Address (2).svg";
import Link from "next/link";
import CenterSvg from "../utils/CenterSvg";
const WalletHeader = ({ hide }) => {
  return (
    //   <div className="bg-Redeem h-[100vh] font-Changeling text-regal-blue w-[100vw] bg-cover bg-center bg-no-repeat flex flex-col ">
    <>
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
        <div className="absolute text-regal-blue flex lg:flex-row md:flex-row sm:flex-col justify-center mt-8 -space-x-28">
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
            <Link href="/Wallet">
              <CenterSvg />
            </Link>
            <div className="flex justify-center lg:text-2xl text-xl lg:-mt-20 md:-mt-20 -mt-16 items-center ">
              <p>WALLET</p>
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
              {/* <p>TOKEN EXIT</p> */}
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
          </div>
        </div>
      </div>

      <div
        className={
          hide
            ? "lg:hidden md:hidden text-regal-blue space-y-8 flex flex-col justify-center items-center content-center"
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
          <p className="text-2xl absolute">WALLET</p>
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
    </>
    // </div>
  );
};

export default WalletHeader;
