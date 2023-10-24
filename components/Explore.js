"use client"
import { Tenor_Sans } from "next/font/google";
import { FC, useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";
import PopUpLanding from "./PopUpLanding";

const tenor = Tenor_Sans({ subsets: ["latin"], weight: "400" });



const Explore = ({lang}) => {
  const [state, SetState] = useState('/explore_images/Orchid.png')
  const[btn,setBtn]=useState(false)
  let val=''
  return (
    <div className="min-h-screen relative bg-[url('/explore_images/explore_bg.png')] bg-brand w-full bg-blend-multiply py-12">
      <div className="w-full max-w-screen-xl mx-auto flex  flex-col items-center space-y-12 p-2">
        <h1
          className={`text-2xl lg:text-4xl text-center lg:text-left text-white ${tenor.className}`}
        >
          {lang.Explore.title}
        </h1>
        <div className="flex gap-4">
          <Button
            variant={"brand"}
            size={"lg"}
            className={` ${state === "/explore_images/Orchid.png" ? "bg-[#C1D6C3]" : "bg-secondary"} rounded-none px-6 lg:px-10 text-primary hover:bg-green-100`}
            onClick={() => SetState('/explore_images/Orchid.png')}
          >
            {lang.Explore.Buttons.Orchid}
          </Button>
          <Button
            variant={"brand"}
            size={"lg"}
            className={` ${state === "/explore_images/Tulip.jpg" ? "bg-[#C1D6C3]" : "bg-secondary"} rounded-none px-6 lg:px-10 text-primary hover:bg-green-100`}
            onClick={() => SetState('/explore_images/Tulip.jpg')}
          >
              {lang.Explore.Buttons.Tulip}
          </Button>
          <Button
            variant={"brand"}
            size={"lg"}
            className={` ${state === "/explore_images/Iris.jpg" ? "bg-[#C1D6C3]" : "bg-secondary"} rounded-none px-6 lg:px-10 text-primary hover:bg-green-100`}
            onClick={() => SetState('/explore_images/Iris.jpg')}
          >
             {lang.Explore.Buttons.Iris}
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
              src= {state === "/explore_images/Orchid.png" ? "/explore_images/Orchid_floor_plan1.png" : state === "/explore_images/Tulip.jpg" ?  "/explore_images/Tulip_floor_plan1.jpg" :  "/explore_images/Iris_floor_plan1.jpg"}
              alt="Orchid"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full h-full relative">
            <Image
              src={state === "/explore_images/Orchid.png" ? "/explore_images/Orchid_floor_plan2.jpg" : state === "/explore_images/Tulip.jpg" ?  "/explore_images/Tulip_floor_plan2.png" :  "/explore_images/Iris_floor_plan2.jpg"}
              alt="Orchid"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="grid grid-cols-5 w-full gap-4">
          <div className="w-full h-full col-span-5 lg:col-span-3 relative">
            <div className="flex flex-col text-white items-center justify-center lg:items-start ">
              <h3 className={`text-2xl lg:text-4xl text-center lg:text-start mb-4 ${tenor.className}`}>
                {state === "/explore_images/Orchid.png" ? val=lang.Explore.Buttons.Orchid : state === "/explore_images/Tulip.jpg" ?  val=lang.Explore.Buttons.Tulip : val=lang.Explore.Buttons.Iris}
                
              </h3>
              {state === "/explore_images/Orchid.png" ?
                (
                  <>
                    <p className="font-light">{lang.Explore.Orchid.direction}</p>
                    <p className="font-bold">{lang.Explore.Orchid.size}</p>
                    <p className="font-bold">{lang.Explore.Orchid.area}</p>
                    <p className="font-bold">{lang.Explore.Orchid.sqft}</p>

                  </>
                )
                :
                state === "/explore_images/Tulip.jpg" ?
                  (
                    <>
                      <p className="font-light">{lang.Explore.Tulip.direction}</p>
                      <p className="font-bold">{lang.Explore.Tulip.size}</p>
                      <p className="font-bold">{lang.Explore.Tulip.area}</p>
                      <p className="font-bold">{lang.Explore.Tulip.sqft}</p>

                    </>
                  )
                  :
                  (
                    <>
                      <p className="font-light">{lang.Explore.Iris.direction}</p>
                      <p className="font-bold">{lang.Explore.Iris.size}</p>
                      <p className="font-bold">{lang.Explore.Iris.area}</p>
                      <p className="font-bold">{lang.Explore.Iris.sqft}</p>

                    </>
                  )

              }

              <Button  variant={"brand"} size={"lg"}  className="w-[160px] mt-[10px] bg-[#C1D6C3] rounded-none px-6 lg:px-10 text-primary hover:bg-green-100" onClick={()=>setBtn(true)} >
              {lang.Explore.Buttons.viewPrice}
              </Button>
              {
                btn && <PopUpLanding setBtn={setBtn}  val={state === "/explore_images/Orchid.png" ?  "ORCHID" :  state === "/explore_images/Tulip.jpg" ? "TULIP" : "IRIS" } lang={lang} />
              }
            </div>
          </div>
          <div className="w-full h-full relative col-span-2 order-first md:mt-10  lg:order-last lg:col-span-1">
            <AspectRatio ratio={4 / 3} className="h-24 lg:h-full">
              <Image
                src={state === "/explore_images/Orchid.png" ? "/explore_images/Orchid_isometric1.png" : state === "/explore_images/Tulip.jpg" ?  "/explore_images/Tulip_isometric1.png" :  "/explore_images/Iris_isometric1.png"}
                alt="Orchid"
                fill
                className="object-cover overflow-visible"
              />
            </AspectRatio>
          </div>
          <div className="w-full h-full relative order-first col-span-2 md:mt-10  lg:order-last lg:col-span-1">
            <AspectRatio ratio={4 / 3} className="h-24 lg:h-full">
              <Image
                src={state === "/explore_images/Orchid.png" ? "/explore_images/Orchid_isometric2.png" : state === "/explore_images/Tulip.jpg" ?  "/explore_images/Tulip_isometric2.png" :  "/explore_images/Iris_isometric2.png"}
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
