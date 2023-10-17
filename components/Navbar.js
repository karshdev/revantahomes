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
          <Image src="/logo.png" alt="Reventa Logo" height={50} width={50} />
        </div>
      ) : (
          <Image
            src="/logo.png"
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

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              {isMobile ? (
                <Button variant="outline" size={"icon"} className="border-none">
                  {" "}
                  <GlobeIcon className="mr-4" />{" "}
                </Button>
              ) : (
                <Button variant="outline" className="border-none">
                  {" "}
                  <GlobeIcon className="mr-4" /> English
                </Button>
              )}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="lg:w-56">
              <DropdownMenuLabel>Language</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  English
                  <DropdownMenuShortcut>⇧⌘E</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Indonesia
                  <DropdownMenuShortcut>⌘I</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>Lang 2</DropdownMenuItem>
                <DropdownMenuItem>
                  Lang 2<DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
