import React from "react";

function Container({ children }) {
  return (
    <section className="mx-4 sm:mx-6 md:max-w-5xl lg:mx-auto lg:max-w-6xl xl:max-w-7xl 2xl:max-w-full 2xl:mx-16">
      {children}
    </section>
  );
}

export default Container;
