import React, { useEffect } from "react";
import { HeroSection } from "../sections/HeroSection";
import { CoursesSlider } from "../sections/CoursesSlider";
import { BlogSlider } from "../sections/BlogSlider";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { SocialStats } from "../sections/SocialStats";
import { SourceCodeSlider } from "../sections/SourceCodeSlider";
import { ReviewsSection } from "../sections/ReviewsSection";

export const HomePage = () => {
  return (
    <>
      <Navbar />
      {/* <HeroSection /> */}
      <HeroSection bgType="color" />
      {/* <HeroSection
        type="video"
        bgSources={[
          "https://www.w3schools.com/html/mov_bbb.mp4",
          "https://www.w3schools.com/html/movie.mp4",
        ]}
      /> */}
      {/* <HeroSection
        type="image"
        bgSources={[
          "https://www.udacity.com/blog/wp-content/uploads/2021/01/Become-a-full-stack-web-developer_Blog-scaled.jpeg",
          "https://www.biztechcs.com/wp-content/uploads/2024/03/Top-Software-Product-Ideas-for-Businesses-and-Startups-in-2024-jpg.webp",
        ]}
      /> */}
      <SocialStats />
      <CoursesSlider />
      <BlogSlider />
      <SourceCodeSlider />
      <ReviewsSection />
      <Footer />
    </>
  );
};
