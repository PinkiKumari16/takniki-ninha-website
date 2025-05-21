import React, { useEffect, useState } from "react";
import { PeopleReviews } from "../components/PeopleReviews";

// ✅ Full review data
const reviews = [
  {
    rating: "★★★★★",
    reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    reviewerName: "A",
    reviewerTitle: "Sr. Creative Head",
    label: "Our Best Blog",
  },
  {
    rating: "★★★★☆",
    reviewText: "Curabitur tempor posuere massa in varius.",
    reviewerName: "B",
    reviewerTitle: "Marketing Lead",
    label: "Our Best Course",
  },
  {
    rating: "★★★★★",
    reviewText: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    reviewerName: "C",
    reviewerTitle: "Software Engineer",
    label: "Our Best Software",
  },
  {
    rating: "★★★★☆",
    reviewText:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    reviewerName: "D",
    reviewerTitle: "Product Designer",
    label: "Our Best Software",
  },
  {
    rating: "★★★★★",
    reviewText: "Fusce dignissim pretium consectetur.",
    reviewerName: "E",
    reviewerTitle: "Data Scientist",
    label: "Our Best Course",
  },
  {
    rating: "★★★☆☆",
    reviewText: "Nulla facilisi. Integer lacinia sollicitudin massa.",
    reviewerName: "F",
    reviewerTitle: "UX Designer",
    label: "Our Best Blog",
  },
  {
    rating: "★★★★★",
    reviewText: "Pellentesque viverra nibh eu efficitur.",
    reviewerName: "G",
    reviewerTitle: "CTO",
    label: "Our Best Course",
  },
  {
    rating: "★★★★☆",
    reviewText: "Suspendisse potenti. Proin ut massa nec elit.",
    reviewerName: "H",
    reviewerTitle: "HR Manager",
    label: "Our Best Software",
  },
];

export const ReviewsSection = () => {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % reviews.length); // Move 5 ahead
    }, 5000); // Every 5s

    return () => clearInterval(timer);
  }, []);

  // ✅ Get 5 reviews and wrap around using modulo
  const reviewsToShow = Array.from({ length: 4 }, (_, i) => {
    return reviews[(startIndex + i) % reviews.length];
  });

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
        <PeopleReviews reviewsToShow={reviewsToShow} />
      </div>
    </section>
  );
};
