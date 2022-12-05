import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import "../styles/globals.css";

import { useWindowSize } from "../utils/hooks/useWindowResize";
import Image from "next/image";

function MyApp({ Component, pageProps }) {
  const [height, width] = useWindowSize();
  const [hamB, sethamB] = useState(false);
  const route = useRouter();
  const [mousePosition, setMousePosition] = useState({
    X: 0,
    y: 0,
  });
  console.log(mousePosition);
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX - 7,
        y: e.clientY - 7,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
    },
  };
  return (
    //   <motion.div
    //     className="w-[100%] min-h-screen"
    //     transition={{
    //       duration: 0.4,
    //     }}
    //     key={router.route}
    //     initial="initialState"
    //     animate="animateState"
    //     exit="exitState"
    //     variants={{
    //       initialState: {
    //         opacity: 0.75,
    //         // clipPath: "polygon (50% 0, 50% 0, 50% 100%, 50% 100%)",
    //       },
    //       animateState: {
    //         opacity: 1,
    //         // clipPath: "polygon (50% 0, 50% 0, 50% 100%, 50% 100%)",
    //       },
    //       exitState: {
    //         // clipPath: "polygon(0% 0px, 100% 0%, 100% 100%, 0% 100%)",
    //       },
    //     }}
    //   >
    <AnimatePresence mode="wait">
      <>
        {width > 600 && (
          <motion.img
            transition={{
              duration: 0.0000001,
            }}
            animate="default"
            variants={variants}
            src={"/assets/cursor.gif"}
            className="cursor"
          />
        )}

        {width < 786 &&
          route.pathname !== "/Login" &&
          route.pathname !== "/LoginB" && (
            <header>
              <nav
                className={`${hamB && "open"} `}
                style={{ width: `${hamB ? "100%" : "20px"}` }}
              >
                <div onClick={() => sethamB(false)} className="overlay"></div>
                <div
                  style={{
                    boxShadow: "0 0 6px rgb(19 168 158)",
                    overflow: "visible",
                  }}
                  className="flex-sm middle  relative  z-[2000000]"
                >
                  <div className=" absolute top-[50%] z-[100000000] -right-[18%]   rotate-[90deg]">
                    <h1
                      onClick={() => sethamB(!hamB)}
                      className="px-4 text-white bg-regal-blue rounded-3xl"
                    >
                      {hamB ? "Close" : " Open"}
                    </h1>
                  </div>
                  <div className="item flex flex-col gap-4">
                    {/* <div className="mb-12">
                      <Image
                        width={102}
                        height={102}
                        objectFit={"contain"}
                        src={logo}
                      />
                    </div> */}
                    <Link href={"/Redeem"}>
                      <p
                        className={`text-white text-2xl font-Changeling ${
                          route.pathname === "/Redeem" && "text-teal-600"
                        }`}
                        onClick={() => sethamB(false)}
                      >
                        Redeem
                      </p>
                    </Link>
                    <Link href={"/Swap"}>
                      <p
                        className={`text-white text-2xl font-Changeling ${
                          route.pathname === "/Swap" && "text-teal-600"
                        }`}
                        onClick={() => sethamB(false)}
                      >
                        Swap
                      </p>
                    </Link>
                    <Link href={"/Wallet"}>
                      <p
                        className={`text-white text-2xl font-Changeling ${
                          route.pathname === "/Wallet" && "text-teal-600"
                        }`}
                        onClick={() => sethamB(false)}
                      >
                        Wallet
                      </p>
                    </Link>
                    <Link href={"/Token"}>
                      <p
                        className={`text-white text-2xl font-Changeling ${
                          route.pathname === "/Token" && "text-teal-600"
                        }`}
                        onClick={() => sethamB(false)}
                      >
                        Token
                      </p>
                    </Link>
                    <Link href={"/LoginB"}>
                      <p
                        className={`text-white text-2xl font-Changeling ${
                          route.pathname === "/LoginB" && "text-teal-600"
                        }`}
                        onClick={() => sethamB(false)}
                      >
                        Exit
                      </p>
                    </Link>
                  </div>
                </div>
              </nav>
            </header>
          )}
        <Component {...pageProps} />
      </>
    </AnimatePresence>
  );
}

export default MyApp;
