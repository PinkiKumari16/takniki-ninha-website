import React, { useEffect, useRef, useState } from "react";

export const HeroSection = ({ type = "color", bgSources = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRefs = useRef([]);

  // Initialize refs for videos
  useEffect(() => {
    videoRefs.current = bgSources.map((_, i) => videoRefs.current[i] || React.createRef());
  }, [bgSources]);

  // Slideshow logic
  useEffect(() => {
    let interval;

    if (type === "image" && bgSources.length > 1) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % bgSources.length);
      }, 4000);
    }

    if (type === "video" && bgSources.length > 1) {
      interval = setInterval(() => {
        if (!isVideoPlaying) {
          setCurrentIndex((prev) => (prev + 1) % bgSources.length);
        }
      }, 6000);
    }

    return () => clearInterval(interval);
  }, [type, bgSources, isVideoPlaying]);

  const handleVideoClick = (index) => {
    // Stop and reset all videos
    videoRefs.current.forEach((ref, i) => {
      if (ref.current) {
        // ref.current.pause();
        ref.current.currentTime = 0;
        ref.current.muted = true;
        ref.current.controls = false;
      }
    });

    const currentVideo = videoRefs.current[index]?.current;
    if (currentVideo) {
      setCurrentIndex(index);
      setIsVideoPlaying(true);
      currentVideo.currentTime = 0;
      currentVideo.muted = false;
      currentVideo.controls = true;
      currentVideo.play();
    }
  };

  const handleVideoOffClick = () => {
    const currentVideo = videoRefs.current[currentIndex]?.current;
    if (currentVideo) {
      currentVideo.pause(); // Pause full-screen mode
      currentVideo.currentTime = 0;
      currentVideo.muted = true;
      currentVideo.controls = false;
      currentVideo.play(); // Resume muted background loop
    }
    setIsVideoPlaying(false);
  };

  return (
    <section className="relative mt-16 h-[50vh] flex flex-col items-center justify-center px-[20px] text-[#1f2937] overflow-hidden">
      {/* Video Background */}
      {type === "video" &&
        bgSources.map((src, index) => (
          <video
            key={index}
            ref={videoRefs.current[index]}
            src={src}
            loop={!isVideoPlaying}
            muted={true}
            autoPlay
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 cursor-pointer ${
              index === currentIndex
                ? isVideoPlaying
                  ? "opacity-100 z-20"
                  : "opacity-30 z-10"
                : "opacity-0"
            }`}
            onClick={() =>
              index === currentIndex
                ? isVideoPlaying
                  ? handleVideoOffClick()
                  : handleVideoClick(index)
                : null
            }
          />
        ))}

      {/* Image Background */}
      {type === "image" &&
        bgSources.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Background ${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-20 z-10" : "opacity-0"
            }`}
          />
        ))}

      {/* Solid Color Fallback */}
      {type === "color" && (
        <div className="absolute inset-0 bg-[#a9a0f7] opacity-100 z-0" />
      )}

      {/* Foreground Content */}
      {!isVideoPlaying && (
        <div className="relative text-center z-30">
          <h1 className="text-3xl font-bold md:text-3xl mb-2">
            Welcome to Takniki Niga
          </h1>
          <p className="md:text-lg mb-5">
            Learn to code with simple tutorials and hands-on examples.
          </p>
          <button className="py-1 md:py-2 px-5 md:text-lg bg-[#1f2937] text-white rounded-md hover:bg-[#111827]">
            Start Learning
          </button>
        </div>
      )}
    </section>
  );
};
