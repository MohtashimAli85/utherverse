import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function DropDown({ title, items }) {
  const dropDownHandler = (id, type) => {
    const title = document.querySelector(`.${id}-btn`);
    const value = title.getAttribute("aria-expanded");
    if (value == "false" && type == "Enter") {
      title.click();
      console.log(value);
    }
    if (value == "true" && type == "Leave") {
      title.click();
    }
  };
  return (
    <div
      className=""
      onMouseEnter={() => dropDownHandler(title, "Enter")}
      onMouseLeave={() => dropDownHandler(title, "Leave")}
    >
      <Menu as="div" className="relative block text-left">
        <Menu.Button
          className={`${title}-btn px-4 py-2 link-gradient flex w-full text-base gap-1 lg:justify-center  rounded-md bg-black bg-opacity-20  text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-opacity-75 `}
        >
          <span className={`${title} text-base md:text-lg`}>{title}</span>
          <svg
            className="self-center mt-[2px]"
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 5.5L10 0.5L0 0.5L5 5.5Z" fill="currentColor" />
          </svg>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            as="ul"
            className="absolute z-20 font-medium mt-2 w-44 origin-top-right  rounded-md bg-black shadow-lg ring-1 ring-primary ring-opacity-5 border border-primary "
          >
            {items.map((e, i) => {
              return (
                <li
                  className="hover:bg-primary bg-transparent transition cursor-pointer duration-150 px-3 py-1 !text-base"
                  key={i}
                >
                  <Link href={e.href} passHref>
                    <a>{e.name}</a>
                  </Link>
                </li>
              );
            })}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
