"use client";

import { AspectRatio } from "../components/ui/aspect-ratio";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useTransform,
  useScroll,
  useAnimation,
} from "framer-motion";
import { Tenor_Sans } from "next/font/google";

const tenor = Tenor_Sans({ subsets: ["latin"], weight: "400" });

const Hero= ({ images,lang }) => {
  const [selectedTab, setSelectedTab] = useState(images[0]);
  const [index, setIndex] = useState(0);
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
 
 

  const cloudAnimationControls = useAnimation();

  useEffect(() => {
    const animateClouds = async () => {
      cloudAnimationControls.set({
        x: "0%",
        opacity: 1,
        rotate: 0,
        scale: 1,
      });
  
      while (true) {
        await cloudAnimationControls.start({
          x: "100%",
          opacity: 0,
          rotate: 45,
          scale: 0.8,
          transition: {
            duration: 15,
            ease: "linear",
          },
        });
  
        cloudAnimationControls.set({
          x: "-100%",
          opacity: 1,
          rotate: -45,
          scale: 1,
        });
  
        await cloudAnimationControls.start({
          x: "50%",
          opacity: 1,
          rotate: 0,
          scale: 1,
          transition: {
            duration: 10,
            ease: "linear",
          },
        });
  
        cloudAnimationControls.set({
          x: "0%",
          opacity: 1,
          rotate: 0,
          scale: 1,
        });
      }
    };
  
    animateClouds();
  }, [cloudAnimationControls]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedTab(images[index]);
      setIndex((index + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [index, images]);

  return (
    <div className="w-full relative bg-no-repeat bg-cover min-h-screen overflow-x-hidden overflow-y-hidden">
      <div className="  md:block">
        <motion.img
         animate={cloudAnimationControls}
          style={{ y }}
          src="/assets/cloud.png"
          alt="cloud"
          className="absolute top-1 left-[10px] opacity-[0.5]"
          width={600}
        />
         <motion.img
         animate={cloudAnimationControls}
          style={{ y }}
          src="/assets/cloud.png"
          alt="cloud"
          className="absolute top-5 left-[20px] opacity-[1]"
          width={600}
        />
         <motion.img
         animate={cloudAnimationControls}
          style={{ y }}
          src="/assets/cloud.png"
          alt="cloud"
          className="absolute top-10 left-[30px] opacity-[0.8]"
          width={600}
        />
        <motion.img
          style={{ y }}
          animate={cloudAnimationControls}
          src="/assets/cloud.png"
          alt="cloud"
          className="absolute top-20 left-[50px] opacity-[1]"
          width={600}
        />
        <motion.img
          style={{ y }}
          animate={cloudAnimationControls}
          src="/assets/cloud.png"
          alt="cloud"
          className="absolute top-30 left-[150px] opacity-[0.5]"
          width={600}
        />
        <motion.img
         animate={cloudAnimationControls}
          style={{ y }}
          src="/assets/cloud.png"
          alt="cloud"
          className="absolute top-40 left-[200px] opacity-[1]"
          width={600}
        />
        <motion.img
         animate={cloudAnimationControls}
          style={{ y }}
          src="/assets/cloud2.png"
          alt="cloud"
          className="absolute top-50 right-[50px] opacity-[0.8]"
          width={1000}
        />
        <motion.img
         animate={cloudAnimationControls}
          style={{ y }}
          src="/assets/cloud2.png"
          alt="cloud"
          className="absolute top-10 right-[30px] opacity-[0.9]"
          width={1000}
        />
         <motion.img
         animate={cloudAnimationControls}
          style={{ y }}
          src="/assets/cloud2.png"
          alt="cloud"
          className="absolute top-1 right-[20px] opacity-[0.9]"
          width={1000}
        />
         <motion.img
         animate={cloudAnimationControls}
          style={{ y }}
          src="/assets/cloud2.png"
          alt="cloud"
          className="absolute top-5 right-[100px] opacity-[0.9]"
          width={1000}
        />
        <motion.img
          style={{ y }}
          animate={cloudAnimationControls}
          src="/assets/cloud2.png"
          alt="cloud"
          className="absolute top-10 right-[150px] opacity-[1]"
          width={1000}
        />
      </div>
      <div className=" md:block">
        <motion.img
          style={{ y }}
          animate={cloudAnimationControls}
          src="/assets/cloud.png"
          alt="cloud"
          className="absolute top-52 left-[200px] opacity-[1]"
          width={200}
        />
        <motion.img
          style={{ y }}
          animate={cloudAnimationControls}
          src="/assets/cloud.png"
          alt="cloud"
          className="absolute top-30 left-[300px] opacity-[1]"
          width={200}
        />
        <motion.img
          style={{ y }}
          animate={cloudAnimationControls}
          src="/assets/cloud.png"
          alt="cloud"
          className="absolute top-40 left-[350px] opacity-[0.6]"
          width={200}
        />
        <motion.img
          style={{ y }}
          animate={cloudAnimationControls}
          src="/assets/cloud2.png"
          alt="cloud"
          className="absolute top-1/4 right-[400px] opacity-[0.8]"
          width={400}
        />
        <motion.img
          style={{ y }}
          src="/assets/cloud2.png"
          alt="cloud"
          animate={cloudAnimationControls}
          className="absolute top-1/2 right-[500px] opacity-[0.7]"
          width={400}
        />
        <motion.img
          style={{ y }}
          src="/assets/cloud2.png"
          alt="cloud"
          animate={cloudAnimationControls}
          className="absolute top-1 right-[600px] opacity-[0.5] "
          width={400}
        />
      </div>
      <div className="top-[50%] lg:mt-60 absolute left-0 lg:top-0 right-0 bottom-40 md:bottom-0 max-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.id : "empty"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-full "
          >
            <motion.img
              src={selectedTab ? selectedTab.full : ""}
              draggable={false}
              alt={"image"}
              width={"100%"}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="mt-[150px] h-full min-h-[80vh] lg:mt-60 z-10 lg:min-h-screen max-w-screen-xl mx-auto relative flex flex-col lg:flex-row justify-between">
        <div className="space-y-4 lg:space-y-8 p-2">
          <h1
            className={`text-3xl lg:text-5xl text-center lg:text-left ${tenor.className}`}
          >
            {lang.Hero.title}
          </h1>
          <p className=" text-black text-center custom-heading text-md lg:text-xl  sm:text-center lg:text-left">    
          {lang.Hero.description}
</p>
        </div>
        <nav className="  w-2/4 min-w-[380px] max-w-md md:mt-0 p-2">
          <motion.ul
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            className="w-full grid grid-cols-3 gap-2"
          >
            {images.map((item, index) => (
              <li
                key={index}
                className={`${
                  item === selectedTab ? "relative" : ""
                } w-full h-full cursor-pointer`}
                onClick={() => (setSelectedTab(item), setIndex(index))}
              >
                <AspectRatio
                  ratio={4 / 3}
                  className="relative col-span-2 bg-white "
                >
                  <Image
                    src={item?.thumbnail}
                    draggable={false}
                    alt={"image"}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    fill
                    className="object-cover shadow-lg"
                  />
                </AspectRatio>

                {item === selectedTab ? (
                  <>
                    <motion.div
                      className="absolute bottom-6 top-0 left-0 right-0 border-2 border-brandSecodary "
                      layoutId="underline"
                    />
                    <p className="text-center">{item.title}</p>
                  </>
                ) : null}
              </li>
            ))}
          </motion.ul>
        </nav>
      </div>
    </div>
  );
};

export default Hero;
