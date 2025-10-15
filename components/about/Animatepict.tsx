"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

interface AnimatePictProps {
  src: string
  alt?: string
  className?: string
  delay?: number
}

export default function AnimatePict({
  src,
  alt = "image",
  className,
  delay = 0,
}: AnimatePictProps) {
  const ref = useRef(null)
  const ctrls = useAnimation()
  const inView = useInView(ref)

  useEffect(() => {
    if (inView) {
      ctrls.start("visible")
    }
  }, [ctrls, inView])

  const AnimationImage = {
    hidden: {
      opacity: 0,
      y: "2em", 
    },
    visible: {
      opacity: 1,
      y: "0em",
      transition: {
        duration: 1.2,
        delay: delay,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  }

  return (
    <motion.img
      ref={ref}
      src={src}
      alt={alt}
      className={className}
      initial="hidden"
      animate={ctrls}
      variants={AnimationImage}
    />
  )
}
