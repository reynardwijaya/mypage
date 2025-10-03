"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimateTitleProps {
  title: string
  className?: string
  wordSpace: string
  charSpace: string
  delay?: number
}

export default function AnimateTitle({
  title,
  className,
  wordSpace,
  charSpace,
  delay = 0,
}: AnimateTitleProps) {
  const ref = useRef(null)
  const inView = useInView(ref)
  const ctrls = useAnimation()

  useEffect(() => {
    if (inView) {
      ctrls.start("visible")
    }
  }, [ctrls, inView])

  const wordAnimation = {
    hidden: {},
    visible: {},
  }

  const charAnimation = {
    hidden: {
      opacity: 0,
      y: `1em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  }

  return (
    <h2
      ref={ref}
      aria-label={title}
      role="heading"
      className={className}
    >
      {title.split(" ").map((word, wi) => (
        <motion.span
          key={wi}
          aria-hidden="true"
          initial="hidden"
          animate={ctrls}
          variants={wordAnimation}
          transition={{
            delayChildren: delay + wi * 0.25,
            staggerChildren: 0.05,
          }}
          className={cn("inline-block whitespace-nowrap", wordSpace)}
        >
          {word.split("").map((char, ci) => (
            <motion.span
              aria-hidden="true"
              variants={charAnimation}
              key={ci}
              className={cn("inline-block", charSpace)}
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </h2>
  )
}
