"use client";

import ProjectCard from "../components/projectcard";
import PROJECTS from "../data/projectData";

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
