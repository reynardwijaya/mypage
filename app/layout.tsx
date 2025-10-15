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
  
  metadataBase: new URL("https://reynardwjy-omega.vercel.app/"),

  openGraph: {
    title: "Reynard Wijaya | Software Developer",
    description:
      "A seasoned frontend web developer with a passion for creating engaging and interactive websites.",
    url: "https://reynardwjy-omega.vercel.app/",
    siteName: "Reynard Wijaya",
    images: [
      {
        url: "/images/rey.png", 
        width: 1200,
        height: 630,
        alt: "Reynard Wijaya Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Reynard Wijaya | Software Developer",
    description:
      "A seasoned software developer with a passion for creating engaging and interactive websites.",
    creator: "@reynardwijaya",
    images: ["/images/rey.png"],
  },

  category: "technology",

  icons: {
    icon: "/avatar.png",        
    shortcut: "/avatar.png",
    apple: "/avatar.png",      
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={cn(
          "relative min-h-screen antialiased transition-colors duration-500 bg-background text-foreground",
          font.className
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <SmoothScrollProvider
            options={{
              smooth: true,
              mobile: { smooth: true },
              tablet: { smooth: true },
            }}
          >
            <main className="relative z-10">{children}</main>
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
