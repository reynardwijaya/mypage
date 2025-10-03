"use client"

import { createContext, useEffect, useState } from "react"
import type LocomotiveScrollType from "locomotive-scroll"

export const SmoothScrollContext = createContext({
  scroll: null as LocomotiveScrollType | null,
})

interface SmoothScrollProviderProps {
  children: React.ReactNode
  options?: any
}

export const SmoothScrollProvider = ({
  children,
  options,
}: SmoothScrollProviderProps) => {
  const [scroll, setScroll] = useState<LocomotiveScrollType | null>(null)

  useEffect(() => {
    if (!scroll) {
      ;(async () => {
        try {
          const LocomotiveScroll = (await import("locomotive-scroll")).default

          setScroll(
            new LocomotiveScroll({
              el: document.querySelector("[data-scroll-container]"),
              ...options,
            }) as LocomotiveScrollType // pastikan tipe sesuai
          )
        } catch (error) {
          throw Error(`[SmoothScrollProvider]: ${error}`)
        }
      })()
    }

    return () => {
      scroll?.destroy()
    }
  }, [options, scroll])

  return (
    <SmoothScrollContext.Provider
      value={{
        scroll,
      }}
    >
      {children}
    </SmoothScrollContext.Provider>
  )
}
