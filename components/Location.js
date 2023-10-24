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
                <iframe className="w-full h-full min-h-[50vh]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3701.07739662955!2d77.9059892755896!3d21.93157585615884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd609cb25d3040d%3A0x20738ea55bf2707c!2sRevanta%20Homes!5e0!3m2!1sen!2sin!4v1698162092604!5m2!1sen!2sin" width="600" height="450" style={{border: 0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
     );
}
 
export default Location;