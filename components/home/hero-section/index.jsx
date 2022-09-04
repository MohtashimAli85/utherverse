import React from "react";
import Links from "./links";
import Videos from "./videos";
import PoweredBy from "./powered-by";
import Container from "../../ui/container";
function HeroSection() {
  return (
    <section className="hero-section relative  py-5  my-16 space-y-4">
      <Container>
        <div className="flex flex-col lg:flex-row md:gap-10  gap-4 ">
          <div className="lg:basis-1/2 flex flex-col justify-center gap-10 mt-10">
            <div className="space-y-4">
              <div className="flex items-center gap-1 text-primary">
                <h1 className="text-4xl  md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text- font-bold">
                  Utherverse
                </h1>
                <sup className="text-lg md:text-xl lg:text-2xl xl:text-3xl">
                  ®
                </sup>
              </div>
              <div className="flex items-center gap-1 ">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium">
                  Best Of All Worlds
                </p>
                <sup>TM</sup>
              </div>
              <p className="text-base md:text-lg font-light text-white">
                Combining the best of the Internet, Video Gaming and Virtual
                Reality
              </p>
            </div>
            <div className="space-y-4">
              <Links />
              <p className="text-base bg-[#2a0b53] px-3 py-2 rounded md:w-[70%]">
                <strong>Contract address:</strong> Once the token launches the
                official contract address will be here. Please be aware of
                scams. This token has not yet launched!
              </p>
            </div>
          </div>
          <div className="lg:basis-1/2 relative  ">
            <div className="hidden lg:block video-shadow"></div>
            <div className="flex w-full  justify-center items-center gap-4 relative mr-3 sm:mr-0 ">
              <Videos />
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <PoweredBy />
      </Container>
    </section>
  );
}

export default HeroSection;
