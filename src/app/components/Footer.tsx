"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full border-t border-gray-300 dark:border-orange-700 bg-white dark:bg-black text-gray-800 dark:text-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo / Title */}
        <div>
          <h2 className="text-2xl font-bold mb-2 text-orange-500">MyPortfolio</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Crafted with passion using Next.js, Tailwind, and Framer Motion.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-2 text-orange-500">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/skllis" className="hover:underline">Skill's</Link></li>
            <li><Link href="/projects" className="hover:underline">Projects</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-semibold text-lg mb-2 text-orange-500">Connect with me</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <Link href="https://github.com/yourname" target="_blank">
              <Button variant="ghost" size="icon" className="hover:text-orange-500 transition cursor-pointer">
                <FaGithub className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/yourname" target="_blank">
              <Button variant="ghost" size="icon" className="hover:text-orange-500 transition cursor-pointer">
                <FaLinkedin className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="mailto:your@email.com">
              <Button variant="ghost" size="icon" className="hover:text-orange-500 transition cursor-pointer">
                <FaEnvelope className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 dark:text-gray-400 py-4 border-t border-gray-200 dark:border-orange-600">
        © {new Date().getFullYear()} Subhonil Sardar. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
