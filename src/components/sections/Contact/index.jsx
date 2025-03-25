import React from 'react';
import ContactForm from './ContactForm';
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="relative w-full py-32">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <h2 className="text-[2rem] md:text-6xl font-bold text-blue-900 dark:text-blue-100 mb-4 text-left">
              &lt; Get in Touch /&gt;
            </h2>
            <p className="text-sm md:text-lg text-blue-700 dark:text-blue-300 mb-8 text-left">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
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
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
