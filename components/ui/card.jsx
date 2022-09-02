import React from "react";
import Image from "next/image";
import Link from "next/link";

function Card({
  title,
  subTitle,
  description,
  img,
  link,
  style,
  list,
  bgImg,
  CustomComponent,
}) {
  return (
    <>
      <div
        className={`flex flex-col lg:flex-row  md:w-[90%] mx-auto bg-night rounded-3xl overflow-hidden ${style}`}
      >
        <div className="absolute w-full md:w-[50%] right-0  bottom-[30%] -z-10">
          <div className="w-full relative order-2 basis-1/2  md:max-w-md lg:max-w-lg xl:max-w-xl min-h-[410px]  ">
            <Image
              src={"/cards/blurred-icon.png"}
              // width={"100%"}
              // height={"100%"}
              alt={"bg img"}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        {bgImg && (
          <div className={`${bgImg.style} lg:basis-1/2 ${bgImg.src}`}></div>
        )}
        {CustomComponent && (
          <div className="lg:basis-1/2">{CustomComponent}</div>
        )}
        {img && (
          <div className={`w-full  ${img.style}  lg:basis-1/2   `}>
            <Image
              src={img.src}
              alt={img.alt}
              layout="fill"
              objectFit={img.ObjectFit}
            />
          </div>
        )}

        <div className="lg:basis-1/2 self-center px-4 md:px-10 space-y-3">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold">
            {title}
          </h1>
          <p className="text-lg md:text-xl font-medium text-primary">
            {subTitle}
          </p>
          <p className="text-base   font-light">{description}</p>
          <ul className="space-y-1  text-sm">
            {list &&
              list.map((e, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Image
                    src="/cards/bullet.png"
                    alt="bullet"
                    width={23}
                    height={26}
                  />
                  {e}
                </li>
              ))}
          </ul>
          <div className="">
            <Link href={link.href}>
              <a className="border link-gradient inline-block border-soft-blue rounded-md px-6 py-2 tracking-wide font-medium uppercase">
                {link.title}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
