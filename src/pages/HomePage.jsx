import React, { useEffect } from "react";
import { HeroSection } from "../sections/HeroSection";
import { CoursesSlider } from "../sections/CoursesSlider";
import { BlogSlider } from "../sections/BlogSlider";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { SocialStats } from "../sections/SocialStats";

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SocialStats />
      <CoursesSlider />
      <BlogSlider />
      <Footer />
      
    </>
  );
};
