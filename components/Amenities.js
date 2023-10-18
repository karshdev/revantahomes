import { FC } from "react";
import { Button } from "./ui/button";
import { Tenor_Sans } from "next/font/google";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import {
  BadmintonIcon,
  CctvIcon,
  CommunityIcon,
  DrainageIcon,
  GamesIcon,
  GardenIcon,
  GymIcon,
  PlayAreaIcon,
  RainwaterIcon,
  SecurityIcon,
} from "./icons";
const tenor = Tenor_Sans({ subsets: ["latin"], weight: "400" });



const Amenities = ({lang}) => {
  return (
    <div className="bg-[#F7F4EB] relative w-full min-h-[80vh]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <div className="absolute top-0 left-0 bottom-0 right-0 items-center">
      <Image
        src="/assets/features_element.svg"
        alt="Element Bg"
        fill
        className="mx-auto bg-cover"
      />
      </div>
        <div className="grid grid-cols-4 w-full max-w-screen-xl mx-auto p-2 ">
          <div className="col-span-4 lg:col-span-1 flex flex-col gap-6 pl-2 justify-center text-center lg:text-start">
            <h3
              className={`text-2xl lg:text-4xl text-center lg:text-left ${tenor.className}`}
            >
              {lang.Amenties.title}
            </h3>
            <p>
            {lang.Amenties.address}
            </p>
            <div className="space-x-4 w-full flex justify-center lg:justify-start">
              <Button
                variant={"default"}
                size={"icon"}
                className="rounded-none"
              >
                <ChevronLeftIcon />
              </Button>
              <Button
                variant={"default"}
                size={"icon"}
                className="rounded-none"
              >
                <ChevronRightIcon />
              </Button>
            </div>
            <p className="text-center lg:text-start">
              1<span className="text-brandSecodary">/4</span>
            </p>
          </div>
          <div className="col-span-4 lg:col-span-3 py-12 px-6">
            <div className="h-full flex gap-6">
              <div className="w-1/2 flex flex-col gap-12">
                <div className="flex flex-col lg:flex-row items-center gap-4">
                  <span className="p-2 bg-brand w-20 h-20 flex justify-center items-center">
                    <PlayAreaIcon />
                  </span>
                  <p className="font-bold text-lg text-center"> {lang.Amenties.Buttons.btn1}</p>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-4">
                  <span className="p-2 bg-brand w-20 h-20 flex justify-center items-center">
                    <GamesIcon />
                  </span>
                  <p className="font-bold text-lg text-center">{lang.Amenties.Buttons.btn2}</p>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-4">
                  <span className="p-2 bg-brand w-20 h-20 flex justify-center items-center">
                    <GymIcon />
                  </span>
                  <p className="font-bold text-lgtext-center">{lang.Amenties.Buttons.btn3}</p>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-4">
                  <span className="p-2 bg-brand w-20 h-20 flex justify-center items-center">
                    <BadmintonIcon />
                  </span>
                  <p className="font-bold text-lg text-center">{lang.Amenties.Buttons.btn4}</p>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-4">
                  <span className="p-2 bg-brand w-20 h-20 flex justify-center items-center">
                    <CommunityIcon />
                  </span>
                  <p className="font-bold text-lg text-center">{lang.Amenties.Buttons.btn5}</p>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-4">
                  <span className="p-2 bg-brand w-20 h-20 flex justify-center items-center">
                    <GardenIcon />
                  </span>
                  <p className="font-bold text-lg text-center">{lang.Amenties.Buttons.btn6}</p>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-4">
                  <span className="p-2 bg-brand w-20 h-20 flex justify-center items-center">
                    <CctvIcon />
                  </span>
                  <p className="font-bold text-lg text-center">{lang.Amenties.Buttons.btn7}</p>
                </div>
              </div>
              <div className="w-1/2 flex flex-col gap-12">
                <div className="flex flex-col lg:flex-row items-center gap-4">
                  <span className="p-2 bg-brand w-20 h-20 flex justify-center items-center">
                    <GardenIcon />
                  </span>
                  <p className="font-bold text-lg text-center">{lang.Amenties.Buttons.btn6}</p>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-4">
                  <span className="p-2 bg-brand w-20 h-20 flex justify-center items-center">
                    <CctvIcon />
                  </span>
                  <p className="font-bold text-lg text-center">{lang.Amenties.Buttons.btn7}</p>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-4">
                  <span className="p-2 bg-brand w-20 h-20 flex justify-center items-center">
                    <SecurityIcon />
                  </span>
                  <p className="font-bold text-lg text-center">{lang.Amenties.Buttons.btn8}</p>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-4">
                  <span className="p-2 bg-brand w-20 h-20 flex justify-center items-center">
                    <RainwaterIcon />
                  </span>
                  <p className="font-bold text-lg text-center">{lang.Amenties.Buttons.btn9}</p>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-4">
                  <span className="p-2 bg-brand w-20 h-20 flex justify-center items-center">
                    <DrainageIcon />
                  </span>
                  <p className="font-bold text-lg text-center">{lang.Amenties.Buttons.btn10}</p>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-4">
                  <span className="p-2 bg-brand w-20 h-20 flex justify-center items-center">
                    <DrainageIcon />
                  </span>
                  <p className="font-bold text-lg text-center">{lang.Amenties.Buttons.btn11}</p>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-4">
                  <span className="p-2 bg-brand w-20 h-20 flex justify-center items-center">
                    <DrainageIcon />
                  </span>
                  <p className="font-bold text-lg text-center">{lang.Amenties.Buttons.btn12}</p>
                </div>
               

              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Amenities;
