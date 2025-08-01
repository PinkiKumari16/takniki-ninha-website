import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const SocialStats = () => {
  const platforms = [
    {
      name: "YouTube Channel",
      count: "1.2M+",
      label: "subscribers",
      icon: (
        <YouTubeIcon style={{ fontSize: 40 }} className="text-red-600 mb-2" />
      ),
      url: "https://www.youtube.com/taknikiniga",
      btnLabel: "Subscribe",
      btnClass: "bg-red-600 hover:bg-red-900",
      textColor: "text-red-600",
    },
    {
      name: "Linkedin",
      count: "550K+",
      label: "followers",
      icon: (
        <LinkedInIcon style={{ fontSize: 50 }} className="text-blue-900 mb-2" />
      ),
      url: "https://www.linkedin.com/in/abhinash-singh-7b2960140",
      btnLabel: "Follow",
      btnClass: "bg-blue-900 hover:bg-blue-400",
      textColor: "text-blue-900",
    },
    {
      name: "Instagram",
      count: "450K+",
      label: "followers",
      icon: (
        <InstagramIcon
          style={{ fontSize: 40 }}
          className="text-pink-800 mb-2"
        />
      ),
      url: "https://www.instagram.com/takniki_niga",
      btnLabel: "Follow",
      btnClass: "bg-pink-800 hover:bg-pink-600",
      textColor: "text-pink-800",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-white">
      {/* Main Content */}
      <div className="relative z-10 text-center py-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Connect with Us on Social Media!
        </h2>

        <div className="grid px-4 md:px-0 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="p-8 rounded-xl hover:shadow-md transition flex flex-col items-center shadow-border-color bg-gray-50 border border-gray-200"
            >
              {platform.icon}
              <p className="text-lg text-gray-600 mb-1 font-medium">
                {platform.name}
              </p>
              <p className={`text-3xl font-extrabold ${platform.textColor}`}>
                {platform.count}
              </p>
              <p className="text-sm text-gray-500 mb-4">{platform.label}</p>
              <a
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block text-white px-6 py-2 rounded-md transition ${platform.btnClass}`}
              >
                {platform.btnLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
      {/* Bottom Bezier Wave */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#1e3a8a"
          d="M0,160 C360,280 1080,0 1440,160 L1440,320 L0,320 Z"
        />
      </svg>
    </div>
  );
};
