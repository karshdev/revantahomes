
import { Button } from "./ui/button";
import { Tenor_Sans } from "next/font/google";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

import Image from "next/image";
import {
  BadmintonIcon,
  CctvIcon,
  CommunityIcon,

  GamesIcon,
  GardenIcon,
  GymIcon,
  PlayAreaIcon,
  RainwaterIcon,
  SecurityIcon,
  GrandGreat,
  UndergroundDranage,
  ConcreteRoad
} from "./icons";
const tenor = Tenor_Sans({ subsets: ["latin"], weight: "400" });



const Amenities = ({lang}) => {
  return (
    <div className="bg-[#F7F4EB] relative w-full min-h-[80vh]" id="amenitiesSection">
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
          <div className="col-span-4 lg:col-span-1 p-4 flex flex-col gap-6 pl-2 justify-center text-center lg:text-start">
            <h3
              className={`text-2xl lg:text-4xl text-center lg:text-left ${tenor.className}`}
            >
              {lang.Amenties.title}
            </h3>
            <p>
            {lang.Amenties.description}
            </p>
          
          </div>
          <div className="col-span-4 flex items-center justify-center lg:col-span-3 py-12 px-6 z-[100]">
            <div className="h-full flex gap-6 lg:flex-row ">
              <div className="lg:w-1/2 flex flex-col gap-12">
                <div className="flex flex-col lg:flex-row items-center gap-4">
                  <span className="p-2 bg-brand w-20 h-20 flex justify-center items-center">
                    <PlayAreaIcon />
                  </span>
                  <p className="font-bold text-sm text-center"> {lang.Amenties.Buttons.btn1}</p>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-4">
                  <span className="p-2 bg-brand w-20 h-20 flex justify-center items-center">
                    <GamesIcon />
                  </span>
                  <p className="font-bold text-sm  text-center">{lang.Amenties.Buttons.btn2}</p>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-4">
                  <span className="p-2 bg-brand w-20 h-20 flex justify-center items-center">
                    <GymIcon />
                  </span>
                  <p className="font-bold text-sm text-center">{lang.Amenties.Buttons.btn3}</p>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-4">
                  <span className="p-2 bg-brand w-20 h-20 flex justify-center items-center">
                    <BadmintonIcon />
                  </span>
                  <p className="font-bold text-sm  text-center">{lang.Amenties.Buttons.btn4}</p>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-4">
                  <span className="p-2 bg-brand w-20 h-20 flex justify-center items-center">
                    <CommunityIcon />
                  </span>
                  <p className="font-bold text-sm  text-center">{lang.Amenties.Buttons.btn5}</p>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-4">
                  <span className="p-2 bg-brand w-20 h-20 flex justify-center items-center">
                    <GardenIcon />
                  </span>
                  <p className="font-bold text-sm  text-center">{lang.Amenties.Buttons.btn6}</p>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-4">
                  <span className="p-2 bg-brand w-20 h-20 flex justify-center items-center">
                    <CctvIcon />
                  </span>
                  <p className="font-bold text-sm  text-center">{lang.Amenties.Buttons.btn7}</p>
                </div>
              </div>
              <div className=" lg:w-1/3 flex flex-col gap-12">
                <div className="flex flex-col lg:flex-row items-center gap-4">
                  <span className="p-2 bg-brand w-20 h-20 flex justify-center items-center">
                    <GardenIcon />
                  </span>
                  <p className="font-bold text-sm  text-center">{lang.Amenties.Buttons.btn6}</p>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-4">
                  <span className="p-2 bg-brand w-20 h-20 flex justify-center items-center">
                    <CctvIcon />
                  </span>
                  <p className="font-bold text-sm  text-center">{lang.Amenties.Buttons.btn7}</p>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-4">
                  <span className="p-2 bg-brand w-20 h-20 flex justify-center items-center">
                    <SecurityIcon />
                  </span>
                  <p className="font-bold text-sm  text-center">{lang.Amenties.Buttons.btn8}</p>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-4">
                  <span className="p-2 bg-brand w-20 h-20 flex justify-center items-center">
                    <RainwaterIcon />
                  </span>
                  <p className="font-bold text-sm  text-center">{lang.Amenties.Buttons.btn9}</p>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-4">
                  <span className="p-2 bg-brand w-20 h-20 flex justify-center items-center">
                  <svg
  width="48"
  height="48"
  xmlns="http://www.w3.org/2000/svg"
  fill="#F7F4EB"
  viewBox="0 0 24 24"
>
  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16h-2v-6h2zm0-8h-2V7h2z"/>
</svg>

                  </span>
                  <p className="font-bold text-sm  text-center">{lang.Amenties.Buttons.btn10}</p>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-4">
                  <span className="p-2 bg-brand w-20 h-20 flex justify-center items-center">
                  <svg
  width="48"
  height="48"
  xmlns="http://www.w3.org/2000/svg"
  fill="#F7F4EB"
  viewBox="0 0 24 24"
>
  <path d="M22 6h-5.35L17 2H7L6.35 6H1c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h1v7c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2h8c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-7h1c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-1 10H4v-4h17v4zm0-6H4V8h17v2z"/>
</svg>


                  </span>
                  <p className="font-bold text-sm  text-center">{lang.Amenties.Buttons.btn11}</p>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-4">
                  <span className="p-2 bg-brand w-20 h-20 flex justify-center items-center">
              


                  <GardenIcon />

                  </span>
                  <p className="font-bold text-sm  text-center">{lang.Amenties.Buttons.btn12}</p>
                </div>
               

              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Amenities;
