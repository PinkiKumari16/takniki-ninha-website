import React from "react";
// import "../styles/app.css"; // ensure this imports your CSS keyframes

export const PeopleReviews = ({ reviewsToShow }) => {
  return (
    <>
      {reviewsToShow.map((review, index) => (
        <div
          key={index}
          className="review-slide bg-[#1f2937] p-6 rounded-lg shadow-md max-w-sm min-w-[300px] rounded-bl-[50%] rounded-tr-[50%] text-white"
        >
          {/* ✅ Optional Label badge */}
          {review.label && (
            <div className="absolute top-3 right-4 transform -skew-y-3">
              <div
                className={`${
                  review.label === "Our Best Blog"
                    ? "bg-blue-500"
                    : review.label === "Our Best Course"
                    ? "bg-pink-500"
                    : "bg-green-400"
                } text-black text-xs font-semibold rounded-r-full px-4 py-1 shadow-sm skew-y-3`}
              >
                {review.label}
              </div>
            </div>
          )}

          <div className="flex items-center text-yellow-400 text-xl">
            {review.rating}
          </div>
          <p className="text-gray-300 mt-4 text-sm">{review.reviewText}</p>
          <div className="mt-6 text-center">
            <p className="text-blue-400 font-bold text-lg">
              {review.reviewerName}
            </p>
            <p className="text-gray-400 text-sm">{review.reviewerTitle}</p>
          </div>
        </div>
      ))}
    </>
  );
};
