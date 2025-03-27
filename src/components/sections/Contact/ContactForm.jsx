"use client";
import React, { useState, useRef } from "react";
import { FaPaperPlane } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setSuccess(true);
      form.current.reset();
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      setError('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-4 md:p-8 rounded-lg shadow-lg w-full md:max-w-xl lg:max-w-2xl mx-auto">
      <form ref={form} onSubmit={handleSubmit}>
        <div className="mb-3 md:mb-6">
          <label htmlFor="user_name" className="block text-base md:text-lg font-medium text-blue-900 dark:text-blue-100 mb-2">
            Name
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            required
            className="w-full px-3 md:px-4 py-2 border border-blue-200 dark:border-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 text-blue-900 dark:text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="user_email" className="block text-lg font-medium text-blue-900 dark:text-blue-100 mb-2">
            Email
          </label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            required
            className="w-full px-4 py-2 border border-blue-200 dark:border-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 text-blue-900 dark:text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-lg font-medium text-blue-900 dark:text-blue-100 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows="4"
            className="resize-none w-full px-4 py-2 border border-blue-200 dark:border-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 text-blue-900 dark:text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        
        {error && (
          <div className="mb-4 p-3 rounded bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300">
            {error}
          </div>
        )}
        
        {success && (
          <div className="mb-4 p-3 rounded bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300">
            Message sent successfully!
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className={`flex items-center justify-center w-full px-4 py-2 bg-blue-900 dark:bg-blue-100 text-white dark:text-blue-900 font-semibold rounded-lg transition-colors ${
            loading 
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:bg-blue-700 dark:hover:bg-blue-300'
          }`}
        >
          {loading ? (
            <span className="animate-pulse">Sending...</span>
          ) : (
            <>
              <FaPaperPlane className="mr-2" />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
