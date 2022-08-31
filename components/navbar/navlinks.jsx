import React from "react";
import Link from "next/link";
import DropDown from "../ui/drop-down";

export default function NavLinks({ style }) {
  const dropDown = [
    {
      name: "Vision",
      items: [
        { name: "Mission", href: "/" },
        { name: "Vision", href: "/" },
        { name: "Web 3.D", href: "/" },
        { name: "VWW", href: "/" },
        { name: "Build A Metaverse", href: "/" },
        { name: "Interconnectivity", href: "/" },
        { name: "MMOR", href: "/" },
        { name: "Unity", href: "/" },
        { name: "Responsibility", href: "/" },
        { name: "Operations", href: "/" },
      ],
    },
    {
      name: "Economy",
      items: [
        { name: "Economics", href: "/" },
        { name: "Tokenomics", href: "/" },
        { name: "FNFT", href: "/" },
      ],
    },
  ];
  const links = [
    {
      name: "Press",
      href: "/",
    },
    {
      name: "Patents",
      href: "/",
    },
    {
      name: "Legacy",
      href: "/",
    },
    {
      name: "careers",
      href: "/",
    },
  ];
  return (
    <ul
      className={`flex md:text-lg items-center justify-center gap-4 font-medium ${style}`}
    >
      {dropDown.map((link, index) => {
        return (
          <li key={index} className="">
            <DropDown title={link.name} items={link.items} />
          </li>
        );
      })}
      {links.map((link, index) => (
        <li key={index} className="px-4 py-2 link-gradient rounded-md">
          <Link href={link.href}>{link.name}</Link>
        </li>
      ))}
    </ul>
  );
}
