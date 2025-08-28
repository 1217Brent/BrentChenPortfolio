"use client";
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <h1 className="mb-4 text-3xl lg:text-5xl font-bold text-blue-gray-900 leading-tight">
            Welcome to my Web <br /> Development Portfolio!
          </h1>
          <p className="mb-4 text-gray-500 md:pr-16 xl:pr-28 text-lg">
            I&apos;m Lily Smith, a passionate web developer based in USA. Here,
            you&apos;ll get a glimpse of my journey in the world of web
            development, where creativity meets functionality.
          </p>
          <div className="grid">
            <label className="mb-2 text-gray-900 font-medium text-sm" htmlFor="hero-email">
              Your email
            </label>
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
              <input
                id="hero-email"
                type="email"
                placeholder="Enter your email"
                className="border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 w-full"
              />
              <button
                className="w-full md:w-[12rem] px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors"
                type="button"
              >
                require offer
              </button>
            </div>
          </div>
          <p className="font-normal text-gray-500 text-sm">
            Read my{" "}
            <a href="#" className="font-medium underline transition-colors hover:text-gray-700">
              Terms and Conditions
            </a>
          </p>
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