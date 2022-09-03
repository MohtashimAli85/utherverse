import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaTelegramPlane,
  FaDiscord,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
function SocialLinks({ style }) {
  const icons = [
    { icon: FaDiscord, href: "https://discord.gg/theuthers" },
    { icon: FaTelegramPlane, href: "https://t.me/utherverseannouncements" },
    { icon: FaTwitter, href: "https://twitter.com/Utherverse" },
    { icon: FaFacebookF, href: "https://www.facebook.com/UtherverseDigital" },
    { icon: FaInstagram, href: "https://www.instagram.com/utherverse" },
  ];
  return (
    <div className=" relative">
      <h3 className="w-fit mx-auto font-medium text-xl bg-dark-purple px-3 py-2 rounded-2xl absolute left-1/2 -translate-x-1/2 -top-8 shadow-sm shadow-night">
        We&lsquo;re social
      </h3>
      <ul
        className={`flex justify-center gap-10 bg-primary w-fit mx-auto p-4 rounded-2xl ${style} `}
      >
        {icons.map((Icon, i) => {
          return (
            <li
              key={i}
              className="text-white hover:text-primary transition duration-150 cursor-pointer "
            >
              <Link href={Icon.href}>
                <a>
                  <Icon.icon className="min-w-[40px] min-h-[40px]" />
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SocialLinks;
