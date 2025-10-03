"use client"

import { cn } from "@/lib/utils"
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef, ReactNode } from "react"

interface AnimateHeadingProps {
  title: string | ReactNode
  className?: string
  delay?: number
}

export default function AnimateHeading({
  title,
  className,
  delay = 0,
}: AnimateHeadingProps) {
  const ref = useRef(null)
  const ctrls = useAnimation()
  const inView = useInView(ref)

  useEffect(() => {
    if (inView) {
      ctrls.start("visible")
    }
  }, [ctrls, inView])

  const headingAnimation = {
    hidden: { opacity: 0, y: "1em" },
    visible: {
      opacity: 1,
      y: "0em",
      transition: {
        duration: 1.2,
        delay,
        ease: [0.2, 0.65, 0.3, 0.9], // sama seperti AnimateParagraph
      },
    },
  }

  return (
    <motion.h3
      ref={ref}
      className={cn("text-2xl font-bold", className)}
      initial="hidden"
      animate={ctrls}
      variants={headingAnimation}
    >
      {title}
    </motion.h3>
  )
}
