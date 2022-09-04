import React from "react";
import Image from "next/image";
import Link from "next/link";
import SocialLinks from "../navbar/sociallinks";
import Container from "../ui/container";
function Footer() {
  const allLinks = [
    {
      name: "Vision",
      links: [
        { name: "Mission", href: "/" },
        { name: "Vision", href: "/" },
        { name: "Our Legacy", href: "/" },
        { name: "Web 3.D", href: "/" },
        { name: "VWW", href: "/" },
        { name: "Build A Metaverse", href: "/" },
        { name: "Interconnectivity", href: "/" },
        { name: "", href: "/" },
      ],
    },
    {
      name: "Links",
      links: [
        { name: "Aeon", href: "/" },
        { name: "MMOR", href: "/" },
        { name: "Unity", href: "/" },
        { name: "Responsibility", href: "/" },
        { name: "Operations", href: "/" },
        { name: "Careers", href: "/" },
      ],
    },
    {
      name: "Economy",
      links: [
        { name: "Tokenomics", href: "/" },
        { name: "fNFT", href: "/" },
      ],
    },
    {
      name: "Other",
      links: [
        { name: "Press", href: "/" },
        { name: "Privacy Policy", href: "/" },
        { name: "Disclaimer", href: "/" },
        { name: "", href: "/" },
      ],
    },
    {
      name: "Contact Us",
      links: [
        { name: "Contact ", href: "/" },
        { name: "Follow us", href: "/" },
        { social: <SocialLinks /> },
      ],
    },
  ];
  const specialLinks = [
    { name: "Personal Data Policy", href: "/" },
    { name: "Cookie Policy", href: "/" },
    { name: "Terms and Conditions", href: "/" },
  ];
  return (
    <footer className="mt-20 py-12 md:px-6">
      <Container style="space-y-10">
        <section className="flex gap-10 items-center w-full md:w-11/12 mx-auto ">
          <div className="bg-dark-purple md:basis-9/12 px-5 py-10 rounded-2xl flex gap-4 flex-col md:flex-row">
            <h2 className="text-xl md:text-2xl md:basis-1/2">
              Subscribe to our newsletter and receive updates!
            </h2>
            <div className="md:basis-1/2 flex flex-col md:flex-row gap-4 items-center">
              <input
                type="email"
                placeholder="Enter e-Mail"
                className="bg-primary w-full md:basis-9/12 p-3 rounded-md placeholder:text-white outline-none"
              />
              <button className="w-full basis-full md:basis-1/4 bg-purple-monster hover:bg-purple-monster/75 transition duration-200 p-3 rounded-md">
                SEND
              </button>
            </div>
          </div>
          <div className="basis-1/4 md:block hidden">
            <Image
              src="/logo-secondary.png"
              alt="logo"
              width={300}
              height={270}
              className=""
            />
          </div>
        </section>
        <section className="flex justify-between flex-col gap-3 sm:flex-row flex-wrap">
          {allLinks.map((e, i) => {
            return (
              <div key={i} className="space-y-1 basis1/4">
                <h1 className="text-lg md:text-xl lg:text-2xl font-medium">
                  {e.name}
                </h1>
                <ul className="space-y-2 font-light text-base md:text-lg">
                  {e.links.map((link, i) => {
                    return link?.social ? (
                      link.social
                    ) : (
                      <li key={i} className="">
                        <Link href={link?.href}>
                          <a className="hover:text-primary transition duration-200">
                            {link?.name}
                          </a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </section>
        <section className="text-center space-y-5">
          <div className="md:hidden">
            <Image
              src="/logo-secondary.png"
              alt="logo"
              width={200}
              height={170}
              className=""
            />
          </div>
          <p className="text-sm text-justify sm:text-center text-grey font-light md:w-10/12 mx-auto">
            **The information presented on this web page and throughout this web
            site is currently a work in progress. We make no assurances that it
            is error free, and there may be oversights while we build and proof
            the materials. This website may contain forward looking statements,
            which statements may not be relied on in any manner as to any matter
            pertaining to the Utherverse, its creators or any related persons or
            companies. For additional information please see our Privacy Policy
            and Terms and Conditions.
          </p>
          <p className="font-light tracking-wide">
            © 2022 Utherverse.io. All Rights Reserved.
          </p>
          <ul className="flex flex-wrap gap-4 justify-center">
            {specialLinks.map((link, i) => (
              <li
                key={i}
                className="gradient text-sm font-medium px-2 py-1 rounded-md"
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </footer>
  );
}

export default Footer;
