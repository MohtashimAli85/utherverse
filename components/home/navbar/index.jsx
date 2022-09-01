import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import { FaAngleDoubleLeft } from "react-icons/fa";
import NavLinks from "./navlinks";
import SocialLinks from "./sociallinks";
function NavBar() {
  const mobileNavBarEl = useRef(null);
  const menuHandler = () => {
    mobileNavBarEl.current.classList.toggle("-translate-x-64");
  };
  return (
    <nav className="flex items-center border-b min-h-[69px]  border-primary justify-center lg:justify-between md:px-6 lg:px-8 xl:px-12 shadow-[0px_3px_96px] lg:shadow-none shadow-primary relative">
      <MdMenu
        onClick={menuHandler}
        className="lg:hidden w-full h-full max-w-[30px] cursor-pointer text-primary cursor-pinter absolute left-4 "
      />

      <div className="basis-full  absolute lg:relative lg:basis-auto w-[120px] max-w-[160px] lg:w-[150px] xl:w-[180px] md:max-w-[180px] -mb-12 lg:-mb-16 xl:-mb-20 mt-5">
        <Image
          src="/logo-primary.png"
          alt="logo"
          width={"100%"}
          height={"80%"}
          layout="responsive"
          priority
        />
      </div>
      <NavLinks style="basis-[90%] hidden lg:flex" />
      <SocialLinks style="basis-[10%] hidden lg:flex" />
      <div
        ref={mobileNavBarEl}
        className="absolute  top-0  left-0 -translate-x-64 transition duration-150 bg-black  z-20 lg:hidden w-56"
      >
        <div className="border-b border-primary shadow-[0px_3px_96px] shadow-primary p-5 flex gap-3 items-center">
          <FaAngleDoubleLeft
            className="w-full h-full max-w-[20px] cursor-pointer text-primary"
            onClick={menuHandler}
          />
          <h1 className="text-lg sm:text-xl md:text-2xl font-light uppercase  ">
            Menu
          </h1>
        </div>
        <NavLinks style="flex-col px-4 mt-20" />
      </div>
    </nav>
  );
}

export default NavBar;
