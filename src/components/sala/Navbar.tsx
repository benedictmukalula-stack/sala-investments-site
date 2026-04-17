"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
      <div className="font-bold">Sala Investments</div>

      <nav className="hidden md:flex gap-6">
        <Link href="#">Home</Link>
        <Link href="#">About</Link>
        <Link href="#">Services</Link>
        <Link href="#">Contact</Link>
      </nav>

      <button onClick={() => setOpen(!open)} className="md:hidden">
        {open ? <X /> : <Menu />}
      </button>

      {open && (
        <div className="absolute top-16 left-0 w-full bg-black flex flex-col items-center gap-4 p-4">
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Services</Link>
          <Link href="#">Contact</Link>
        </div>
      )}
    </header>
  );
}
