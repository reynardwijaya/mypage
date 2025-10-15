"use client"

import useIsomorphicLayoutEffect from "@/hooks/UseIsomorphicLayoutEffect"
import gsap from "gsap"
import { Code2 } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"

export default function NavHome() {
  const el = useRef<HTMLDivElement | null>(null)

  useIsomorphicLayoutEffect(() => {
    gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 })

      tl.fromTo(
        el.current,
        { y: -100, opacity: 0 }, // posisi awal: di atas dan transparan
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" } // posisi akhir
      )
    }, el)
  }, [])

  return (
    <div
      ref={el}
      className="pointer-events-auto fixed top-0 left-0 w-full z-50"
    >
      <div className="overflow-hidden">
        <div className="flex items-center gap-x-2 px-6 py-4
                        bg-black/30 backdrop-blur-md rounded-b-2xl
                        transition duration-300">
          <Link href="/" className="group inline-flex items-center gap-x-2">
            <Code2 className="h-6 w-6 text-white transition-transform duration-300 ease-in-out group-hover:rotate-[20deg]" />
            <p className="text-md font-semibold uppercase text-white">
              Reynard Wijaya | Portofolio
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}
