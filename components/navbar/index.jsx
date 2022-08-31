import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./navlinks";
import SocialLinks from "./sociallinks";
function NavBar() {
  return (
    <nav className="flex items-center border-b border-primary justify-between md:px-6 lg:px-8 xl:px-12">
      <div className="logo md:min-w-[120px] lg:min-w-[150px] xl:min-w-[180px] md:-mb-14 lg:-mb-16 xl:-mb-20 mt-5">
        <Image
          src="/logo-primary.png"
          alt="logo"
          width={100}
          height={80}
          layout="responsive"
        />
      </div>
      <NavLinks style="basis-[90%] " />
      <SocialLinks style="basis-[10%]" />
    </nav>
  );
}

export default NavBar;
