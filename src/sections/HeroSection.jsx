import React from "react";

export const HeroSection = () => {
  return (
    <>
      <section className="text-center mt-16 h-[50vh] flex flex-col items-center justify-center px-[20px] bg-[#a9a0f7] text-[#1f2937]">
        <h1 className="text-2xl md:text-3xl mb-2">Welcome to Takniki Niga</h1>
        <p className="md:text-lg mb-5">
          Learn to code with simple tutorials and hands-on examples.
        </p>
        <button className="py-1 md:py-2 px-5 md:text-lg bg-[#1f2937] text-white border-none rounded-md hover:bg-[#111827]">
          Start Learning
        </button>
      </section>
    </>
  );
};
