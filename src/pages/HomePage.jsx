import React, { useEffect } from "react";
import { HeroSection } from "../sections/HeroSection";
import { CoursesSlider } from "../sections/CoursesSlider";
import { BlogSlider } from "../sections/BlogSlider";

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <CoursesSlider />
      <BlogSlider />
    </>
  );
};
