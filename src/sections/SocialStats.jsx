import React from "react";
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

export const SocialStats = () => {
  const platforms = [
    {
      name: "YouTube Channel",
      count: "1.2M+",
      label: "subscribers",
      icon: <YouTubeIcon style={{ fontSize: 40 }} className="text-red-600 mb-2" />,
      url: "https://www.youtube.com/@yourchannel",
      btnLabel: "Subscribe",
      btnClass: "bg-red-500 hover:bg-red-900",
      textColor: "text-red-600",
    },
    {
      name: "Instagram",
      count: "450K+",
      label: "followers",
      icon: <InstagramIcon style={{ fontSize: 40 }} className="text-blue-600 mb-2" />,
      url: "https://www.instagram.com/yourusername",
      btnLabel: "Follow",
      btnClass: "bg-blue-600 hover:bg-blue-900",
      textColor: "text-blue-600",
    },
    // Add more platforms here easily!
  ];

  return (
    <div className="bg-white text-center py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
        Connect with Us on Social Media!
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {platforms.map((platform, index) => (
          <div
            key={index}
            className="bg-gray-100 p-8 rounded-xl shadow-md hover:shadow-lg transition flex flex-col items-center"
          >
            {platform.icon}
            <p className="text-lg text-gray-600 mb-1 font-medium">{platform.name}</p>
            <p className={`text-3xl font-extrabold ${platform.textColor}`}>{platform.count}</p>
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
