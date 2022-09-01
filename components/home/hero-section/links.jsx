import React from "react";
import Link from "next/link";

function Links() {
  const links = [
    { name: "WHITEPAPER", href: "/", style: "bg-gradient-purple" },
    { name: "TOKENOMICS", href: "/", style: "bg-primary" },
    { name: "fNft™", href: "/", style: "bg-primary" },
    { name: "PARTICIPATE IN IDO", href: "/" },
  ];
  return (
    <ul className=" flex gap-5 font-medium">
      {links.map((link, index) => {
        return (
          <li
            key={index}
            className={`${link.style} border border-primary rounded-md px-3 py-2`}
          >
            <Link href={link.href}>{link.name}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Links;
