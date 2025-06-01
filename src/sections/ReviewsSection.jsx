import React, { useEffect, useState } from "react";
import { PeopleReviews } from "../components/PeopleReviews";

// ✅ Full review data
const reviews = [
  {
    rating: "★★★★★",
    reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    reviewerName: "Aakash",
    reviewerTitle: "Sr. Creative Head",
    label: "Our Best Blog",
  },
  {
    rating: "★★★★☆",
    reviewText: "Curabitur tempor posuere massa in varius.",
    reviewerName: "Rakesh Kumar",
    reviewerTitle: "Marketing Lead",
    label: "Our Best Course",
  },
  {
    rating: "★★★★★",
    reviewText: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    reviewerName: "Anita Devi",
    reviewerTitle: "Software Engineer",
    label: "Our Best Software",
  },
  {
    rating: "★★★★★",
    reviewText: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    reviewerName: "Abhi",
    reviewerTitle: "Software Engineer",
    label: "Our Best Software",
  },
  {
    rating: "★★★★★",
    reviewText:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco im veniam, quis nostrud exercitation ullamco im veniam, quis nostrud exercitation ullamco im veniam, quis nostrud exercitation ullamco im veniam, quis nostrud exercitation ullamco.",
    reviewerName: "Aansh",
    reviewerTitle: "Software Engineer",
    label: "Our Best Software",
  },
];

export const ReviewsSection = () => {
  const [startIndex, setStartIndex] = useState(0);

  const totalToShow = 4;

  useEffect(() => {
    if (reviews.length > totalToShow) {
      const timer = setInterval(() => {
        setStartIndex((prev) => (prev + 1) % reviews.length);
      }, 5000);

      return () => clearInterval(timer);
    }
  }, []);

  const reviewsToShow =
    reviews.length > totalToShow
      ? Array.from({ length: totalToShow }, (_, i) => {
          const index = (startIndex + i) % reviews.length;
          return reviews[index];
        })
      : reviews;

  return (
    <section
      className="relative mt-16 w-full flex flex-col items-center justify-center text-[#1f2937] overflow-hidden py-10 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://www.shutterstock.com/image-photo/minimalistic-abstract-gentle-light-blue-600nw-2271654373.jpg')",
      }}
    >
      <h1 className="text-3xl text-primary font-bold mb-10">
        All People Reviews
      </h1>

      <div className="flex items-center gap-2 justify-center w-full px-4">
        <PeopleReviews
          reviewsToShow={reviewsToShow}
          totalreviews={reviews.length}
        />
      </div>
    </section>
  );
};
