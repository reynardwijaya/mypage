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

  // Pengaturan jumlah kartu per halaman
  const cardsPerPageDesktop = 4
  const cardsPerPageMobile = 1
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768
  const cardsPerPage = isMobile ? cardsPerPageMobile : cardsPerPageDesktop
  const totalPages = Math.ceil(experiences.length / cardsPerPage)

  // Navigasi antar halaman
  const nextPage = () => {
    if (currentPage < totalPages - 1) setCurrentPage((prev) => prev + 1)
  }
  const prevPage = () => {
    if (currentPage > 0) setCurrentPage((prev) => prev - 1)
  }

  // Data kartu untuk halaman saat ini
  const currentCards = experiences.slice(
    currentPage * cardsPerPage,
    currentPage * cardsPerPage + cardsPerPage
  )

  return (
    <section id="experiences" className="w-full py-12">
      <div className="mx-auto max-w-7xl px-6">
        <ExperienceTitleAnimate />

        {/* DESKTOP VIEW */}
        <div className="relative w-full hidden md:block">
          <motion.div
            key={currentPage}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            {currentCards.map((exp) => (
              <motion.div key={exp.id} variants={experienceCardAnimation}>
                <ExperienceCard {...exp} />
              </motion.div>
            ))}
          </motion.div>

          {/* Tombol kiri */}
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className="absolute top-1/2 -translate-y-1/2 left-[-64px]
                       z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 
                       disabled:opacity-30 transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Tombol kanan */}
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
            className="absolute top-1/2 -translate-y-1/2 right-[-64px]
                       z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 
                       disabled:opacity-30 transition-all"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* MOBILE VIEW */}
        <div className="relative md:hidden flex justify-center items-center mt-6">
          {/* Kartu utama */}
          <motion.div
            key={currentPage}
            variants={experienceCardAnimation}
            className="max-w-xs w-full flex justify-center"
          >
            <ExperienceCard {...currentCards[0]} />
          </motion.div>

          {/* Tombol kiri */}
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className="absolute top-1/2 -translate-y-1/2
                       left-[calc(50%-180px)]
                       z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 
                       disabled:opacity-30 backdrop-blur-sm transition-all"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          {/* Tombol kanan */}
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
            className="absolute top-1/2 -translate-y-1/2
                       right-[calc(50%-180px)]
                       z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 
                       disabled:opacity-30 backdrop-blur-sm transition-all"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </section>
  )
}
