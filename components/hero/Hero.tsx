"use client"

import { motion } from "framer-motion"
import HeroText from "./HeroText"
import ParallaxText from "./ParallaxText"
import Aurora from "../ui/Aurora"
import NavHome from "../navbar/NavHome"

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center overflow-hidden mb-20 md:mb-12"
      initial="initial"
      animate="animate"
    >
      {/* Aurora Background */}
      <Aurora />

      {/* Navbar transparan blur */}
      <NavHome />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 px-4 sm:px-6 lg:px-12 pt-16 sm:pt-20">
        
        {/* Kiri: Teks */}
        <div className="flex-1 w-full text-center md:text-left">
          <HeroText />
        </div>

        {/* Kanan: HeroGraphic dihapus */}
        {/* Tidak ada div / konten di sini */}
      </div>

      {/* Parallax Text */}
      <div className="absolute bottom-2 sm:bottom-4 w-full overflow-hidden z-10">
        <ParallaxText direction={500} baseVelocity={-1}>
          Computer Science Student
        </ParallaxText>
        <ParallaxText direction={-500} baseVelocity={1}>
          Software Developer
        </ParallaxText>
      </div>
    </motion.section>
  )
}
