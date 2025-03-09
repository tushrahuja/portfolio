"use client";
import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div id="contact" className="relative w-full py-32">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <h2 className="text-5xl md:text-6xl font-bold text-blue-900 dark:text-blue-100 mb-4">
              &lt; Get in Touch /&gt;
            </h2>
            <p className="text-lg text-blue-700 dark:text-blue-300 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out to me using the form or contact details below.
            </p>
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-blue-900 dark:text-blue-100 mr-3" />
              <span className="text-lg text-blue-700 dark:text-blue-300">tusharahuja.dev@gmail.com</span>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-blue-900 dark:text-blue-100 mr-3" />
              <span className="text-lg text-blue-700 dark:text-blue-300">Amravati, Maharashtra, India</span>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block text-lg font-medium text-blue-900 dark:text-blue-100 mb-2">Name</label>
                <input type="text" id="name" className="w-full px-4 py-2 border border-blue-200 dark:border-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 text-blue-900 dark:text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-lg font-medium text-blue-900 dark:text-blue-100 mb-2">Email</label>
                <input type="email" id="email" className="w-full px-4 py-2 border border-blue-200 dark:border-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 text-blue-900 dark:text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-lg font-medium text-blue-900 dark:text-blue-100 mb-2">Message</label>
                <textarea id="message" rows="4" className="w-full px-4 py-2 border border-blue-200 dark:border-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 text-blue-900 dark:text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              </div>
              <button type="submit" className="flex items-center justify-center w-full px-4 py-2 bg-blue-900 dark:bg-blue-100 text-white dark:text-blue-900 font-semibold rounded-lg hover:bg-blue-700 dark:hover:bg-blue-300 transition-colors">
                <FaPaperPlane className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
