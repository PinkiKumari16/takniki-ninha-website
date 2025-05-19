import React, { useEffect, useRef } from "react";
import { Navbar } from "../components/Navbar";

export const AboutPage = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Disable right-click globally
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-3xl">
          <video
            ref={videoRef}
            width="100%"
            controls
            controlsList="nodownload nofullscreen noremoteplayback"
            disablePictureInPicture
            onContextMenu={(e) => e.preventDefault()}
            style={{ borderRadius: "12px" }}
          >
            {/* 👇 This is your video link */}
            <source
              src="https://www.youtube.com/watch?v=9JVcbWTWDEs&t=3862s"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
};
