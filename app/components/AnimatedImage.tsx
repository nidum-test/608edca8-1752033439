'use client'

import { motion } from 'framer-motion'
import NextImage from 'next/image'

interface AnimatedImageProps {
  src: string
  alt: string
  className?: string
}

export default function AnimatedImage({ src, alt, className }: AnimatedImageProps) {
  return (
    <motion.div
      className={`relative h-full w-full ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <NextImage
        src={src}
        alt={alt}
        fill
        style={{ objectFit: 'cover' }}
        className="transition-transform duration-300 hover:scale-105"
      />
    </motion.div>
  )
}