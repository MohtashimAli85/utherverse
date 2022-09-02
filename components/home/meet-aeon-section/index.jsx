import React from "react";
import Image from "next/image";
import Link from "next/link";

import Container from "../../ui/container";
function MeetAeonSection() {
  return (
    <div>
      <div className="bg-primary flex gap-5 justify-center items-center">
        <Image src="/vr-goggles.png" width={45} height={45} alt="vr goggles" />
        <h4 className="font-animo text-base md:text-lg xl:text-xl">
          With 17 years of development, our AEON™ generation metaverse platform
          will be revealed in Q3 of 2022!
        </h4>
      </div>
      <div className="flex flex-col md:flex-row relative ">
        <div className=" w-full lg:max-h-[868px] xl:max-w-5xl lg:max-w-5xl overflow-hidden">
          <Image
            src="/pensive.png"
            width={150}
            height={100}
            alt="pensive"
            objectFit="cover"
            layout="responsive"
          />
        </div>
        <div className="relative meet-aeon md:absolute lg:w-1/2 right-0 top-0 w-full h-full lg:px-4 lg:bg-black/0 bg-black/50 py-6 lg:py-8 xl:py-14">
          <Container>
            <div className="space-y-2 lg:space-y-3">
              <h1 className="text-3xl md:text-4xl  xl:text-5xl ">
                <span className="text-primary font-bold">Why</span> Utherverse
                is for you
              </h1>
              <div className="flex">
                <h2 className="font-bold text-3xl md:text-5xl">Meet AEON</h2>
                <sup className="mt-3 font-bold">TM</sup>
              </div>
              <p className="text-primary text-lg md:text-xl lg:text-2xl font-medium">
                Utherverse is Building the Next Layer of the Internet.
              </p>
            </div>
            <p className="md:w-[70%] mt-4 xl:mt-8 font-light mb-8 lg:mb-16">
              Users of the Utherverse will access this new Internet layer using
              a new kind of Internet Browser, named Aeon™. Aeon™ is a web 3.D
              browser with powerful new search engine tools.
            </p>
            <Link href="/">
              <a className="border link-gradient border-soft-blue rounded-md px-6 py-2 tracking-wide font-medium uppercase">
                Learn More
              </a>
            </Link>
            <p className="bg-gradient-purple mt-8 lg:mt-16 p-5 rounded-xl w-[70%] text-center">
              VR spaces that are being billed as “the metaverse” will be the
              equivalent of websites on the new Virtual World Web (VWW™) that is
              the Utherverse!
            </p>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default MeetAeonSection;
