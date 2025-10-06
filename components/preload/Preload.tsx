import { cn } from "@/lib/utils"
import { useRef } from "react"
import useIsomorphicLayoutEffect from "@/hooks/UseIsomorphicLayoutEffect"
import gsap from "gsap"
import Aurora from "@/components/ui/Aurora"
import Image from "next/image"

interface PreloadProps {
  endedLoading: boolean
}

export default function Preload({ endedLoading }: PreloadProps) {
  const counterRef = useRef<HTMLDivElement>(null)
  const barRef = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    const counter = counterRef.current
    const bar = barRef.current

    if (counter && bar) {
      gsap.to(counter, {
        innerHTML: 100,
        duration: 3,
        ease: "power1.out",
        onUpdate: () => {
          const value = Math.floor(parseInt(counter.innerHTML))
          counter.innerHTML = `${value}%`

          gsap.to(bar, {
            width: `${value}%`,
            ease: "power1.out",
            duration: 0.2,
          })
        },
      })
    }
  }, [endedLoading])

  return (
    <div
  className={cn(
    "relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden opacity-100 transition-all duration-700 ease-in-out px-4 pt-8 sm:pt-0",
    endedLoading && "opacity-0"
  )}
>

      {/* Aurora background */}
      <Aurora
  colorStops={["#00b4ff", "#00ffd5", "#001122"]}
  amplitude={1.2}
  blend={0.45}
  className="absolute top-0 left-0 w-full h-full"
/>


      {/* Counter angka */}
      <div
        ref={counterRef}
        className="relative z-10 mb-6 text-6xl sm:text-8xl font-bold text-white drop-shadow-lg"
      >
        0%
      </div>

      {/* Progress bar container */}
      <div className="relative z-10 w-full max-w-[500px] h-4 bg-gray-600 rounded-full overflow-hidden mb-6">
        <div
          ref={barRef}
          className="h-full bg-white rounded-full"
          style={{ width: "0%" }}
        ></div>
      </div>

      {/* Avatar */}
      <div className="relative z-10">
        <Image
          src="/images/avatar.png"
          alt="Avatar"
          width={200} // diperbesar
          height={200}
        />
      </div>
    </div>
  )
}
