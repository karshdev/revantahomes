"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "./ui/button";
import { ArrowDownIcon, GlobeIcon } from "@radix-ui/react-icons";
import useScroll from "../lib/hooks/use-scroll";
import useWindowSize from "../lib/hooks/use-window-size";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";




const Navbar =  ({lang}) => {
  const router=useRouter()
  const scrolled = useScroll(20);
  const { isMobile } = useWindowSize();
  // const changeLanguage = (lng) => {
  //   i18n.changeLanguage(lng);
  // };
  
  const handleToggle=()=>{
    router.push(lang.Language==='english' ? "/hi" : "/en")
}

 
 
  return (
    <div
      className={`fixed top-0 w-full z-[100000] ${
        scrolled ? "bg-white bg-opacity-30 backdrop-blur-lg" : ""
      }`}
    >
      <nav className="flex justify-between items-center my w-full max-w-screen-xl mx-auto h-20 lg:h-[110px] p-2">
        <div className="flex gap-2 lg:gap-28 items-center">
      {isMobile ? (
        <div className="w-full flex justify-center">
          <Image src="/assets/logo.png" alt="Reventa Logo" height={50} width={50} />
        </div>
      ) : (
          <Image
            src="/assets/logo.png"
            alt="Reventa Logo"
            height={100}
            width={100}
          />
      )}
         
        </div>
        <div className="flex gap-4 items-center justify-center" >
          <a  href="/main_brochure.pdf" download className="inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-brand text-primary-foreground shadow hover:bg-brand/90 h-8 px-3 text-xs rounded-none cursor-pointer" >
            <ArrowDownIcon className="mr-4" /> {lang.Navbar.downloadBrochure}
          </a>

          <button className=" h-[50px] w-[50px] rounded-full flex items-center justify-center" onClick={handleToggle}>
            <img src="/assets/language-switch.svg" className="w-[100%] h-[100%]" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
