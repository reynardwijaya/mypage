"use client"

import { useState } from "react"
import { experiences } from "@/lib/experienceData"
import ExperienceCard from "./ExperienceCard"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { experienceCardAnimation } from "./animationCard"
import ExperienceTitleAnimate from "./ExperienceTitleAnimate"

export default function Experiences() {
  const [currentPage, setCurrentPage] = useState(0)
  const cardsPerPage = 4

  const totalPages = Math.ceil(experiences.length / cardsPerPage)

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1)
    }
  }

  const currentCards = experiences.slice(
    currentPage * cardsPerPage,
    currentPage * cardsPerPage + cardsPerPage
  )

  return (
    <section id="experiences" className="w-full py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Title pakai komponen animate */}
        <ExperienceTitleAnimate />

        {/* Carousel */}
        <div className="relative w-full">
          {/* Wrapper Card */}
          <motion.div
            key={currentPage}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {currentCards.map((exp) => (
              <motion.div key={exp.id} variants={experienceCardAnimation}>
                <ExperienceCard {...exp} />
              </motion.div>
            ))}
          </motion.div>

          {/* Tombol kiri (desktop, menempel ke card pertama) */}
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 
                       z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Tombol kanan (desktop, menempel ke card terakhir) */}
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
            className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2 
                       z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Tombol mobile (di bawah grid) */}
          <div className="flex md:hidden justify-center gap-6 mt-6">
            {/* Tombol kiri/kanan (desktop) */}
<button
  onClick={prevPage}
  disabled={currentPage === 0}
  className="hidden md:flex absolute top-1/2 -translate-y-1/2 -left-12
             z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30"
>
  <ChevronLeft className="w-6 h-6 text-white" />
</button>

<button
  onClick={nextPage}
  disabled={currentPage === totalPages - 1}
  className="hidden md:flex absolute top-1/2 -translate-y-1/2 -right-12
             z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30"
>
  <ChevronRight className="w-6 h-6 text-white" />
</button>

{/* Tombol kiri/kanan (mobile, di bawah card) */}
<div className="flex justify-center gap-4 mt-6 md:hidden">
  <button
    onClick={prevPage}
    disabled={currentPage === 0}
    className="p-3 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30"
  >
    <ChevronLeft className="w-6 h-6 text-white" />
  </button>

  <button
    onClick={nextPage}
    disabled={currentPage === totalPages - 1}
    className="p-3 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30"
  >
    <ChevronRight className="w-6 h-6 text-white" />
  </button>
</div>

          </div>
        </div>
      </div>
    </section>
  )
}
