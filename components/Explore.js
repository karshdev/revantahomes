"use client"
import { Tenor_Sans } from "next/font/google";
import { FC, useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";
import PopUpLanding from "./PopUpLanding";

const tenor = Tenor_Sans({ subsets: ["latin"], weight: "400" });



const Explore = () => {
  const [state, SetState] = useState('/BG.png')
  const[btn,setBtn]=useState(false)
  let val=''
  return (
    <div className="min-h-screen relative bg-[url('/explore_images/explore_bg.png')] bg-brand w-full bg-blend-multiply py-12">
      <div className="w-full max-w-screen-xl mx-auto flex  flex-col items-center space-y-12 p-2">
        <h1
          className={`text-2xl lg:text-4xl text-center lg:text-left text-white ${tenor.className}`}
        >
          Explore Homes
        </h1>
        <div className="flex gap-4">
          <Button
            variant={"brand"}
            size={"lg"}
            className={` ${state === "/BG.png" && "bg-[#C1D6C3]"}  rounded-none px-6 lg:px-10 text-primary hover:bg-green-100`}
            onClick={() => SetState('/BG.png')}
          >
            ORCHID
          </Button>
          <Button
            variant={"brand"}
            size={"lg"}
            className={` ${state === "/BG2.png" && "bg-[#C1D6C3] "}  rounded-none px-6 lg:px-10 text-primary hover:bg-green-100`}
            onClick={() => SetState('/BG2.png')}
          >
            TULIP
          </Button>
          <Button
            variant={"brand"}
            size={"lg"}
            className={` ${state === "/BG3.png" && "bg-[#C1D6C3] "}  rounded-none px-6 lg:px-10 text-primary hover:bg-green-100`}
            onClick={() => SetState('/BG3.png')}
          >
            IRIS
          </Button>
        </div>
        <div className="grid grid-cols-5 w-full gap-4">
          <div className="w-full h-full col-span-3 relative">
            <AspectRatio ratio={3 / 2}>
              <Image
                src={state}
                alt="Orchid"
                fill
                className="object-cover"
              />
            </AspectRatio>
          </div>
          <div className="w-full h-full relative">
            <Image
              src={"/explore_images/orchid_floor_plan.png"}
              alt="Orchid"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full h-full relative">
            <Image
              src={"/explore_images/orchid_floor_plan2.png"}
              alt="Orchid"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="grid grid-cols-5 w-full gap-4">
          <div className="w-full h-full col-span-5 lg:col-span-3 relative">
            <div className="flex flex-col text-white ">
              <h3 className={`text-2xl lg:text-4xl text-center lg:text-start mb-4 ${tenor.className}`}>
                {state === "/BG.png" ? val='Orchid' : state === "/BG2.png" ?  val='Tulip' : val='Iris'}
                
              </h3>
              {state === "/BG.png" ?
                (
                  <>
                    <p className="font-light">25x50 PLOT AREA (WEST)</p>
                    <p className="font-bold">1250 sqft</p>
                    <p className="font-bold">Super Builtup Area</p>
                    <p className="font-bold">2,097 Sqft</p>

                  </>
                )
                :
                state === "/BG2.png" ?
                  (
                    <>
                      <p className="font-light">25x50 PLOT AREA (EAST)</p>
                      <p className="font-bold">1250 sqft of Tulip</p>
                      <p className="font-bold">Super Builtup Area</p>
                      <p className="font-bold">2,097 Sqft</p>

                    </>
                  )
                  :
                  (
                    <>
                      <p className="font-light">25x50 PLOT AREA (NORTH)</p>
                      <p className="font-bold">1250 sqft of IRIS</p>
                      <p className="font-bold">Super Builtup Area</p>
                      <p className="font-bold">2,097 Sqft</p>

                    </>
                  )

              }

              <Button  variant={"brand"} size={"lg"}  className="w-[150px] mt-[10px] bg-[#C1D6C3] rounded-none px-6 lg:px-10 text-primary hover:bg-green-100" onClick={()=>setBtn(true)} >
                View Price
              </Button>
              {
                btn && <PopUpLanding setBtn={setBtn}  val={val}/>
              }
            </div>
          </div>
          <div className="w-full h-full relative col-span-2 lg:col-span-1">
            <AspectRatio ratio={4 / 3} className="h-24 lg:h-full">
              <Image
                src={"/explore_images/orchid_isometri1.png"}
                alt="Orchid"
                fill
                className="object-cover overflow-visible"
              />
            </AspectRatio>
          </div>
          <div className="w-full h-full relative col-span-2 lg:col-span-1">
            <AspectRatio ratio={4 / 3} className="h-24 lg:h-full">
              <Image
                src={"/explore_images/orchid_isometri2.png"}
                alt="Orchid"
                fill
                className="object-cover overflow-visible"
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
