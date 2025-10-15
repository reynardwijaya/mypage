"use client"

import AboutGlobeAnimate from "./AboutGlobeAnimate"
import AnimateBody from "./AnimateBody"
import AnimateHeading from "./AnimateHeading"
import AnimateParagraph from "./AnimateParagraph"
import AnimateTitle from "./AnimateTitle"
import Animatepict from "./Animatepict"
import AnimateSkill from "./AnimateSkill"
import ShinyText from "@/components/ui/ShinyText"
import { motion } from "framer-motion"

export default function About() {
  // Variant untuk animasi container dan item
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.45, 
        delayChildren: 1.2, 
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  // Daftar skill dengan ukuran berbeda-beda
  const skills = [
    { src: "/images/react.png", alt: "React", className: "w-10 h-10" },
    { src: "/images/laravel.png", alt: "Laravel", className: "w-10 h-10" },
    { src: "/images/phyton.png", alt: "Python", className: "w-10 h-10" },
    { src: "/images/sql.png", alt: "SQL", className: "w-18 h-14" },
    { src: "/images/html.png", alt: "HTML", className: "w-10 h-10" },
    { src: "/images/css.png", alt: "CSS", className: "w-10 h-10" },
    { src: "/images/tailwind.png", alt: "Tailwind", className: "w-10 h-6" },
    { src: "/images/figma.png", alt: "Figma", className: "w-7 h-10" },
    { src: "/images/github.png", alt: "Github", className: "w-11 h-11" },
  ]

  return (
    <section
      id="about"
      className="relative mb-10 flex min-h-screen w-full items-center justify-center overflow-hidden"
    >
      <div className="mx-auto flex w-[90%] flex-col items-start justify-center lg:max-w-[1212.8px]">
        {/* Title */}
        <div className="mb-10 flex w-full items-center justify-between gap-x-2 md:mb-16">
          <AnimateTitle
            title="About me"
            className="text-left text-[40px] font-bold leading-[0.9em] tracking-tighter sm:text-[45px] md:text-[60px] lg:text-[80px]"
            wordSpace="mr-[14px]"
            charSpace="mr-[0.0001em]"
          />
          <AboutGlobeAnimate />
        </div>

        <div className="mx-auto flex w-full flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          {/* Paragraf kiri */}
          <div className="lg:mg-16 mb-10 flex w-full flex-col gap-4 text-[18px] font-medium leading-relaxed tracking-wide md:mb-16 md:gap-6 md:text-lg md:leading-relaxed lg:max-w-[90%]">
            <AnimateParagraph
              paragraph="Hi! I’m a fifth-semester Computer Science student with experience as a Teaching Assistant, Duta BINUSIAN Scholarship awardee, Top 3 peer mentor, and organizational leader."
              delay={1.5}
            />
            <AnimateParagraph
              paragraph="I have strong foundations in web and app development, combined with proven leadership and collaborative teamwork skills."
              delay={1.8}
            />
            <AnimateParagraph
              paragraph="Driven by curiosity and a growth mindset, I’m passionate about continuous learning and creating impactful, user-centered digital solutions."
              delay={2}
            />
            <AnimateParagraph
              paragraph="I’m eager to keep growing as a developer, collaborate with inspiring people, and build meaningful products that bring value to users."
              delay={2.5}
            />
          </div>

          {/* Bagian kanan */}
          <div className="mb-24 flex w-full flex-col gap-6 leading-relaxed tracking-wide sm:mb-32 md:mb-40 lg:mb-16 lg:max-w-[90%]">
            {/* Tech Stack */}
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimateHeading
                title={<ShinyText text="Tech Stack & Technologies" />}
                delay={0.5}
              />

              <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap items-center gap-4 mt-2"
              >
                {skills.map((skill, i) => (
                  <motion.div key={i} variants={item}>
                    <AnimateSkill
                      src={skill.src}
                      alt={skill.alt}
                      className={skill.className}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Avatar */}
            <div className="flex items-center justify-center">
              <Animatepict
                src="/images/avatar.png"
                alt="Avatar"
                className="w-60 h-60 object-cover"
                delay={0.8}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
