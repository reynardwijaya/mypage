"use client"

import { cn } from "@/lib/utils"
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef, ReactNode } from "react"
import ShinyText from "@/components/ui/ShinyText"

interface AnimateParagraphProps {
  paragraph: string | ReactNode
  className?: string
  delay?: number
}

export default function AnimateParagraph({
  paragraph,
  className,
  delay = 0,
}: AnimateParagraphProps) {
  const ref = useRef(null)
  const ctrls = useAnimation()
  const inView = useInView(ref)

  useEffect(() => {
    if (inView) {
      ctrls.start("visible")
    }
  }, [ctrls, inView])

  const animationParagraph = {
    hidden: { opacity: 0, y: "1em" },
    visible: {
      opacity: 1,
      y: "0em",
      transition: {
        duration: 1.2,
        delay,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  }

  return (
    <motion.p
      ref={ref}
      className={cn("text-base md:text-lg leading-relaxed", className)}
      initial="hidden"
      animate={ctrls}
      variants={animationParagraph}
    >
      {typeof paragraph === "string" ? (
        <ShinyText text={paragraph} />
      ) : (
        paragraph
      )}
    </motion.p>
  )
}
