"use client"

import { useAnimation, useInView, motion } from "framer-motion"
import { useEffect, useRef, ReactNode } from "react"
import { cn } from "@/lib/utils"
import ShinyText from "@/components/ui/ShinyText"

interface AnimateBodyProps {
  text: string
  className?: string
  delay?: number
}

export default function AnimateBody({
  text,
  className,
  delay = 0,
}: AnimateBodyProps) {
  const ref = useRef(null)
  const inView = useInView(ref)
  const ctrls = useAnimation()

  const bodyAnimation = {
    hidden: { opacity: 0, y: "1em" },
    visible: {
      opacity: 1,
      y: "0em",
      transition: {
        duration: 2,
        delay,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  }

  useEffect(() => {
    if (inView) {
      ctrls.start("visible")
    }
  }, [ctrls, inView])

  return (
    <motion.p
      ref={ref}
      className={cn("text-base leading-relaxed", className)}
      initial="hidden"
      animate={ctrls}
      variants={bodyAnimation}
    >
      <ShinyText text={text} />
    </motion.p>
  )
}
