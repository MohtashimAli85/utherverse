import React from "react";
import Image from "next/image";
import Link from "next/link";
import SocialLinks from "../navbar/sociallinks";
import Container from "../ui/container";
function Footer() {
  const allLinks = [
    {
      name: "Vison",
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
        { name: "Disclaimer", href: "/" },
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
    <footer>
      <Container>
        <section>
          <div>
            <Image
              src="/logo-secondary.png"
              alt="logo"
              width={100}
              height={100}
            />
          </div>
          <div>
            <h2>Subscribe to our newsletter and receive updates!</h2>
            <div>
              <input type="email" placeholder="Enter e-Mail" />
              <button>SEND</button>
            </div>
          </div>
        </section>
        <section>
          {allLinks.map((e, i) => {
            return (
              <div key={i} className="">
                <h1>{e.name}</h1>
                <ul>
                  {e.links.map((link, i) => {
                    return link?.social ? (
                      link.social
                    ) : (
                      <li key={i}>
                        <Link href={link?.href}>{link?.name}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </section>
        <section>
          <p>
            **The information presented on this web page and throughout this web
            site is currently a work in progress. We make no assurances that it
            is error free, and there may be oversights while we build and proof
            the materials. This website may contain forward looking statements,
            which statements may not be relied on in any manner as to any matter
            pertaining to the Utherverse, its creators or any related persons or
            companies. For additional information please see our Privacy Policy
            and Terms and Conditions.
          </p>
          <p>© 2022 Utherverse.io. All Rights Reserved.</p>
          <ul>
            {specialLinks.map((link, i) => (
              <li key={i} className="">
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
