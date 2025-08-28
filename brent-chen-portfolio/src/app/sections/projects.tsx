"use client";

import ProjectCard from "../components/projectcard";

const PROJECTS = [
  {
    img: "/image/blog-1.svg",
    title: "International Reviews Gourmet",
    desc: "旅行者様がご自身の国の料理を専門とするレストランを、同じ国の旅行者様のレビューのみでお探しいただけるウェブサイトでございます。",
  },
  {
    img: "/image/blog2.svg",
    title: "Personal Portfolio",
    desc: "私の経験とプロジェクトを丁寧にご紹介するポートフォリオでございます。",
  },
  {
    img: "/image/blog3.svg",
    title: "Tokyo Tastes",
    desc: "一橋大学周辺の飲食店をMapboxGLでご案内申し上げます。",
  },
  {
    img: "../../public/assets/SetListPhoto.jpg",
    title: "Set List",
    desc: "バンドを組みたい、または一緒に演奏したい大学生の皆様をお繋ぎするサービスでございます。",
  },
];

export function Projects() {
  return (
    <section id="projects-section" className="w-full min-h-screen" style={{ background: '#ffe5e5', fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif' }}>
      <div className="relative max-w-4xl mx-auto p-8 pt-16 bg-white/90 backdrop-blur-md shadow-lg border border-white/60 text-center" style={{borderRadius:0}}>
        <h2 className="mb-4 text-3xl lg:text-5xl font-bold text-gray-900 leading-tight drop-shadow-2xl">
          プロジェクト一覧
        </h2>
        <p className="mx-auto w-full px-4 font-normal text-gray-700 lg:w-6/12 text-lg drop-shadow-lg">
          こちらは私がこれまでに開発させていただいたプロジェクトの一覧でございます。
        </p>
        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
          {PROJECTS.map((props, idx) => (
            <ProjectCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
