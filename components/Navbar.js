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
      className={`fixed top-0 w-full z-50 ${
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
          <Button variant={"brand"} size={"sm"} className=" rounded-none">
            <ArrowDownIcon className="mr-4" /> {lang.Navbar.downloadBrochure}
          </Button>

          <button className=" h-[50px] w-[50px] rounded-full flex items-center justify-center" onClick={handleToggle}>
            <img src="/assets/language-switch.svg" className="w-[100%] h-[100%]" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
