import React from "react";
import Divider from "../../ui/divider";
import Card from "../../ui/card";
import Container from "../../ui/container";
import Image from "next/image";
function Cards() {
  return (
    <div className="overflow-hidden  space-y-32">
      <div className="relative ">
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
      <div className="relative">
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
      <div className="relative">
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
      <div className="relative ">
        <Divider src="/cards/divider-connection.png" alt="connection" />
        <Container>
          <Card
            title="Utherverse Economy"
            subTitle="Utherverse has been overseeing a vast community with a vibrant economy for more than 17 years."
            description="Since 2008, our members have engaged in more than 32 billion transactions. Those transactions represent a lifetime GDP value of more than $15 billion in US dollar terms."
            CustomComponent={<Economy />}
            link={{ href: "/", title: "Learn More" }}
            style="min-h-[400px] gap-4 pb-5 md:pb-10 lg:pb-0 "
          />
        </Container>
      </div>
    </div>
  );
}
function Economy() {
  return <></>;
}
export default Cards;
