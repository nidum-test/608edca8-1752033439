'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ImageCardProps {
  src: string;
  alt: string;
}

export default function ImageCard({ src, alt }: ImageCardProps) {
  return (
    <div className="relative h-full w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="h-full w-full"
      >
        <div className="relative h-full w-full">
          <Image
            src={src}
            alt={alt}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
      </motion.div>
    </div>
  );
}