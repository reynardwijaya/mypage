"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface TypingTextProps {
  text: string
  delay?: number
  className?: string
}

export default function TypingText({
  text,
  delay = 0,
  className = "",
}: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const typingSpeed = isDeleting ? 70 : 130 // ⏳ Lebih lambat pas ngetik
    const pauseAfterTyping = 1800 // jeda setelah selesai ngetik
    const pauseAfterDeleting = 1000 // jeda setelah hapus semua

    let timeout: NodeJS.Timeout

    if (!isDeleting && currentIndex < text.length) {
      // Ketik huruf per huruf
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, typingSpeed)
    } else if (!isDeleting && currentIndex === text.length) {
      // Setelah selesai ngetik → jeda
      timeout = setTimeout(() => setIsDeleting(true), pauseAfterTyping)
    } else if (isDeleting && currentIndex > 0) {
      // Hapus huruf
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1))
        setCurrentIndex((prev) => prev - 1)
      }, typingSpeed)
    } else if (isDeleting && currentIndex === 0) {
      // Setelah terhapus semua → tunggu lalu mulai lagi
      timeout = setTimeout(() => setIsDeleting(false), pauseAfterDeleting)
    }

    return () => clearTimeout(timeout)
  }, [currentIndex, isDeleting, text])

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.5 }}
      className={className}
    >
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="ml-1"
      >
        |
      </motion.span>
    </motion.span>
  )
}
