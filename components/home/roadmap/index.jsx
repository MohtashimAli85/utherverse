import React from "react";
import Container from "../../ui/container";
import Accordin from "./accordin";
import SocialLinks from "./sociallinks";
import ContactUs from "./contact-us";
function RoadMap() {
  const accordins = [
    {
      question: "Click to unfold Q1 2022",
      answers: ["Utherverse Demo Launch - Completed"],
      img: "/v-icon.svg",
    },
    {
      question: "Click to unfold Q2 2022",
      answers: ["Alpha Test Begins - Completed"],
      img: "/v-icon.svg",
    },
    {
      question: "Click to unfold Q3 2022",
      answers: ["Alpha Phase 2"],
      img: "/v-icon1.svg",
    },
    {
      question: "Click to unfold Q4 2022",
      answers: [
        "Closed Beta - Open for Key Stakeholders - Legacy Users - Power Users",
        "Token Generation Event",
        "Adding user tools - Users Build their own experience: Clothing, props, Private Residences",
      ],
      img: "/v-icon1.svg",
    },
    {
      question: "Click to unfold 2023",
      answers: [
        "Open Beta - Stress Test unlimited users",
        "Closet and Shop system - List / List for sale, clothing and props users build",
        "Commercial and Residential Real Estate and Stores",
        "Fully virtual concerts and conventions w/real world integration",
      ],
      img: "/v-icon1.svg",
    },
  ];
  return (
    <Container style="space-y-20">
      <div>
        <h1 className="text-gradient-purple text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black tracking-wide">
          ROADMAP
        </h1>
        <p className="font-medium text-base sm:text-lg lg:text-xl text-center my-3">
          The Evolution of our Company and the Future Roadmap of Utherverse.io
        </p>
      </div>
      <div className="space-y-3 relative">
        {accordins.map((e, i) => (
          <Accordin
            key={i}
            question={e.question}
            answers={e.answers}
            img={e.img}
            num={i + 1}
          />
        ))}

        <div className="hidden lg:block bg-primary w-[2px] h-full absolute left-[50%] -translate-x-[50%] -top-5"></div>
      </div>
      <SocialLinks />
      <ContactUs />
    </Container>
  );
}

export default RoadMap;
