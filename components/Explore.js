"use client"
import { Tenor_Sans } from "next/font/google";
import { FC, useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";
import PopUpLanding from "./PopUpLanding";

const tenor = Tenor_Sans({ subsets: ["latin"], weight: "400" });



const Explore = ({lang}) => {
  const [state, SetState] = useState('/explore_images/orchid.webp')
  const[btn,setBtn]=useState(false)
  const [showImage, setShowImage] = useState(false);
 const[selectedImage,setSelectedImage]=useState('')

 const handleClick = (imagePath) => {
  setSelectedImage(imagePath);
  setShowImage(true);
};

const handleCloseImage = (event) => {
   if (event.target.classList.contains('bg-black')) {
setShowImage(false)
  }
};
  let val=''
  return (
    <div className="min-h-screen relative bg-[url('/explore_images/explore-bg.webp')] bg-brand w-full bg-blend-multiply py-12">
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
            className={` ${state === "/explore_images/orchid.webp" ? "bg-[#C1D6C3]" : "bg-secondary"} rounded-none px-6 lg:px-10 text-primary hover:bg-green-100`}
            onClick={() => SetState('/explore_images/orchid.webp')}
          >
            {lang.Explore.Buttons.Orchid}
          </Button>
          <Button
            variant={"brand"}
            size={"lg"}
            className={` ${state === "/explore_images/tulip.webp" ? "bg-[#C1D6C3]" : "bg-secondary"} rounded-none px-6 lg:px-10 text-primary hover:bg-green-100`}
            onClick={() => SetState('/explore_images/tulip.webp')}
          >
              {lang.Explore.Buttons.Tulip}
          </Button>
          <Button
            variant={"brand"}
            size={"lg"}
            className={` ${state === "/explore_images/iris.webp" ? "bg-[#C1D6C3]" : "bg-secondary"} rounded-none px-6 lg:px-10 text-primary hover:bg-green-100`}
            onClick={() => SetState('/explore_images/iris.webp')}
          >
             {lang.Explore.Buttons.Iris}
          </Button>
        </div>
        <div className="grid grid-cols-5 w-full gap-4">
          <div className="w-full  col-span-3 relative">
            <AspectRatio ratio={3 / 2}  style={{ cursor: "pointer" }}>
              <Image
                src={state}
                alt="Orchid"
                onClick={() => handleClick(state)}
                fill
                className="object-cover"
              />
            </AspectRatio>
          </div>
          <div className="w-full  relative">
            <Image
              src= {state === "/explore_images/orchid.w" ? "/explore_images/orchid_floor_plan1.webp" : state === "/explore_images/tulip.webp" ?  "/explore_images/tulip_floor_plan1.webp" :  "/explore_images/iris_floor_plan1.webp"}
              alt="Orchid"
              onClick={() => handleClick(state === "/explore_images/orchid.webp" ? "/explore_images/orchid_floor_plan1.webp" : state === "/explore_images/tulip.webp" ? "/explore_images/tulip_floor_plan1.webp" : "/explore_images/iris_floor_plan1.webp")} 
              fill
              className="object-cover cursor-pointer"
            />
          </div>
          <div className="w-full relative">
            <Image
              src={state === "/explore_images/orchid.webp" ? "/explore_images/orchid_floor_plan2.webp" : state === "/explore_images/tulip.webp" ?  "/explore_images/tulip_floor_plan2.webp" :  "/explore_images/iris_floor_plan2.webp"}
              alt="Orchid"
              fill
              onClick={() => handleClick(state === "/explore_images/orchid.webp" ? "/explore_images/orchid_floor_plan2.webp" : state === "/explore_images/tulip.webp" ? "/explore_images/tulip_floor_plan2.webp" : "/explore_images/iris_floor_plan2.webp")}
              className="object-cover cursor-pointer"
            />
          </div>
        </div>
        <div className="grid grid-cols-5 w-full gap-4">
          <div className="w-full col-span-5 lg:col-span-3 relative">
            <div className="flex flex-col text-white items-center justify-center lg:items-start ">
              <h3 className={`text-2xl lg:text-4xl text-center lg:text-start mb-4 ${tenor.className}`}>
                {state === "/explore_images/orchid.webp" ? val=lang.Explore.Buttons.Orchid : state === "/explore_images/tulip.webp" ?  val=lang.Explore.Buttons.Tulip : val=lang.Explore.Buttons.Iris}
                
              </h3>
              {state === "/explore_images/orchid.webp" ?
                (
                  <>
                    <p className="font-light">{lang.Explore.Orchid.direction}</p>
                    <p className="font-bold">{lang.Explore.Orchid.size}</p>
                    <p className="font-bold">{lang.Explore.Orchid.area}</p>
                    <p className="font-bold">{lang.Explore.Orchid.sqft}</p>

                  </>
                )
                :
                state === "/explore_images/tulip.webp" ?
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
                btn && <PopUpLanding setBtn={setBtn}  val={state === "/explore_images/orchid.webp" ? lang.Explore.Buttons.Orchid :  state === "/explore_images/tulip.webp" ? lang.Explore.Buttons.Tulip  : lang.Explore.Buttons.Iris  } lang={lang} />
              }
            </div>
          </div>
          <div className="w-full relative col-span-2 order-first md:mt-10  lg:order-last lg:col-span-1">
            <AspectRatio ratio={4 / 3}   className="cursor-pointer h-24 ">
              <Image
                src={state === "/explore_images/orchid.webp" ? "/explore_images/orchid_isometric1.webp" : state === "/explore_images/tulip.webp" ?  "/explore_images/tulip_isometric1.webp" :  "/explore_images/iris_isometric1.webp"}
                alt="Orchid"
                fill
                onClick={() => handleClick(state === "/explore_images/orchid.webp" ? "/explore_images/orchid_isometric1.webp" : state === "/explore_images/tulip.webp" ? "/explore_images/tulip_isometric1.webp" : "/explore_images/iris_isometric1.webp")}
                className="object-cover overflow-visible"
              />
            </AspectRatio>
          </div>
          <div className="w-full  relative order-first col-span-2 md:mt-10  lg:order-last lg:col-span-1">
            <AspectRatio ratio={4 / 3} className="cursor-pointer h-24 ">
              <Image
                src={state === "/explore_images/orchid.webp" ? "/explore_images/orchid_isometric2.webp" : state === "/explore_images/tulip.webp" ?  "/explore_images/tulip_isometric2.webp" :  "/explore_images/iris_isometric2.webp"}
                alt="Orchid"
                fill
                onClick={() => handleClick(state === "/explore_images/orchid.webp" ? "/explore_images/orchid_isometric2.webp" : state === "/explore_images/tulip.webp" ? "/explore_images/tulip_isometric2.webp" : "/explore_images/iris_isometric2.webp")}
                className="object-cover overflow-visible"
              />
            </AspectRatio>
          </div>
          {showImage && (
        <div className="fixed top-0 left-0 w-full h-full z-[1000000] flex justify-center items-center bg-black bg-opacity-70 " onClick={handleCloseImage}>
          <div className="bg-white h-[500px] w-[500px] relative max-w-3xl mx-auto">
            <button
              onClick={()=>setShowImage(false)}
              className="absolute top-4 right-4 text-black text-3xl"
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Clicked Image"
             
            
              className=" object-contain w-[500px] h-[500px]"
            />
          </div>
        </div>
      )}
        </div>
      </div>
    </div>
  );
};

export default Explore;
