"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

function Hero() {
  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <h1 className="mb-4 text-3xl lg:text-5xl font-bold text-black leading-tight">
            Welcome to my Web <br /> Development Portfolio!
          </h1>
          <p className="mb-4 text-gray-500 md:pr-16 xl:pr-28 text-lg">
            I am Brent Chen and I am a Web Developer. I have 6 months of Front
            End Developer Intern experience and built projects focused on design
            and interactiveness for users. I am currently pursuing my Masters in
            Management Degree with a goal of becoming a Engineering Manager in
            the future.
          </p>
          <Link className = "mt-6 block" href="https://github.com/1217Brent">
            <span className="shadow-md font-semibold text-m cursor-pointer bg-black text-white p-3 mt-3 rounded transition-colors">
              Check Out My Github!
            </span>
          </Link>
        </div>
        <Image
          width={1024}
          height={1024}
          alt="team work"
          src="/image/image-7.svg"
          className="h-[36rem] w-full rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;
