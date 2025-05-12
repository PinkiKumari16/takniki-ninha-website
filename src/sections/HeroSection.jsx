import React from "react";

export const HeroSection = () => {
  return (
    <>
      <section className="text-center py-[80px] px-[20px] bg-[#a9a0f7] text-[#1f2937]">
        <h1 className="text-3xl mb-2">Welcome to Takniki Ninja</h1>
        <p className="text-lg mb-5">
          Learn to code with simple tutorials and hands-on examples.
        </p>
        <button className="py-2 px-5 text-lg bg-[#1f2937] text-white border-none cursor-pointer rounded-md hover:bg-[#111827]">
          Start Learning
        </button>
      </section>
    </>
  );
};
