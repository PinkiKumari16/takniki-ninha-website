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
      url: "https://www.youtube.com/@yourchannel",
      btnLabel: "Subscribe",
      btnClass: "bg-red-600 hover:bg-red-900",
      textColor: "text-red-600",
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
      url: "https://www.instagram.com/yourusername",
      btnLabel: "Follow",
      btnClass: "bg-pink-800 hover:bg-pink-600",
      textColor: "text-pink-800",
    },
    {
      name: "Linkedin",
      count: "550K+",
      label: "followers",
      icon: (
        <LinkedInIcon style={{ fontSize: 50 }} className="text-blue-900 mb-2" />
      ),
      url: "https://www.instagram.com/yourusername",
      btnLabel: "Follow",
      btnClass: "bg-blue-900 hover:bg-blue-400",
      textColor: "text-blue-900",
    },
  ];

  return (
    <div className="bg-white text-center py-16 px-4">
      <h2 className="text-2xl md:text-3xl md:text-4xl font-bold text-gray-800 mb-12">
        Connect with Us on Social Media!
      </h2>

      <div className="grid px-4 md:px-0 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {platforms.map((platform, index) => (
          <div
            key={index}
            className="bg-gray-100 p-8 rounded-xl hover:shadow-md transition flex flex-col items-center shadow-border-color"
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
  );
};
