import React from "react";

function Container({ children, style }) {
  return (
    <section
      className={`${style} mx-4 sm:mx-6 md:max-w-5xl lg:mx-auto lg:max-w-6xl xl:max-w-6xl 2xl:max-w-[1356px]`}
    >
      {children}
    </section>
  );
}

export default Container;
