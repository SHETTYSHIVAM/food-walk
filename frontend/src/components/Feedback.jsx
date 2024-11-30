import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from 'react-toastify'

function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    whatCanbeImproved: "",
    rating: 5,
    comments: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message); // Success message
        setSubmitted(true);
        toast.success("Submitted Successfully")
        setFormData({ name: "", whatCanbeImproved: "", rating: 5, comments: "" });
      })
      .catch((error) => {
        console.error("Error submitting feedback:", error);
        toast.error(error.response.data.message);
        setSubmitted(false)
      });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-md">
       <ToastContainer />
      <h2 className="text-2xl font-bold mb-4">Food Feedback Form</h2>

      {submitted ? (
        <div className="text-green-500">
          <p>Thank you for your feedback!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Your Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="whatCanbeImproved" className="block text-gray-700">
              What could be improved:
            </label>
            <input
              type="text"
              id="whatCanbeImproved"
              name="whatCanbeImproved"
              value={formData.whatCanbeImproved}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your suggestions..."
            />
          </div>

          <div className="mb-4">
            <label htmlFor="rating" className="block text-gray-700">
              Rating:
            </label>
            <select
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="1">1 - Poor</option>
              <option value="2">2 - Fair</option>
              <option value="3">3 - Good</option>
              <option value="4">4 - Very Good</option>
              <option value="5">5 - Excellent</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="comments" className="block text-gray-700">
              Comments:
            </label>
            <textarea
              id="comments"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Share your feedback..."
              rows="4"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition-all"
          >
            Submit Feedback
          </button>
        </form>
      )}
    </div>
  );
}

export default FeedbackForm;
