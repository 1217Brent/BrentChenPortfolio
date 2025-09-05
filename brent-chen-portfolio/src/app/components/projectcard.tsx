import Image from "next/image";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
  link: string;
}

export function ProjectCard({ img, title, desc, link }: ProjectCardProps) {
  function handleClick(): void {
    window.open(link, "_blank");
  }
  return (
    <div
      className="flex flex-col bg-white/80 backdrop-blur-lg shadow-lg border border-white/60 p-6"
      style={{ borderRadius: 0 }}
    >
      <div className="relative h-48 w-full mb-6 rounded-none overflow-hidden shadow-md border border-white/50">
        {(typeof img === "string" && img.trim() !== "" && (img.startsWith("/") || img.startsWith("http"))) ? (
          <Image
            src={img}
            alt={title}
            fill
            style={{ objectFit: "contain" }}
          />
        ) : (
          <Image
            src="/assets/placeholder.jpg"
            alt="Placeholder"
            fill
            style={{ objectFit: "contain" }}
          />
        )}
      </div>
      <a
        href='#'
        className="text-3xl text-gray-900 font-light mb-3 tracking-wide drop-shadow-2xl"
        style={{ fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif" }}
      >
        {title}
      </a>
      <p className="text-lg text-gray-700 font-light mb-6 drop-shadow-lg">
        {desc}
      </p>
      <button
        type="button"
        className="inline-flex items-center bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 text-sm font-medium shadow-xl shadow-red-500/50 border border-red-300/30 hover:scale-105 transition-transform duration-300"
        style={{ borderRadius: 0 }}
        onClick={handleClick}
      >
        See details
      </button>
    </div>
  );
}

export default ProjectCard;
