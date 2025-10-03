"use client"

import { motion } from "framer-motion"
import HeroText from "./HeroText"
import ParallaxText from "./ParallaxText"
import HeroGraphic from "./HeroGraphic"
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

        {/* Kanan: Graphic */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="flex-1 w-full flex justify-center md:justify-center 
             max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg 
             md:-translate-x-12 lg:-translate-x-16"
        >
          <HeroGraphic />
        </motion.div>
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
