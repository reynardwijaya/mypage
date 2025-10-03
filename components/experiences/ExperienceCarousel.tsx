"use client"

import { useState } from "react"
import { experiences } from "@/lib/experienceData"
import ExperienceCard from "./ExperienceCard"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Experiences() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const visibleCards = 3

  const nextSlide = () => {
    if (currentIndex < experiences.length - visibleCards) {
      setCurrentIndex((prev) => prev + 1)
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
    }
  }

  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Title dengan animasi */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-10"
        >
          Experiences
        </motion.h2>

        <div className="relative flex items-center">
          {/* Tombol Kiri */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Wrapper */}
          <div className="overflow-hidden w-full">
            <motion.div
              className="flex transition-transform gap-6"
              animate={{ x: `-${currentIndex * (100 / visibleCards)}%` }}
              transition={{ type: "spring", stiffness: 120, damping: 25 }}
            >
              {experiences.map((exp) => (
                <div key={exp.id} className="basis-1/3 flex-shrink-0">
                  <ExperienceCard {...exp} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Tombol Kanan */}
          <button
            onClick={nextSlide}
            disabled={currentIndex >= experiences.length - visibleCards}
            className="absolute right-0 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  )
}
