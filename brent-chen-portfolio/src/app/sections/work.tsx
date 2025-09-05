import React from "react";

export default function WorkExperience() {
  return (
    <div
      id="experience-section"
      className="relative max-w-4xl mx-auto bg-white/90 backdrop-blur-md p-8 mb-8 border border-white/60 shadow-md"
      style={{ borderRadius: 0 }}
    >
      <h2 className="text-2xl font-bold text-black mb-8 flex items-center drop-shadow-lg">
        <div className="w-1 h-8 bg-gradient-to-b from-red-500 to-orange-500 rounded-full mr-4 shadow-lg shadow-red-500/50"></div>
        職歴
      </h2>

      <div className="space-y-8">
        <div className="relative pl-8 border-l-2 border-red-500/60">
          <div className="absolute -left-2 top-0 w-4 h-4 bg-red-600 rounded-full shadow-lg shadow-red-600/50"></div>
          <div
            className="bg-gradient-to-r from-red-900/40 to-orange-900/30 backdrop-blur-sm p-6 border border-red-500/30 shadow-xl"
            style={{ borderRadius: 0 }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-black mb-1 drop-shadow-lg">
                  Full Stack Developer Intern
                </h3>
                <p className="text-red-600 font-medium drop-shadow-lg">
                  PROJXON
                </p>
              </div>
              <span className="text-sm text-gray-700 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full mt-2 md:mt-0 border border-red-500/30">
                現在 (2025年6月6日〜)
              </span>
            </div>
            <p className="text-gray-800 leading-relaxed">
              Next.js、React、TypeScriptを用いて、当社のCEOがECをはじめとする多様な業界へコンサルティングを提供するプラットフォーム「The
              Phelan
              Focus」の開発に貢献。フロントエンドの設計・実装だけでなく、Google
              Analyticsを用いたデータ分析や、OAuth2.0によるセキュリティ認証を統合するなど、バックエンド機能の構築も担当。
            </p>
          </div>
        </div>
        <div className="relative pl-8 border-l-2 border-red-400/60">
          <div className="absolute -left-2 top-0 w-4 h-4 bg-red-500 rounded-full shadow-lg shadow-red-500/50"></div>
          <div
            className="bg-gradient-to-r from-red-900/40 to-orange-900/30 backdrop-blur-sm p-6 border border-red-400/30 shadow-xl"
            style={{ borderRadius: 0 }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-black mb-1 drop-shadow-lg">
                  Software Developer Intern
                </h3>
                <p className="text-red-500 font-medium drop-shadow-lg">
                  We Care Insurance
                </p>
              </div>
              <span className="text-sm text-gray-700 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full mt-2 md:mt-0 border border-red-500/30">
                6ヶ月 (2024-2025)
              </span>
            </div>
            <p className="text-gray-800 leading-relaxed">
              React、JavaScript、Tailwind CSSを使用したInsurance Management
              Appのフロントエンド機能開発。バックエンドAPIとの統合、UIの最適化、スケーラビリティのための再利用可能なコンポーネントの構築。PostmanでのAPIテストも実施。
            </p>
          </div>
        </div>
        <div className="relative pl-8 border-l-2 border-orange-400/60">
          <div className="absolute -left-2 top-0 w-4 h-4 bg-orange-500 rounded-full shadow-lg shadow-orange-500/50"></div>
          <div
            className="bg-gradient-to-r from-orange-900/40 to-red-900/30 backdrop-blur-sm p-6 border border-orange-400/30 shadow-xl"
            style={{ borderRadius: 0 }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-black mb-1 drop-shadow-lg">
                  Project Lead
                </h3>
                <p className="text-orange-500 font-medium drop-shadow-lg">
                  UCSC Blueprint
                </p>
              </div>
              <span className="text-sm text-gray-700 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full mt-2 md:mt-0 border border-orange-500/30">
                1年 (2023-2024)
              </span>
            </div>
            <p className="text-gray-800 leading-relaxed">
              動物保護ボランティア向けモバイルアプリ開発のスクラムチームをリード。React、TypeScript、Firebaseを使用してUIの作成とバックエンド管理を実施。認証フローの保護、GitHubワークフローの監督、マージコンフリクトの効率的な解決を担当。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
