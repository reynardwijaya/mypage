import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider"
import { ThemeProvider } from "@/components/providers/ThemeProvider"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Work_Sans } from "next/font/google"
import "./globals.css"

const font = Work_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    template: "Reynard Wijaya%s",
    default: "Reynard Wijaya",
  },
  description:
    "A seasoned frontend web developer with a passion for creating engaging and interactive websites.",
  metadataBase: new URL("https://www.linkedin.com/in/reynard-wijaya-377713294/"),
  openGraph: {
    title: {
      template: "Reynard Wijaya%s",
      default: "Reynard Wijaya",
    },
    description:
      "A seasoned frontend web developer with a passion for creating engaging and interactive websites.",
    url: "https://www.linkedin.com/in/reynard-wijaya-377713294/",
    siteName: "Reynard Wijaya",
    images: [
      {
        url: "/images/rey.jpeg",
        width: 1000,
        height: 1200,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: {
      template: "Reynard Wijaya%s",
      default: "Reynard Wijaya",
    },
    description:
      "A seasoned frontend web developer with a passion for creating engaging and interactive websites.",
    creator: "@reynarwijaya",
    images: [
      {
        url: "/images/rey.jpeg",
        width: 1000,
        height: 1200,
      },
    ],
  },
  category: "technology",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "relative min-h-screen antialiased transition-colors duration-500",
          "bg-white text-black dark:bg-neutral-900 dark:text-zinc-50",
          font.className
        )}
      >
        {/* Aurora di background */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          storageKey="theme-mode"
        >
          <SmoothScrollProvider
            options={{
              smooth: true,
              mobile: { smooth: true },
              tablet: { smooth: true },
            }}
          >
            {/* Konten halaman */}
            <main className="relative z-10">{children}</main>
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
