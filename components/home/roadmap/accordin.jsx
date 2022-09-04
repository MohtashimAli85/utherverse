import React, { useRef, useEffect } from "react";
import Image from "next/image";
function Accordin({ question, style, img, answers, num }) {
  const contentRef = useRef(null);
  const mobileContentRef = useRef(null);
  const toggleAccordion = (el) => {
    const allAnswers = document.querySelectorAll(".answer");

    contentRef.current.classList.toggle("opacity-0");
    contentRef.current.classList.toggle("translate-y-2");
    if (!mobileContentRef.current.classList.contains("active")) {
      mobileContentRef.current.classList.toggle("active");
      mobileContentRef.current.style.maxHeight = `${mobileContentRef.current.scrollHeight}px`;
    } else {
      mobileContentRef.current.classList.toggle("active");
      mobileContentRef.current.style.maxHeight = `0px`;
    }
  };

  return (
    <div className="panel flex flex-col lg:flex-row gap-3 lg:gap-14 lg:items-center w-full md:justify-between  mx-auto ">
      <button
        className={`flex lg:basis-1/2  gap-3 p-3 mb-2   items-center cursor-pointer ring-1 ring-transparent rounded-md transition duration-150 focus:ring-primary  ${
          num % 2 == 1 ? "lg:order-2" : "Lg:flex-row-reverse"
        }`}
        onClick={toggleAccordion}
      >
        <div className="faq-icon flex !min-w-[24px] !min-h-[24px] ">
          {/* <Image src={plusIcon} width={24} height={24} alt="icon" /> */}
          <Image src="/cards/bullet.png" width={24} height={24} alt="icon" />
        </div>
        <h1 className="question font-medium text-lg md:text-xl ">{question}</h1>
      </button>

      <div
        ref={mobileContentRef}
        className={`max-h-0  rounded-md  space-y-4 lg:hidden  overflow-hidden answer px-3 transition-[max-height] duration-500 text-base  md:text-lg `}
      >
        {answers.map((answer, i) => {
          return <Answer key={i} answer={answer} img={img} />;
        })}
      </div>
      <div
        ref={contentRef}
        className={`lg:flex flex-col gap-3 lg:basis-1/2 items-center hidden    opacity-0 translate-y-2 transition duration-300 ${
          num % 2 == 1 ? "order-1" : "flex-row-reverse"
        } `}
      >
        {answers.map((answer, i) => {
          return <Answer key={i} answer={answer} img={img} num={num} />;
        })}
      </div>
    </div>
  );
}
function Answer({ answer, img, num }) {
  return (
    <div
      className={`flex w-full items-center gap-4 bg-night rounded-md px-4 py-2 ${
        num % 2 == 1 ? "" : "flex-row-reverse"
      }`}
    >
      <div
        className={`bg-dark-grey p-3 rounded-md flex basis-auto items-center `}
      >
        <Image src={img} width={44} height={37} alt="icon" />
      </div>
      <p className="basis-full text-base"> {answer}</p>
    </div>
  );
}
export default Accordin;
