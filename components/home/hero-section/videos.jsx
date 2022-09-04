import React from "react";

function Videos() {
  const videos = [
    {
      src: "/videos/club.mp4",
      style:
        "min-w-[84px] sm:min-w-[120px] min-h-[250px] md:min-w-[140px] md:min-h-[380px] lg:min-w-[160px]    xl:min-w-[180px] 2xl:min-w-[200px] lg:min-h-[420px] 2xl:min-h-[500px]",
    },
    {
      src: "/videos/beach.mp4",
      style:
        "min-w-[84px] sm:min-w-[120px] min-h-[280px] md:min-w-[140px] md:min-h-[420px] lg:min-w-[160px]    xl:min-w-[180px] 2xl:min-w-[200px] lg:min-h-[475px] 2xl:min-h-[550px]",
    },
    {
      src: "/videos/plaza.mp4",
      style:
        "min-w-[84px] sm:min-w-[120px] min-h-[250px] md:min-w-[140px] md:min-h-[380px] lg:min-w-[160px]    xl:min-w-[180px] 2xl:min-w-[200px] lg:min-h-[420px] 2xl:min-h-[500px]",
    },
  ];
  return (
    <>
      {videos.map((video, index) => {
        return (
          <div
            key={index}
            className={`-skew relative  overflow-hidden ${video.style}`}
          >
            <div className="left-[50%]  skew w-full h-full absolute">
              <video
                className={`object-cover w-full h-full -translate min-w-[300px] `}
                src={video.src}
                muted
                loop
                autoPlay
                playsInline
              />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Videos;
