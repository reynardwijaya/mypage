"use client"

import { useState } from "react"
import { experiences } from "@/lib/experienceData"
import ExperienceCard from "./ExperienceCard"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { experienceCardAnimation } from "./animationCard"
import ExperienceTitleAnimate from "./ExperienceTitleAnimate"

export default function Experiences() {
  // State untuk halaman carousel saat ini
  const [currentPage, setCurrentPage] = useState(0)

  // Jumlah card per halaman untuk desktop dan mobile
  const cardsPerPageDesktop = 4
  const cardsPerPageMobile = 1

  // Cek viewport untuk menentukan jumlah card per halaman
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768
  const cardsPerPage = isMobile ? cardsPerPageMobile : cardsPerPageDesktop

  // Total halaman berdasarkan jumlah data dan cardsPerPage
  const totalPages = Math.ceil(experiences.length / cardsPerPage)

  // Fungsi navigasi ke halaman berikutnya
  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1)
    }
  }

  // Fungsi navigasi ke halaman sebelumnya
  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1)
    }
  }

  // Slice data sesuai halaman saat ini
  const currentCards = experiences.slice(
    currentPage * cardsPerPage,
    currentPage * cardsPerPage + cardsPerPage
  )

  return (
    <section id="experiences" className="w-full py-12">
      <div className="mx-auto max-w-7xl px-6">
        {/* Title dengan animasi */}
        <ExperienceTitleAnimate />

        {/* ========================= */}
        {/* Desktop View: grid card + tombol absolute */}
        {/* ========================= */}
        <div className="relative w-full hidden md:block">
          {/* Grid card */}
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

          {/* Tombol navigasi kiri */}
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className="absolute top-1/2 -translate-y-1/2 left-[-24px] 
                       z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Tombol navigasi kanan */}
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
            className="absolute top-1/2 -translate-y-1/2 right-[-24px] 
                       z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* ========================= */}
        {/* Mobile View: 1 card per halaman + tombol di kiri-kanan */}
        {/* ========================= */}
        <div className="relative md:hidden flex justify-center items-center mt-6 px-8">
          {/* Card */}
          <motion.div
            key={currentPage}
            variants={experienceCardAnimation}
            className="max-w-xs w-full"
          >
            <ExperienceCard {...currentCards[0]} />
          </motion.div>

          {/* Tombol kiri */}
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2
                       z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          {/* Tombol kanan */}
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
            className="absolute right-0 top-1/2 -translate-y-1/2
                       z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </section>
  )
}
