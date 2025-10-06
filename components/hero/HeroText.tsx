import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import TypingText from "./TypingText"
import RotatingText from "./RotatingText"
import { Github, Linkedin, Check } from "lucide-react"
import ShinyText from "@/components/ui/ShinyText"

export default function HeroText() {
  const rotatingTexts = [
    "Software Developer",
    "Self-growth Enthusiast",
    "Problem Solver",
    "Tech Enthusiast",
  ]

  return (
      <div className="flex flex-col md:flex-row w-full max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-12 pt-8 pb-20 sm:pb-32 gap-10">
        
       <motion.div
  drag
  dragElastic={0.2}
  dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
  whileHover={{ scale: 1.05, rotate: 2 }}
  whileTap={{ scale: 0.95, rotate: -2 }}
  transition={{ type: "spring", stiffness: 300, damping: 20 }}
  className="relative overflow-hidden rounded-2xl border border-white/20 
             bg-white/10 dark:bg-zinc-900/30 
             backdrop-blur-lg shadow-xl cursor-grab active:cursor-grabbing
             w-[300px] h-[400px] 
             max-sm:w-[200px] max-sm:h-[260px]
             -mt-5 sm:mt-0"   // 👈 naik di mobile
>

  <Image
    src={"/images/rey.png"}
    width={300}
    height={400}
    priority
    alt="Reynard Wijaya"
    className="h-full w-full rounded-xl object-cover"
  />

  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 via-transparent to-black/20 pointer-events-none" />
</motion.div>

      {/* Right side - Text (desktop: kanan) */}
      <div className="flex flex-col flex-1 px-2 sm:px-4 lg:px-12 gap-6 md:gap-8 
                      text-center md:text-left order-1 md:order-2">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="space-y-6"
        >
          {/* Hi There */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-2xl font-medium text-foreground/80 lg:text-3xl"
          >
            <ShinyText text="Hi There 👋" speed={2} />
          </motion.p>

          {/* Name with typing effect */}
          <div className="text-4xl font-bold text-foreground lg:text-6xl md:whitespace-nowrap">
            <TypingText text="I'm Reynard Wijaya" delay={1.3} />
          </div>

          {/* Alternative name */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.8 }}
            className="text-xl text-foreground/70 lg:text-2xl"
          >
            <ShinyText text="or... you can call me " speed={2} />{" "}
            <ShinyText
              text="Rey"
              speed={2}
              className="font-bold text-red-500"
            />
          </motion.p>

          {/* Passion card + Social Icons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 3, duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center md:justify-start 
                       gap-6 mt-6"
          >
            {/* Passion card */}
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              className="rounded-xl border border-gray-700 bg-[#1a1a1a] px-6 py-3 min-w-[260px] md:min-w-[280px]"
            >
              <div className="flex items-center gap-2 text-foreground/80">
  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white border border-gray-400">
    <Check className="h-3 w-3 text-gray-700 stroke-[5]" />
  </div>
  <span className="text-sm font-medium">
    <ShinyText text="A passionate" speed={2} />
  </span>
</div>


              <div className="mt-1 text-lg font-semibold text-foreground">
                <RotatingText texts={rotatingTexts} />
              </div>
            </motion.div>

            {/* Social + CV */}
            <div className="flex items-center gap-4 mt-0 md:mt-0">
              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/reynard-wijaya-377713294/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-12 w-12 items-center justify-center rounded-xl 
                           border border-gray-700 bg-[#1a1a1a] hover:bg-[#222] transition-colors"
              >
                <Linkedin className="h-6 w-6 text-foreground" />
              </motion.a>

              {/* GitHub */}
              <motion.a
                href="https://github.com/reynardwijaya"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-12 w-12 items-center justify-center rounded-xl 
                           border border-gray-700 bg-[#1a1a1a] hover:bg-[#222] transition-colors"
              >
                <Github className="h-6 w-6 text-foreground" />
              </motion.a>

              {/* Download CV */}
              <motion.a
                href="Reynard_Wistara_Huga_Wijaya_CV.pdf"
                download="Reynard_Wijaya_CV.pdf"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="font-semibold bg-[#1a1a1a] px-6 py-3 rounded-xl border border-gray-700 
                           hover:bg-[#222] transition-colors"
              >
                <ShinyText text="Download CV" disabled={false} speed={3} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
