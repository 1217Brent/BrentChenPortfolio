import React from "react";

const LINKS = [
  { name: "Home", id: "top" },
  { name: "Projects", id: "projects-section" },
  { name: "Experience", id: "experience-section"},
  { name: "Contact", id: "contact-section" },
  { name: "Resume", link: "/ResumeBrentChen.docx.pdf" },
];
const CURRENT_YEAR = new Date().getFullYear();

function BottomFooter() {
  const handleScroll =
    (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };
  return (
    <footer
      className="w-full px-8 pt-20 pb-8"
      style={{
        background: "#ffe5e5",
        fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif",
      }}
    >
      <div className="relative container mx-auto">
        <div
          className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-red-400/20 py-6 md:justify-between bg-black/20 px-6"
          style={{ borderRadius: 0 }}
        >
          <p className="text-center font-normal text-gray-300 drop-shadow-lg">
            &copy; {CURRENT_YEAR} Brent Chen All Rights Reserved
          </p>
          <ul className="flex gap-8 items-center">
            {LINKS.map((item) => (
              <li key={item.name}>
                {item.name === "Resume" ? (
                  <a
                    href={item.link}
                    download
                    className="font-normal text-gray-300 hover:text-red-400 transition-all duration-300 text-sm drop-shadow-lg hover:drop-shadow-xl hover:scale-105 relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-400 to-orange-400 group-hover:w-full transition-all duration-300"></span>
                  </a>
                ) : (
                  <a
                    href={`#${item.id}`}
                    onClick={handleScroll(item.id)}
                    className="font-normal text-gray-300 hover:text-orange-400 transition-all duration-300 text-sm drop-shadow-lg hover:drop-shadow-xl hover:scale-105 relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-400 group-hover:w-full transition-all duration-300"></span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default BottomFooter;
