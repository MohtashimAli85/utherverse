import React from "react";

function Videos() {
  const videos = [
    {
      src: "/videos/club.mp4",
      style:
        "min-w-[84px] min-h-[250px] md:min-w-[140px] md:min-h-[380px] lg:min-w-[160px]    xl:min-w-[200px] 2xl:min-w-[250px] lg:min-h-[420px] 2xl:min-h-[500px]",
    },
    {
      src: "/videos/beach.mp4",
      style:
        "min-w-[84px] min-h-[280px] md:min-w-[140px] md:min-h-[420px] lg:min-w-[160px]    xl:min-w-[200px] 2xl:min-w-[250px] lg:min-h-[475px] 2xl:min-h-[550px]",
    },
    {
      src: "/videos/restaurant-plaza.mp4",
      style:
        "min-w-[84px] min-h-[250px] md:min-w-[140px] md:min-h-[380px] lg:min-w-[160px]    xl:min-w-[200px] 2xl:min-w-[250px] lg:min-h-[420px] 2xl:min-h-[500px]",
    },
  ];
  return (
    <>
      {videos.map((video, index) => {
        return (
          <div
            key={index}
            className={`-skew-x-[15deg]  min-w-[160px] min-height-[420px] overflow-hidden ${video.style}`}
          >
            <video
              className={`object-cover w-full h-full absolute left-[37%] -translate-x-[50%] skew-x-[15deg] `}
              src={video.src}
              muted
              loop
              autoPlay
              playsinline
              defaultMuted
            />
          </div>
        );
      })}
    </>
  );
}

export default Videos;