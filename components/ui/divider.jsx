import React from "react";
import Image from "next/image";
function Divider({ src, alt }) {
  return (
    <div className="divider text-center max-w-[67px] md:max-w-[87px] lg:max-w-[117px] mx-auto mb-28">
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
