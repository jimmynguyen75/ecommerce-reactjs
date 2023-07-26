"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";

import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import React from "react";

export default function Hero() {
   // with require
  const [text, count] = useTypewriter({
    words: ["Chào cô", "Chào mọi người", "Happy coding", "Hook!"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://photo2.tinhte.vn/data/attachment-files/2023/01/6293171_Mister_Bumbles_A_cute_baby_clockwork_owl_with_big_crystaline.jpg"
        alt=""
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">MITM Class</h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <a href="#lab1">
            <button className="heroButton">Lab 1</button>
          </a>
          <a href="#lab2">
            <button className="heroButton">Lab 2</button>
          </a>
          {/* <a href="#lab3">
            <button className="heroButton">Lab 3</button>
          </a> */}
          <Link href="/lab3">
          <button className="heroButton">Lab 3</button>
            </Link>
            <Link href="/lab4">
          <button className="heroButton">Lab 3</button>
            </Link>
        </div>
      </div>
    </div>
  );
}
