import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAlertData } from "../redux/rootSlice";

export const ReviewForm = ({ setIsReviewFormShow }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    rating: "★★★★★",
    reviewText: "",
    reviewerName: "",
    reviewerTitle: "",
    label: "Our Best Blog",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.reviewText &&
      formData.reviewerName &&
      formData.reviewerTitle
    ) {
      //   onSubmit(formData);
      dispatch(
        setAlertData({
          type: "success",
          message: `Noted Your Review Successfully & Thanking You ${formData.reviewerName} `,
        })
      );
      setFormData({
        rating: "★★★★★",
        reviewText: "",
        reviewerName: "",
        reviewerTitle: "",
        label: "Our Best Blog",
      });
      setIsReviewFormShow(false);
    } else {
      dispatch(
        setAlertData({
          type: "error",
          message: "Please fill out all fields.",
        })
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-xl space-y-4 fixed right-30 bottom-5 z-100"
    >
      <h2 className="text-xl text-center font-bold text-gray-700">
        Submit a Review
      </h2>

      <div className="flex flex-col">
        <label className="text-sm font-semibold mb-1">Rating</label>
        <select
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          className="border px-3 py-2 rounded-md"
        >
          <option value="★★★★★">★★★★★</option>
          <option value="★★★★☆">★★★★☆</option>
          <option value="★★★☆☆">★★★☆☆</option>
          <option value="★★☆☆☆">★★☆☆☆</option>
          <option value="★☆☆☆☆">★☆☆☆☆</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-semibold mb-1">Review Text</label>
        <textarea
          name="reviewText"
          value={formData.reviewText}
          onChange={handleChange}
          rows={3}
          className="border px-3 py-2 rounded-md resize-none"
          placeholder="Write your review..."
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col flex-1">
          <label className="text-sm font-semibold mb-1">Name</label>
          <input
            name="reviewerName"
            value={formData.reviewerName}
            onChange={handleChange}
            className="border px-3 py-2 rounded-md"
            placeholder="Reviewer name"
          />
        </div>
        <div className="flex flex-col flex-1">
          <label className="text-sm font-semibold mb-1">Title</label>
          <input
            name="reviewerTitle"
            value={formData.reviewerTitle}
            onChange={handleChange}
            className="border px-3 py-2 rounded-md"
            placeholder="e.g., Product Designer"
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-semibold mb-1">Label</label>
        <select
          name="label"
          value={formData.label}
          onChange={handleChange}
          className="border px-3 py-2 rounded-md"
        >
          <option value="Our Best Blog">Our Best Blog</option>
          <option value="Our Best Course">Our Best Course</option>
          <option value="Our Best Software">Our Best Software</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-md hover:bg-blue-700 transition-all"
      >
        Submit Review
      </button>
    </form>
  );
};
