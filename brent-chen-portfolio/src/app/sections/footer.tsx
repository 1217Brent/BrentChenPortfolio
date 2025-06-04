import React from "react";

const LINKS = [
  { name: "Home", link: "" },
  { name: "Projects", link: "" },
  { name: "Contact", link: "" },
  { name: "Resume", link: "/ResumeBrentChen.docx.pdf" },
];
const CURRENT_YEAR = new Date().getFullYear();

function BottomFooter() {
  return (
    <footer className="bg-white px-8 pt-20">
      <div className="container mx-auto">
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
          <p className="text-center font-normal text-gray-700">
            &copy; {CURRENT_YEAR} Brent Chen All Rights Reserved
          </p>
          <ul className="flex gap-8 items-center">
            {LINKS.map((item) => (
              <li key={item.name}>
                {item.name === "Resume" ? (
                  <a
                    href={item.link}
                    download
                    className="font-normal text-gray-700 hover:text-gray-900 transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                ) : (
                  <a
                    href={`#${item.name.toLowerCase()}`}
                    className="font-normal text-gray-700 hover:text-gray-900 transition-colors text-sm"
                  >
                    {item.name}
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
