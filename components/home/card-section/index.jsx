import React from "react";
import Divider from "../../ui/divider";
import Card from "../../ui/card";
import Container from "../../ui/container";
import Image from "next/image";
function Cards() {
  return (
    <div className="overflow-hidden  space-y-32">
      <div className="metaverse card ">
        <Divider src="/cards/divider-connection.png" alt="connection" />
        <Container>
          <Card
            title="Build your OWN Metaverse"
            subTitle="It's easy"
            description="If you’re considering or already building a Metaverse presence, our platform is where you want it to be! We give you the software, tools, IP protection, technical support and 17 years of experience: Everything you need to be the Sovereign of your own Metaverse - Faster and Better!"
            bgImg={{
              src: "bg-[url('/cards/nature.png')]",
              alt: "nature",
              style: "min-h-[250px] bg-cover bg-no-repeat lg:order-1",
            }}
            link={{ href: "/", title: "Learn More" }}
            style="min-h-[400px] gap-4 pb-5 md:pb-10 lg:pb-0 "
          />
        </Container>
      </div>
      <div className="relative Interconnectivity">
        <Divider src="/cards/interconnectivity.png" alt="interconnectivity" />
        <Container>
          <div className="relative ">
            <Card
              title="Interconnectivity"
              subTitle="Built to be an interoperable hub where millions of unique worlds and games can interconnect and coexist via a system of permission"
              description="Think of the Utherverse as a web 3.D browser where you can:"
              list={[
                "“Landmark” your favorite places",
                "Search millions of worlds",
                "Jump into and out of events",
              ]}
              img={{
                src: "/cards/orbit-collage.png",
                alt: "orbit-collage",
                style:
                  " relative lg:absolute lg:left-16 lg:-top-24 min-h-[320px] max-h-[350px] md:min-h-[380px] md:max-w-[380px]   lg:min-h-[550px] lg:max-w-lg xl:max-w-xl",
                objectFit: "contain",
              }}
              link={{ href: "/", title: "Learn More" }}
              style="justify-end items-center gap-10 pb-5 md:pb-10 lg:pb-0 lg:min-h-[400px]"
            />
          </div>
        </Container>
      </div>
      <div className="relative Patent Protected">
        <Divider src="/cards/divider-shield.png" alt="shield" />
        <Container>
          <div className="relative ">
            <Card
              title="Patent Protected"
              subTitle="Our patented technology is years ahead of the competition."
              description="We have laid the groundwork for the metaverse and we will be forever tied to the growth and prosperity of the meta-era."
              img={{
                src: "/cards/patents.png",
                alt: "patents",
                style:
                  " relative lg:absolute lg:right-24 lg:-top-14 min-h-[320px] max-h-[350px] md:min-h-[380px] md:max-w-[380px]   lg:min-h-[550px] lg:max-w-[480px] ",
                objectFit: "contain",
              }}
              link={{ href: "/", title: "See All Patents" }}
              style="justify-start items-center gap-10 pb-5 md:pb-10 lg:pb-0 lg:min-h-[400px]"
            />
          </div>
        </Container>
      </div>
      <div className="relative Utherverse Economy">
        <div className="absolute -right-0  -top-[35px] bg-black ">
          <Image
            src="/cards/side-icon-right.svg"
            width={146}
            height={170}
            alt="icon right"
          />
        </div>
        <Divider src="/cards/divider-chart.png" alt="chart" />
        <Container>
          <Card
            title="Utherverse Economy"
            subTitle="Utherverse has been overseeing a vast community with a vibrant economy for more than 17 years."
            description="Since 2008, our members have engaged in more than 32 billion transactions. Those transactions represent a lifetime GDP value of more than $15 billion in US dollar terms."
            CustomComponent={<Economy />}
            link={{ href: "/", title: "Learn More" }}
            style="min-h-[400px] gap-4 pb-5 md:pb-10 lg:pb-0 lg:items-center"
          />
        </Container>
      </div>
      <div className="relative Utherverse Tokenomics">
        <Divider src="/cards/divider-logo.png" alt="logo" />
        <Container>
          <div className="relative ">
            <Card
              title="Utherverse Tokenomics"
              subTitle="The Tokenomics of Utherverse are designed to govern a sustainable economy utilizing our UTHER Coin along with a frictionless mirror token for in-world trade."
              description="Business will be done between decentralized blockchains in wholly new ways, as they interoperate via our platform. This will be the true realization of web 3.D"
              img={{
                src: "/cards/phone-tokens.png",
                alt: "phone-token",
                style:
                  " relative lg:absolute lg:right-32 lg:-top-14 min-h-[380px] max-h-[350px] md:min-h-[450px] md:max-w-[380px]   lg:min-h-[450px] lg:max-w-[380px] ",
                objectFit: "contain",
              }}
              link={{ href: "/", title: "Learn More" }}
              style="justify-start items-center gap-10 pb-5 md:pb-10 lg:pb-0 lg:min-h-[400px]"
            />
          </div>
        </Container>
      </div>
      <div className="relative MMOR™">
        <Divider src="/cards/divider-connection.png" alt="connection" />
        <Container>
          <Card
            title="MMOR™"
            subTitle="Massively Multiuser Online Reality"
            description="The Utherverse is the only platform that can truly handle MMOR (Massively Multiuser Online Reality) events on all devices, without a massiv drain on network resources. Our Innovative technology stack has alread solved many of the “show stopping” issues that newer metaverse companie haven’t even realized are problems yet."
            CustomComponent={<MMOR />}
            link={{ href: "/", title: "Learn More" }}
            style="min-h-[400px] gap-4 pb-5 md:pb-10 lg:pb-0 lg:items-"
          />
        </Container>
      </div>
      <div className="metaverse card ">
        <Divider src="/cards/divider-unity.png" alt="unity" />
        <Container>
          <Card
            title="Built on "
            titleImg="/cards/unity.svg"
            descriptions={[
              "The Utherverse is an open platform, built on the Unity Engine so our developers can provide you the best photorealistic avatars and environments. Our Avatars are Full-Bodied with movements that are physically and anatomically cutting edge.",
              "Platform Agnostic, usable on all your favourite devices: PC Mac, Tablets, Oculus, iOS and Android. Unity already has a massive community and they’ll be able to jump right in to the Utherverse and bring all their experience and creations along.",
            ]}
            bgImg={{
              src: "bg-[url('/cards/vr-section-background.png')]",
              alt: "nature",
              style: "min-h-[250px] bg-cover bg-no-repeat lg:order-1",
            }}
            link={{ href: "/", title: "Learn More" }}
            style="min-h-[400px] gap-4 pb-5 md:pb-10 lg:pb-0 "
          />
        </Container>
      </div>
      <div className="metaverse card ">
        <Divider src="/cards/unity-logo.png" alt="unity" />
      </div>
    </div>
  );
}
function Economy() {
  return (
    <>
      <div className="w-full px-6 sm:px-10 md:px-20 mt-4 text-light-gold py-5 lg:py-0">
        <Image
          src="/cards/32-billion.png"
          alt="32 billion"
          width={"80%"}
          height={10}
          layout="responsive"
          objectFit="contain"
        />
        <h4 className="text-3xl sm:text-4xl xl:text-5xl  mt-2 mb-5 font-light">
          Transactions
        </h4>
        <Image
          src="/cards/15-billion-dollars.png"
          alt="32 billion"
          width={"80%"}
          height={10}
          layout="responsive"
          objectFit="contain"
        />
        <h4 className="text-3xl sm:text-4xl xl:text-5xl font-light mt-2">
          US Dollars
        </h4>
      </div>
    </>
  );
}
function MMOR() {
  return (
    // <div>
    <video
      className={`object-cover w-full h-full  `}
      src={"/videos/plaza.mp4"}
      muted
      loop
      autoPlay
      playsInline
    />
    // </div>
  );
}
export default Cards;
