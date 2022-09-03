import React from "react";
import Image from "next/image";
function Divider({ src, alt, style }) {
  return (
    <div
      className={`divider text-center max-w-[117px] mx-auto mb-10 md:mb-28 ${style}`}
    >
      <Image
        src={src}
        width={"100%"}
        height={"100%"}
        alt={alt}
        // layout="responsive"
        className="overflow-visible "
      />
    </div>
  );
}

export default Divider;
