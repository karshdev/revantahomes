import { Tenor_Sans } from "next/font/google";
import { FC } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
const tenor = Tenor_Sans({ subsets: ["latin"], weight: "400" });



const Contact= ({}) => {
  return (
    <div className="py-14 relative w-full bg-[url('/spesification/element_bg.png')] bg-right bg-contain bg-no-repeat flex items-center overflow-hidden">
      <div className="w-full p-2 max-w-screen-xl mx-auto h-full flex flex-col justify-center gap-6">
        <h1
          className={`text-2xl lg:text-4xl text-center lg:text-left ${tenor.className}`}
        >
          Get in touch
        </h1>
        <p className="text-center lg:text-left">
          Please kindly fill out the form below, we will get back to you soon.
        </p>
        <div className=" flex gap-6 max-w-xl">
          <Input type="text" name="name" placeholder="Name" className=" rounded-none"/>
          <Input type="email" name="email" placeholder="Email" className=" rounded-none"/>
        </div>
        <div className="max-w-xl flex flex-col gap-3">
          <Input type="number" name="phone" placeholder="Phone Number" className=" rounded-none"/>
          <textarea type="text" name="message" placeholder="Message" className="h-20 flex  w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"/>
        </div>
       
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I agree that my submitted data is being collected and stored.
          </label>
        </div>
        <Button
          variant="default"
          size={"lg"}
          className="lg:max-w-sm rounded-none bg-gray-500 "
        >
          Send Message
        </Button>
      </div>
    </div>
  );
};

export default Contact;
