import React from "react";
import Image from "next/image";

function ContactUS() {
  return (
    <div className="w-11/12 mx-auto">
      <div className="relative">
        <Image
          src={"/utherverse-group-image.png"}
          alt="utherverse group image"
          layout="responsive"
          width={500}
          height={500}
          objectFit="contain"
          className="-z-10"
        />
      </div>
      <div className="bg-primary px-5 md:px-10 py-5 md:py-10 flex flex-col justify-center items-center md:flex-row md:justify-between gap-4 rounded-2xl  -mt-20 md:-mt-36 lg:-mt-56">
        <div className="basis-[70%]">
          <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold">
            For business or press Inquiries
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl font-light">
            We’re aiming to respond to you within 5 business days!
          </p>
        </div>
        <div className="basis-[30%]">
          <button className="bg-dark-purple rounded-md shadow-[0px_0px_20px_#00000067] w-full px-3 py-4 text-lg md:text-xl lg:text-2xl font-bold uppercase">
            Contact US
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactUS;
