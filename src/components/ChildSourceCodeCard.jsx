import React from "react";
import { useNavigate } from "react-router-dom";

const ChildSourceCodeCard = ({ sourseCode }) => {
    if (!sourseCode) return null;
    const navigate = useNavigate();

  return (
    <div className="w-full max-w-xs bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img
          src={sourseCode.image}
          alt={sourseCode.title}
          className="w-full h-40 object-cover"
        />
        {sourseCode.isDiscounted && (
          <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
            Offer
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-800 truncate">
          {sourseCode.title}
        </h3>
        <p className="text-xs text-gray-500 mb-2">
          by <span className="text-blue-600">{sourseCode.author}</span> in {sourseCode.platform}
        </p>
        <div className="flex items-center gap-2 text-sm mb-1">
          <span className="line-through text-gray-400">${sourseCode.originalPrice}</span>
          <span className="text-green-600 font-semibold">${sourseCode.discountedPrice}</span>
        </div>

        {sourseCode.ratings > 0 && (
          <div className="flex items-center text-sm text-yellow-500 mb-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <span key={index}>
                {index < sourseCode.ratings ? "⭐" : "☆"}
              </span>
            ))}
            <span className="ml-2 text-gray-500 text-xs">({sourseCode.reviews})</span>
          </div>
        )}

        <p className="text-xs text-gray-600">{sourseCode.sales} Sales</p>
        <div className="flex justify-end mt-3">
          <button className="text-sm text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded transition duration-150" onClick={()=>navigate('/source-code/'+sourseCode.id)}>
            View More Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChildSourceCodeCard;
