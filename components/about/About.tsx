"use client"

import AboutGlobeAnimate from "./AboutGlobeAnimate"
import AnimateBody from "./AnimateBody"
import AnimateHeading from "./AnimateHeading"
import AnimateParagraph from "./AnimateParagraph"
import AnimateTitle from "./AnimateTitle"
import Animatepict from "./Animatepict"
import AnimateSkill from "./AnimateSkill"
import ShinyText from "@/components/ui/ShinyText"

export default function About() {
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
          {/* Bagian paragraf */}
          <div className="lg:mg-16 mb-10 flex w-full flex-col gap-4 text-[18px] font-medium leading-relaxed tracking-wide md:mb-16 md:gap-6 md:text-lg md:leading-relaxed lg:max-w-[90%]">
            <AnimateParagraph
              paragraph="Fifth-semester Computer Science student with experience as a Teaching Assistant, Duta BINUSIAN 
Scholarship awardee, Top 3 peer mentor, and organizational leader."
              delay={1.5}
            />
            <AnimateParagraph
              paragraph="Strong background in programming, 
mentoring, and leadership with skills in project management, database systems, and web & app development. "
              delay={1.8}
            />
            <AnimateParagraph
              paragraph="Result-driven learner with a growth mindset, passionate about continuous learning and leading diverse teams."
              delay={2}
            />
            <AnimateParagraph
              paragraph="Particularly interested in software engineering and full-stack development, with a focus on delivering innovative and impactful digital solutions."
              delay={2.5}
            />
          </div>

          {/* Bagian kanan */}
          <div className="mb-24 flex w-full flex-col gap-6 leading-relaxed tracking-wide sm:mb-32 md:mb-40 lg:mb-16 lg:max-w-[90%]">
            {/* Tech Stack */}
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimateHeading
                title={<ShinyText text="Tech Stack" />}
                delay={0.5}
              />
              <div className="flex flex-wrap items-center gap-4 mt-2">
                <AnimateSkill src="/images/react.png" alt="React" className="w-10 h-10" delay={0.5} />
                <AnimateSkill src="/images/phyton.png" alt="phyton" className="w-10 h-10" delay={1.0} />
                <AnimateSkill src="/images/laravel.png" alt="Laravel" className="w-10 h-10" delay={1.5} />
                <AnimateSkill src="/images/html.png" alt="HTML" className="w-10 h-10" delay={2.0} />
                <AnimateSkill src="/images/css.png" alt="CSS" className="w-10 h-10" delay={2.5} />
                <AnimateSkill src="/images/tailwind.png" alt="Tailwind" className="w-10 h-6" delay={3.0} />
                <AnimateSkill src="/images/figma.png" alt="Figma" className="w-7 h-10" delay={3.5} />
                <AnimateSkill src="/images/sql.png" alt="SQL" className="w-20 h-15" delay={4.0} />
              </div>
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
