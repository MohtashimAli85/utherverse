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
    <ul className={`flex justify-between gap-3 ${style}`}>
      {icons.map((Icon, i) => {
        return (
          <li
            key={i}
            className="text-white hover:text-primary transition duration-150 cursor-pointer "
          >
            <Link href={Icon.href}>
              <a>
                <Icon.icon className="min-w-[22px] min-h-[22px]" />
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default SocialLinks;
