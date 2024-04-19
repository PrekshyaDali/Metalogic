import React, { useState, useEffect } from "react";
import Button from "./Button";
import { ToastContainer, toast } from "react-toastify";

export default function ContactFormModal({ showModal, setShowModal }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // Clear form data
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setShowModal(false);
    toast.success("Message sent successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    // Close the modal
  };

  return (
    <div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg p-8 w-96">
            <div className="flex justify-end">
              {/* Close button */}
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-600 hover:text-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            {/* Contact form */}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-1">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Message:</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
                  required
                ></textarea>
              </div>
              <div className="flex justify-center w-full">
                <Button type="submit" name="Submit" />
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
