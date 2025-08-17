"use client";
import React from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full fixed top-0 z-50 bg-gray-100 dark:bg-gray-900 border-b-2 border-amber-600 "
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="text-xl font-bold text-orange-400">
            <Link href="/">Subhonil Sardar</Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />

            <button
              onClick={() => setOpen(!open)}
              className="text-gray-700 dark:text-gray-300 cursor-pointer"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div
            className={`
    flex-col md:flex-row md:flex
    absolute md:static top-16 left-0 w-full md:w-auto
    bg-white dark:bg-gray-900 md:bg-transparent
    px-4 md:px-0 py-4 md:py-0 space-y-4 md:space-y-0 md:space-x-6
    transition-all duration-300
    ${open ? "flex" : "hidden md:flex"}
  `}
          >
            <Link
              href="/"
              className="text-orange-700 dark:text-orange-500 hover:underline"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-orange-700 dark:text-orange-500 hover:underline"
            >
              About
            </Link>
            <Link
              href="/skllis"
              className="text-orange-700 dark:text-orange-500 hover:underline"
            >
              Skill's
            </Link>
            <Link
              href="/projects"
              className="text-orange-700 dark:text-orange-500 hover:underline"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition"
            >
              Contact
            </Link>
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
