import React from 'react';
import { Navbar } from '../components/Navbar';

const chessAppData = {
  title: "AI Chess Master 2025",
  tagline: "AdMob, Multilingual, 2 Player, Puzzles, 30 Music, 200 Tiles, Save/Load, Share",
  author: "suriken_apps",
  price: "$19",
  license: "Regular License",
  licenseNote: "Use by one client in a single end product which end users are not charged for.",
  lastUpdate: "15 May 2025",
  sales: 6,
  previewImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZxx63qKZN1chY88OMkQF1_cW-tVTGJpQFXg&s",
  features: [
    "High-quality, feature-rich Chess with good documentation.",
    "Affordable introductory pricing of $19 for early buyers.",
    "6 Languages supported, free new language adding supported for limited time.",
    "Get lifetime access with all future updates included—no extra cost.",
    "The price may increase when online PVP mode (in 2 weeks)."
  ],
  languages: ["中文", "English", "हिन्दी", "Español", "Português", "Русский"],
  supportEmail: "suriken.apps.codecanyon@gmail.com"
};

export const SourceDetailPage = () => {
  const {
    title,
    tagline,
    author,
    price,
    license,
    licenseNote,
    lastUpdate,
    sales,
    previewImage,
    features,
    languages,
    supportEmail
  } = chessAppData;

  return (
    <>
        <Navbar />
        <div className="max-w-6xl mx-auto mt-16 bg-gray-100 p-4 sm:p-6 text-gray-800">
        <div className="bg-white rounded-md shadow p-6 space-y-6">
            {/* Header Section */}
            <div>
            <h1 className="text-2xl sm:text-3xl font-bold">{title}</h1>
            <p className="text-sm sm:text-base text-gray-600">{tagline}</p>
            <p className="text-sm text-gray-500 flex gap-10 mt-2">
                <span>By <span className="text-blue-600 font-medium">{author}</span></span> • {sales} sales •{" "}
                <span className="text-green-600 font-medium">Recently Updated</span>
            </p>
            </div>

            
            <div className="w-full">
            <img
                src={previewImage}
                alt="Preview"
                className="w-full max-w-3xl mx-auto rounded-md shadow"
            />
            </div>

            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
           
            <div className="lg:col-span-2 space-y-4">
                <h2 className="text-xl font-semibold">AI Chess Master 2025</h2>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                {features.map((feature, idx) => (
                    <li key={idx} className="text-blue-700">{feature}</li>
                ))}
                </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-4 rounded-md shadow-sm">
                <h3 className="text-base font-medium mb-1">{license}</h3>
                <p className="text-sm text-gray-600 mb-3">{licenseNote}</p>
                <div className="text-3xl font-bold text-blue-800 mb-4">{price}</div>
                <button className="w-full bg-blue-700 text-white py-2 rounded hover:bg-border-color transition">
                Buy Now
                </button>
                <p className="text-xs text-gray-500 mt-2">Last Update: {lastUpdate}</p>
            </div>
            </div>

           
            <div className="pt-6">
            <h4 className="text-lg font-semibold mb-2">Supported Languages</h4>
            <div className="flex flex-wrap gap-2 text-sm">
                {languages.map((lang, idx) => (
                <span key={idx} className="bg-gray-200 px-3 py-1 rounded-full">{lang}</span>
                ))}
            </div>
            </div>

            
            <div className="text-sm text-gray-600 pt-4 border-t">
            <p>
                For support:{" "}
                <a href={`mailto:${supportEmail}`} className="text-blue-600 underline">
                {supportEmail}
                </a>
            </p>
            </div>
        </div>
        </div>
    </>
  );
};
