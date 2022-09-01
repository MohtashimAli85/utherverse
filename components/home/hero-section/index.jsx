import React from "react";
import Links from "./links";
import Videos from "./videos";
function HeroSection() {
  return (
    <section className="hero-section relative  py-20  my-20">
      <div className="flex gap-4 mx-4 sm:mx-6 md:max-w-5xl md:mx-auto lg:max-w-6xl xl:max-w-7xl 2xl:max-w-full 2xl:mx-16">
        <div className="basis-1/2 space-y-10">
          <div className="flex items-center gap-1 text-primary">
            <h1 className="text-6xl  md:text-6xl lg:text-7xl xl:text-8xl text- font-bold">
              Utherverse
            </h1>
            <sup className="text-lg md:text-xl lg:text-2xl xl:text-3xl">®</sup>
          </div>
          <div className="flex items-center gap-1 ">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium">
              Best Of All Worlds
            </p>
            <sup>TM</sup>
          </div>
          <p className="text-base md:text-lg font-light text-white">
            Combining the best of the Internet, Video Gaming and Virtual Reality
          </p>
          <Links />
          <p className="text-base bg-[#2a0b53] px-3 py-2 rounded md:w-[70%]">
            <strong>Contract address:</strong> Once the token launches the
            official contract address will be here. Please be aware of scams.
            This token has not yet launched!
          </p>
        </div>
        <div className="basis-1/2 relative  ">
          <div className="video-shadow"></div>
          <div className="flex w-full justify-center items-center gap-4 relative ">
            <Videos />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
