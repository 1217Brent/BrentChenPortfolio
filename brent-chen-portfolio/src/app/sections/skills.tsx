import React from "react";

function Skills() {
  return (
    <div
      className="relative mb-8 max-w-4xl mx-auto bg-white/90 backdrop-blur-md p-8 border border-white/60 shadow-md"
      style={{ borderRadius: 0 }}
    >
      <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-orange-500 to-red-500 rounded-full mr-4"></div>
        技術スキル
      </h3>
      <div className="flex flex-wrap gap-3">
        {[
          "React",
          "React Native",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "HTML & CSS",
          "Python",
          "C",
          "C++",
        ].map((skill, index) => (
          <span
            key={skill}
            className="bg-gradient-to-r from-white to-red-50 border border-red-200 text-gray-700 px-4 py-2 text-sm font-medium hover:from-red-50 hover:to-orange-50 hover:border-red-300 hover:shadow-md transition-all duration-300 cursor-default"
            style={{ borderRadius: 0, animationDelay: `${index * 100}ms` }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skills;
