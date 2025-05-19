import React, { useEffect, useRef, useState } from "react";

export const HeroSection = ({ type = "color", bgSources = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  // Background slideshow logic
  useEffect(() => {
    let interval;

    if (type === "image" && bgSources.length > 1) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % bgSources.length);
      }, 3000);
    }

    if (type === "video" && bgSources.length > 1 && !isVideoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % bgSources.length);
      }, 6000);
    }

    return () => clearInterval(interval);
  }, [type, bgSources, isVideoPlaying]);

  const handleVideoClick = () => {
    if (videoRef.current) {
      setIsVideoPlaying(true);
      videoRef.current.controls = true;
      videoRef.current.muted = false;
      videoRef.current.play();
    }
  };

  return (
    <section className="relative mt-16 h-[50vh] flex flex-col items-center justify-center px-[20px] text-[#1f2937] overflow-hidden">
      {/* Image Slideshow */}
      {type === "image" &&
        bgSources.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-20" : "opacity-0"
            }`}
          />
        ))}

      {/* Video Slideshow */}
      {type === "video" &&
        bgSources.map((src, index) => (
          <video
            key={index}
            ref={index === currentIndex ? videoRef : null}
            src={src}
            loop={!isVideoPlaying}
            muted={!isVideoPlaying}
            autoPlay
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 cursor-pointer ${
              index === currentIndex ? "opacity-20 z-10" : "opacity-0"
            }`}
            onClick={index === currentIndex ? handleVideoClick : undefined}
          />
        ))}

      {/* Solid Color fallback */}
      {type !== "image" && type !== "video" && (
        <div className="absolute inset-0 bg-[#a9a0f7] opacity-100" />
      )}

      {/* Foreground Content */}
      <div className="relative text-center z-30">
        <h1 className="text-3xl font-bold md:text-3xl mb-2">Welcome to Takniki Niga</h1>
        <p className="md:text-lg mb-5">
          Learn to code with simple tutorials and hands-on examples.
        </p>
        <button className="py-1 md:py-2 px-5 md:text-lg bg-[#1f2937] text-white rounded-md hover:bg-[#111827]">
          Start Learning
        </button>
      </div>
    </section>
  );
};
