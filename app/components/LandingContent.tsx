'use client';

import { motion } from 'framer-motion';
import AnimatedImage from './AnimatedImage';

export default function LandingContent() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
        >
          Welcome to Our Landing Page
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-600 mb-8"
        >
          Experience the future of web development with our innovative platform.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Get Started
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
      >
        <div className="relative h-64 rounded-lg overflow-hidden">
          <AnimatedImage
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="Coding on laptop"
          />
        </div>
        <div className="relative h-64 rounded-lg overflow-hidden">
          <AnimatedImage
            src="https://images.unsplash.com/photo-1551434678-e076c223a692"
            alt="Team collaboration"
          />
        </div>
        <div className="relative h-64 rounded-lg overflow-hidden">
          <AnimatedImage
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
            alt="Business analytics"
          />
        </div>
      </motion.div>

      <div className="mt-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Our Features
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <div className="relative h-80 rounded-xl overflow-hidden">
            <AnimatedImage
              src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3"
              alt="Innovation"
            />
          </div>
          <div className="relative h-80 rounded-xl overflow-hidden">
            <AnimatedImage
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
              alt="Technology"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}