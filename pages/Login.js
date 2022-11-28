import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Logo from "../public/assets/Cryft_Social_Logo.png";
const Login = () => {
  return (
    <>
      <Link href="/LoginB">
        <div className="bg-Login h-[100vh] bg-cover bg-center bg-no-repeat  flex flex-col ">
          <div className="text-white text-center w-[50%] m-auto justify-center items-center">
            <div className="lg:mt-16 md:mt-20 mt-20">
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="lg:text-7xl md:text-6xl customlg:-mt-8 custommd:-mt-16 text-5xl lg:mt-0 md:mt-0 -mt-48 tracking-wide font-Changeling "
              >
                CRYFT CARDS
              </motion.h1>
              <motion.h1
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
                className="my-8 lg:text-2xl md:text-2xl text-xl  font-Changeling tracking-wide"
              >
                WELCOME TO THE MOON
              </motion.h1>
              <motion.div
                initial={{
                  scale: 0.5,
                  opacity: 0,
                }}
                transition={{
                  duration: 1,
                  delay: 1,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                className="w-100"
              >
                <div className="logo-main">
                  <Image
                    style={{ overflow: "visible" }}
                    className="hover:animate-wiggle w-100ho"
                    src={Logo}
                    height="100"
                    width="100"
                    alt="CRYFT SOCIAL LOGO"
                  />
                </div>
              </motion.div>
              <motion.h1
                initial={{
                  scale: 0.5,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.75,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                className="lg:text-2xl md:text-2xl text-xl mt-8 lg:mb-32 md:mb-24 mb-24 font-Changeling tracking-wide"
              >
                TAP ON THE SCREEN TO PROCEED
              </motion.h1>
              <p className=" lg:mx-32 md:mx-12 custommd:-mt-16 mt-5  md:mt-16 lg:mt-16 sm:mt-24 mx-2 lg:text-[11px] md:text-[12px] text-[11px] text-justify">
                DISCLAIMER The information provided on this website does not
                constitute investment advice, financial advice, trading advice,
                or any other sort of advice and you should not treat any of the
                websites content as such. Cryft LLC does not recommend that any
                cryptocurrency should be bought, sold, or held by you. Do
                conduct your own due diligence and consult your financial
                advisor before making any investment decisions. All product and
                company names are the registered trademarks of their original
                owners.
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Login;
