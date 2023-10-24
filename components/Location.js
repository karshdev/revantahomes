import { Tenor_Sans } from "next/font/google";
import { FC } from "react";

const tenor = Tenor_Sans({ subsets: ["latin"], weight: "400" });

 
const Location = ({lang}) => {
    return ( 
        <div className="w-full min-h-[80vh] flex flex-col lg:flex-row">
            <div className="bg-brand py-12 w-full lg:w-1/2 bg-[url('/explore_images/explore_bg.png')] bg-blend-multiply bg-no-repeat">
                <div className="w-full h-full flex justify-center items-start">
                    <div className=" max-w-sm h-full flex flex-col gap-6 justify-center p-2">
                        <h1 className={`text-2xl lg:text-4xl text-center lg:text-left text-white ${tenor.className}`}>{lang.Location.title}</h1>
                        <p className=" text-white text-lg text-center sm:text-start">{lang.Location.address}</p>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/2 ">
                <iframe className="w-full h-full min-h-[50vh]" src="https://www.google.com/maps/dir/30.8982624,77.0909804/Revanta+Homes,+Ranipur+Road,+Gouthana,+Betul+(Madhya+Pradesh)/@25.8584183,73.267013,6.74z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bd609cb25d3040d:0x20738ea55bf2707c!2m2!1d77.9085642!2d21.9315709?entry=ttu" width="600" height="450" style={{border: 0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
     );
}
 
export default Location;