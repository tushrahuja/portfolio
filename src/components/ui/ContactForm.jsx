"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div id="contact" className="flex flex-col items-center justify-center py-16">
      <h2 className="text-5xl md:text-6xl font-bold text-blue-900 dark:text-blue-100 mb-8">
        &lt; Contact Me /&gt;
      </h2>
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="mb-4">
          <label className="block text-blue-900 dark:text-blue-100 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-900 dark:text-blue-100 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-blue-900 dark:text-blue-100 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-900 dark:text-blue-100 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-blue-900 dark:text-blue-100 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-900 dark:text-blue-100 leading-tight focus:outline-none focus:shadow-outline"
            rows="5"
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
