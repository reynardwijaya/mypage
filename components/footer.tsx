export default function Footer() {
    return (
      <footer className="w-full bg-zinc-900 dark:bg-zinc-200 py-4 text-center">
        <p className="text-sm text-zinc-400 dark:text-zinc-700">
          © {new Date().getFullYear()} Reynard Wijaya's Portofolio — All rights reserved.
        </p>
      </footer>
    )
  }
  