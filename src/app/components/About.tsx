"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <div>
      {" "}
      <section
        className="
      w-full py-16 px-4 md:px-12
      bg-white dark:bg-black 
      text-gray-800 dark:text-gray-100
    "
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-[30%] rounded-lg overflow-hidden shadow-lg mt-5"
          >
            <Image
              src="/about.jpg"
              alt="About Me"
              width={300}
              height={500}
              className="object-cover w-full h-auto rounded-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-[60%] space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-orange-500">About Me</h2>
            <p className="text-base leading-relaxed">
              I'm a passionate web developer from India, building sleek, modern,
              and user-friendly interfaces using React, Tailwind CSS, and
              cutting-edge frameworks. My mission is to transform ideas into
              reality through clean code and design thinking.
            </p>

            <ul className="space-y-2 list-disc list-inside text-sm md:text-base">
              <li>
                💻 I love building modern UIs with Tailwind CSS & Shadcn UI
              </li>
              <li>⚡ Focused on performance & responsive design</li>
              <li>🎯 Framer Motion is my go-to for smooth animations</li>
              <li>🌙 Full dark/light mode support on every component</li>
            </ul>

            <div className="flex flex-wrap gap-2 pt-4">
              {[
                "React",
                "Next.js",
                "Tailwind",
                "Shadcn UI",
                "Framer Motion",
                "TypeScript",
              ].map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="text-xs px-3 py-1 dark:border-gray-700"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
