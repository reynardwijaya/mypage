"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import {
  experienceCardAnimation,
  experienceCardImageAnimation,
  experienceCardTitleAnimation,
  experienceCardDescriptionAnimation,
  experienceCardCompanyAnimation,
  experienceCardPeriodAnimation,
} from "./animationCard"

interface ExperienceCardProps {
  title: string
  period: string
  company: string
  description: string
  fullDescription: string
  image: string
}

export default function ExperienceCard({
  title,
  period,
  company,
  description,
  fullDescription,
  image,
}: ExperienceCardProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const ctrls = useAnimation()
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    if (isInView) {
      ctrls.start("visible")
    }
  }, [ctrls, isInView])

  return (
    <motion.div
  ref={ref}
  animate={ctrls}
  initial="hidden"
  variants={experienceCardAnimation}
  className="relative z-10 w-[280px] min-h-[400px] rounded-2xl border border-gray-700 bg-zinc-200 dark:bg-zinc-800 px-5 py-5 pb-20 shadow-lg flex flex-col"
>
  {/* Gambar Background */}
  <motion.div
    animate={ctrls}
    initial="hidden"
    variants={experienceCardImageAnimation}
    className="absolute bottom-3 right-3 w-[80%] opacity-20 pointer-events-none"
  >
    <Image
      width={300}
      height={200}
      src={image}
      alt={title}
      className="w-full object-contain rounded-lg"
    />
  </motion.div>

  {/* Konten */}
  <div className="relative flex flex-col flex-1">
    {/* Header */}
    <div className="flex items-start justify-between gap-2">
      <motion.h3
        animate={ctrls}
        initial="hidden"
        variants={experienceCardTitleAnimation}
        className="text-base font-bold leading-snug text-white md:text-lg"
      >
        {title}
      </motion.h3>
      <motion.span
        animate={ctrls}
        initial="hidden"
        variants={experienceCardPeriodAnimation}
        className="text-xs font-medium text-white/50"
      >
        {period}
      </motion.span>
    </div>

    {/* Company */}
    <motion.div
      animate={ctrls}
      initial="hidden"
      variants={experienceCardCompanyAnimation}
      className="mt-3"
    >
      <div className="h-px w-full bg-white/20" />
      <p className="mt-2 text-sm font-semibold text-white/80">
        {company}
      </p>
    </motion.div>

    {/* Description + Button */}
    <motion.div
      animate={ctrls}
      initial="hidden"
      variants={experienceCardDescriptionAnimation}
      className="mt-3 flex flex-col"
    >
      <p
        className={`text-sm text-white/70 leading-relaxed transition-all duration-300 ${
          isExpanded ? "line-clamp-none" : "line-clamp-3"
        }`}
      >
        {isExpanded ? fullDescription : description}
      </p>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-2 self-start text-xs font-semibold text-white/60 hover:text-white/80 transition-colors duration-200"
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </motion.div>
  </div>
</motion.div>

    

  )
}
