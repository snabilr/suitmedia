import React from "react";

const Banner = () => {
  return (
    <div className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('')",
          transform: "translateY(0px)",
        }}
      ></div>
      <div className="relative z-10 p-16">
        <h1 className="text-white text-4xl">Ideas</h1>
        <p className="text-white text-lg">Where all our great things begin</p>
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-16 bg-white"
        style={{ transform: "skewY(-5deg)" }}
      ></div>
    </div>
  );
};

export default Banner;
