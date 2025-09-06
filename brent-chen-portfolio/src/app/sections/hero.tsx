import Image from "next/image";
import React from "react";

export default function HeroProfile() {
  return (
    <section
      id="top"
      className="w-full min-h-screen"
      style={{
        background: "#ffe5e5",
        fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif",
      }}
    >
      <div
        className="relative max-w-4xl mx-auto mt-5 p-8 pt-24 bg-white/80 backdrop-blur-lg shadow-lg border border-white/60"
        style={{ borderRadius: 0 }}
      >
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12 gap-8">
          <div className="flex-1 mb-6 lg:mb-0">
            <div
              className="inline-block bg-gradient-to-r from-red-500/90 to-orange-500/90 backdrop-blur-sm text-white px-6 py-3 text-sm font-medium mb-8 border border-red-300/50 shadow-lg shadow-red-500/25"
              style={{ borderRadius: 0 }}
            >
              <div className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></div>
                UC Davis STEM経営学修士課程卒業
              </div>
            </div>
            <h1 className="text-7xl font-light text-gray-900 mb-3 tracking-wide leading-tight drop-shadow-2xl">
              神本 蓮
            </h1>
            <p className="text-xl text-gray-700 mb-6 font-light drop-shadow-lg">
              Ren Kamimoto
            </p>
            <div
              className="inline-flex items-center bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 text-sm font-medium shadow-xl shadow-red-500/50 border border-red-300/30"
              style={{ borderRadius: 0 }}
            >
              <div className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></div>
              ソフトウェアデベロッパーインターン
            </div>
            <div className="flex gap-3 mt-6">
              <a
                href="https://github.com/1217Brent"
                className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 text-white flex items-center justify-center hover:scale-110 hover:shadow-2xl hover:shadow-gray-500/50 transition-all duration-300 text-sm font-bold border border-gray-600/50 backdrop-blur-sm"
                style={{ borderRadius: 0 }}
              >
                G
              </a>
              <a
                href="https://www.linkedin.com/in/brent-chen/"
                className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 text-white flex items-center justify-center hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 text-sm font-bold border border-blue-400/50 backdrop-blur-sm"
                style={{ borderRadius: 0 }}
              >
                in
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-end items-start">
            <Image
              src="/KamimotoRen.webp"
              alt="Ren Kamimoto"
              width={256}
              height={256}
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div
            className="flex items-center text-base bg-white/90 backdrop-blur-md p-4 border border-white/60 shadow-md"
            style={{ borderRadius: 0 }}
          >
            <span className="text-yellow-400 mr-3 text-lg drop-shadow-lg">
              ▲
            </span>
            <span className="text-gray-700 mr-2 font-medium">学位：</span>
            <span className="text-gray-900 font-medium">
              Masters in Management (UC Davis)
            </span>
          </div>
          <div
            className="flex items-center text-base bg-white/90 backdrop-blur-md p-4 border border-white/60 shadow-md"
            style={{ borderRadius: 0 }}
          >
            <span className="text-yellow-400 mr-3 text-lg drop-shadow-lg">
              ▲
            </span>
            <span className="text-gray-700 mr-2 font-medium">経験：</span>
            <span className="text-gray-900 font-medium">
              1.5年のソフトウェアインターン経験
            </span>
          </div>
          <div
            className="flex items-center text-base bg-white/90 backdrop-blur-md p-4 border border-white/60 shadow-md"
            style={{ borderRadius: 0 }}
          >
            <span className="text-yellow-400 mr-3 text-lg drop-shadow-lg">
              ▲
            </span>
            <span className="text-gray-700 mr-2 font-medium">専門：</span>
            <span className="text-gray-900 font-medium">
              フロントエンド・バックエンド開発
            </span>
          </div>
          <div
            className="flex items-center text-base bg-white/90 backdrop-blur-md p-4 border border-white/60 shadow-md"
            style={{ borderRadius: 0 }}
          >
            <span className="text-yellow-400 mr-3 text-lg drop-shadow-lg">
              ▲
            </span>
            <span className="text-gray-700 mr-2 font-medium">志望：</span>
            <span className="text-gray-900 font-medium">
              日本でのソフトウェア開発
            </span>
          </div>
        </div>
        <div
          className="bg-white/90 backdrop-blur-md p-6 mb-8 border border-white/60 shadow-md"
          style={{ borderRadius: 0 }}
        >
          <div className="flex flex-wrap gap-6">
            <a
              href="https://www.projxon.com/"
              className="flex items-center text-red-500 hover:text-red-700 transition-colors text-base font-medium group"
            >
              <span className="group-hover:translate-x-1 transition-transform drop-shadow-lg">
                PROJXON
              </span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform">
                ↗
              </span>
            </a>
            <a
              href="https://www.wecare-insurance.com/health-insurance/"
              className="flex items-center text-red-500 hover:text-red-700 transition-colors text-base font-medium group"
            >
              <span className="group-hover:translate-x-1 transition-transform drop-shadow-lg">
                We Care Insurance
              </span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform">
                ↗
              </span>
            </a>
            <a
              href="https://www.ucscblueprint.com/"
              className="flex items-center text-orange-500 hover:text-orange-700 transition-colors text-base font-medium group"
            >
              <span className="group-hover:translate-x-1 transition-transform drop-shadow-lg">
                UCSC Blueprint
              </span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform">
                ↗
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
