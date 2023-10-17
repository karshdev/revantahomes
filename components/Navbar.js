"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "./ui/button";
import { ArrowDownIcon, GlobeIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";

import useScroll from "../lib/hooks/use-scroll";
import useWindowSize from "../lib/hooks/use-window-size";
import {getDictionary} from'../getDictionary'



const Navbar =  ({lang}) => {
  
  
  const scrolled = useScroll(20);
  const { isMobile } = useWindowSize();
  // const changeLanguage = (lng) => {
  //   i18n.changeLanguage(lng);
  // };
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
          <ul className="hidden lg:flex gap-2 lg:gap-10 text-brand">
            <li>
              <Link href={"/"}>{lang.Navbar.home}</Link>
            </li>
            <li>
              <Link href={"/"}> {lang.Navbar.about} </Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-4">
          <Button variant={"brand"} size={"sm"} className=" rounded-none">
            <ArrowDownIcon className="mr-4" /> {lang.Navbar.downloadBrochure}
          </Button>

          <button className=" h-[50px] w-[50px] rounded-full flex items-center justify-center">
            <img src="/assets/language-switch.svg" className="w-[100%] h-[100%]" />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
