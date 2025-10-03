"use client" // directive Next.js biar komponen ini dijalankan di sisi client

import { OrbitControls } from "@react-three/drei" // kontrol kamera (drag/rotate)
import { Canvas, useFrame } from "@react-three/fiber" // Canvas = "kanvas" 3D, useFrame = animasi per frame
import { motion } from "framer-motion" // animasi fade-in wrapper
import { Suspense, useRef } from "react" // Suspense untuk loading state 3D, useRef untuk referensi objek

// === Objek Sphere (bola 3D) yang berupa kumpulan titik ===
function PixelatedSphere() {
  const sphereRef = useRef()

  // setiap frame, bola diputar pada sumbu Y dan Z
  useFrame(({ clock }: { clock: any }) => {
    if (sphereRef.current) {
      ;(sphereRef.current as any).rotation.y = clock.getElapsedTime() * 1.2
      ;(sphereRef.current as any).rotation.z = clock.getElapsedTime() * 0.7
    }
  })

  return (
    <points ref={sphereRef as any}>
      {/* icosahedronGeometry: bentuk bola dengan detail level 4 */}
      <icosahedronGeometry args={[1, 4]} />
      {/* pointsMaterial: material berupa titik (warna abu, ukuran 0.05) */}
      <pointsMaterial color="gray" size={0.05} />
    </points>
  )
}

// === Sekumpulan "burung" yang terbang mengitari bola ===
function Birds() {
  const groupRef = useRef()

  // update posisi setiap "burung" tiap frame agar seperti berputar/melingkar
  useFrame(({ clock }: { clock: any }) => {
    if (!groupRef.current) return
    const elapsedTime = clock.getElapsedTime()

    ;(groupRef.current as any).children.forEach(
      (
        bird: { position: { x: number; y: number; z: number } },
        index: number
      ) => {
        const angle = (elapsedTime + index * 0.2) % (2 * Math.PI)
        const radius = 2.3 + Math.random() * 0.0001 // radius orbit
        // rumus koordinat x, y, z biar seperti "terbang melingkar"
        bird.position.x =
          radius * Math.cos(angle) - Math.sin(elapsedTime * 0.5 + index)
        bird.position.y =
          radius * Math.sin(angle) * Math.sin(elapsedTime * 0.5 + index)
        bird.position.z = radius * Math.cos(elapsedTime * 0.5 + index)
      }
    )
  })

  // buat 48 "burung" berupa plane kecil abu-abu
  const birds = [...Array(48)].map((_, i) => {
    const size = i % 2 === 0 ? 0.03 : 0.05
    return (
      <mesh key={i} position={[1, 0, 0]}>
        <planeGeometry args={[size, size]} />
        <meshBasicMaterial color="gray" />
      </mesh>
    )
  })

  return <group ref={groupRef as any}>{birds}</group>
}

// === Komponen utama yang merender animasi 3D ===
export default function HeroGraphic() {
  return (
    // framer-motion: animasi fade-in container
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
    >
      <Canvas
        className="h-1/2 w-1/2 cursor-grab" // ukuran canvas & style
        camera={{ fov: 40, position: [0, 0, 5] }} // kamera agak menjauh
        gl={{ antialias: true }} // biar smooth (anti alias)
      >
        <Suspense fallback={null}>
          <PixelatedSphere /> {/* bola dari titik */}
          <Birds /> {/* burung yang terbang mengelilingi bola */}
        </Suspense>
        <OrbitControls enableZoom={false} /> {/* kontrol drag kamera, tanpa zoom */}
      </Canvas>
    </motion.div>
  )
}
