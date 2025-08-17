"use client"
import React from 'react'
import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
  return (
    <div>
        <section className="min-h-screen py-20 px-6 md:px-20 flex items-center justify-center dark:linear-gradient(to right, #0f0f0f, #1a1a1a) linear-gradient(to right, #f0f4f8, #ffffff)">
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-10"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-orange-600">
          Contact Me
        </h2>
        <form
          action="https://formsubmit.co/subhonilsardar@gmail.com"
          method="POST"
          className="space-y-5"
        >
          <input type="hidden" name="_captcha" value="false" />

          <Input
            name="name"
            placeholder="Your Name"
            required
            onChange={handleChange}
            className="dark:bg-zinc-800 dark:text-white"
          />

          <Input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            onChange={handleChange}
            className="dark:bg-zinc-800 dark:text-white"
          />

          <Input
            name="subject"
            placeholder="Subject"
            required
            onChange={handleChange}
            className="dark:bg-zinc-800 dark:text-white"
          />

          <Textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            onChange={handleChange}
            className="dark:bg-zinc-800 dark:text-white"
          />

          <Button type="submit" className="w-full mt-4 bg-orange-600 text-white cursor-pointer">
            Send Message
          </Button>
        </form>
      </motion.div>
        </section>
    </div>
  )
}

export default Contact