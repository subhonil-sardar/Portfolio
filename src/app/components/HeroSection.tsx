"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div>
      <section
        className="w-full py-16 md:py-24 px-4 md:px-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-8
    bg-white 
    dark:bg-black

    bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)]
    bg-[size:40px_40px]

    dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.3)_1px,transparent_1px)]
    dark:bg-[size:40px_40px]"
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I&apos;m{" "}
            <span className="text-orange-500">
              <Typewriter
                words={["Subhonil Sardar"]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>

          <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg max-w-xl mx-auto lg:mx-0">
            I am a MERN Stack Developer with expertise in Next.js. I create
            responsive and dynamic web applications that look great and work
            seamlessly across devices.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-4 mb-6 justify-center lg:justify-start">
            <Button
              className="bg-orange-500 text-white hover:bg-orange-600"
              asChild
            >
              <a href="/Resume(Subhonil-Sardar).pdf" download>
                Download Resume
              </a>
            </Button>

            <div className="flex gap-4 text-2xl">
              <Link
                href="https://github.com/subhonil"
                target="_blank"
                aria-label="GitHub"
              >
                <FaGithub className="hover:text-orange-500 transition" />
              </Link>
              <Link
                href="https://linkedin.com/in/subhonil"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="hover:text-orange-500 transition" />
              </Link>
              <Link
                href="https://facebook.com/subhonil"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook className="hover:text-orange-500 transition" />
              </Link>
              <Link
                href="https://instagram.com/subhonil"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram className="hover:text-orange-500 transition" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 flex justify-center"
        >
          <motion.div
            animate={{ rotate: [0, 1.5, -1.5, 0] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 6,
            }}
            className="w-60 h-60 md:w-80 md:h-100 rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/subhonil.jpg"
              alt="Subhonil Sardar"
              width={320}
              height={320}
              className="object-cover w-full h-full"
            />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default HeroSection;
