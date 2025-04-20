import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <motion.div 
      id="contact" 
      className="relative w-full pt-8 pb-20" {/* Reduced from py-32 to pt-8 pb-20 */}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[2rem] md:text-6xl font-bold text-blue-900 dark:text-blue-100 mb-4 text-left">
              &lt; Get in Touch /&gt;
            </h2>
            <p className="text-sm md:text-lg text-blue-700 dark:text-blue-300 mb-8 text-left">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <motion.div 
              className="flex items-center mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ x: 5 }}
            >
              <FaEnvelope className="text-blue-900 dark:text-blue-100 mr-3" />
              <span className="text-sm md:text-lg text-blue-700 dark:text-blue-300">tusharahuja.dev@gmail.com</span>
            </motion.div>
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ x: 5 }}
            >
              <FaMapMarkerAlt className="text-blue-900 dark:text-blue-100 mr-3" />
              <span className="text-sm md:text-lg text-blue-700 dark:text-blue-300">Amravati, Maharashtra, India</span>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
