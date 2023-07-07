"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ProductData } from './../typings.d';

type Props = {
}; 

export default function Lab1({}: Props) {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto"
    >
      <h3 className="absolute top-8 uppercase tracking-[20px] text-gray-500 text-2xl">Lab 1</h3>
      <div className="space-y-10 px-0 md:px-10 pt-24">
        <Link href="/lab1" className="heroButton bg-blue-500 text-white">Live</Link>
      </div>
    </motion.div>
  );
}
