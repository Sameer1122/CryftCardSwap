import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
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
        <motion.img
          animate="default"
          variants={variants}
          src={"/assets/cursor.gif"}
          className="cursor"
        />
        <Component {...pageProps} />
      </>
    </AnimatePresence>
  );
}

export default MyApp;
