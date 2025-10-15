"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

interface AnimateSkillProps {
  src: string
  alt: string
  className?: string
  delay?: number
}

export default function AnimateSkill({
  src,
  alt,
  className = "",
  delay = 0,
}: AnimateSkillProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className="relative flex flex-col items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Gambar logo */}
      <motion.div
        whileHover={{ scale: 1.15 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="flex items-center justify-center"
      >
        <Image
          src={src}
          alt={alt}
          width={60}
          height={60}
          className={`${className} transition-transform duration-300`}
        />
      </motion.div>

      {/* Teks alt muncul saat hover */}
      <motion.span
        initial={{ opacity: 0, y: 5 }}
        animate={hovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
        transition={{ duration: 0.3 }}
        className="absolute -bottom-6 text-sm font-medium text-gray-400"
      >
        {alt}
      </motion.span>
    </motion.div>
  )
}
