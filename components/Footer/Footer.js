import React from "react";
import Contact from "./Contact";
import Image from "next/image";
import Svg from "../Svg";

function Footer() {
  return (
    <div className="w-full bg-elementC h-200 relative">
      <div className="grid grid-cols-1 md:gap-30 sm:ml-28 pt-10 md:grid-cols-2 2xl:grid-cols-3 gap-y-12 sm:gap-y-0">
        <div className="xl:pl-32">
          <div>
            <strong className=" ">About Us</strong>
            <p className=" lg:w-80">
              We are selling shoes and we are only only provide online shopping
              bla... bla... bla... bla... bla... bla... bla... bla... bla...
              bla... bla... bla... bla... bla... bla... bla... bla... bla...
              bla... bla... bla... bla... bla...
            </p>
          </div>
        </div>

        <div>
          <Contact></Contact>
        </div>
        <div className="relative flex flex-col bg-gray-900 sm:bg-elementC bg-opacity-40 w-auto items-center rounded-xl h-64 sm:mb-16 ">
          <div className="flex flex-col items-center sm:bg-gray-900 sm:bg-opacity-40 h-96">
            <div>
              <strong>You can find us here:</strong>
            </div>

            <div className=" flex space-x-9 bg-gray-700 w-80 p-3 rounded-xl">
              <Svg need="facebook" />
              <Svg need="twitter" />
              <Svg need="youtube" />
              <Svg need="instagram" />
            </div>
            <div className="w-96 pl-8 pr-9">
              Help us reach more pepople , so we can improve our range and
              bla... bla... bla... bla... bla... bla... bla... bla... bla...
              bla... bla... bla... bla... bla... bla... bla...
            </div>
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-3 xl:pl-64 text-xs text-gray-500 bg-black bg-opacity-40 gap-1">
        <div className="napiz1 cursor-wait w-64">
          <a>Normalnie ja to robilem skrrr</a>
        </div>

        <div>
          <a className="napiz1 pl-9">Terms of use</a>
        </div>

        <div>
          <a className="napiz1">Privacy policy</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
