import React from "react";
import Image from "next/image";
import {
  FaTelegramPlane,
  FaDiscord,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
function SocialLinks({ style }) {
  const icons = [
    FaTelegramPlane,
    FaDiscord,
    FaTwitter,
    FaFacebookF,
    FaInstagram,
  ];
  return (
    <ul className={`flex justify-between gap-3 ${style}`}>
      {icons.map((Icon, i) => {
        return (
          <li
            key={i}
            className="text-white hover:text-primary transition duration-150 cursor-pointer "
          >
            <Icon className="min-w-[18px] min-h-[18px]" />
          </li>
        );
      })}
    </ul>
  );
}

export default SocialLinks;
