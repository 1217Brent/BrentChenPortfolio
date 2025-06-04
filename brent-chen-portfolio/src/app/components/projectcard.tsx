
import Image from "next/image";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
}

export function ProjectCard({ img, title, desc }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full">
      <div className="h-48 w-full relative">
        {(typeof img === 'string' && img.trim() !== '' && (img.startsWith('/') || img.startsWith('http'))) ? (
          <Image
            src={img}
            alt={title}
            width={768}
            height={768}
            className="h-full w-full object-cover"
          />
        ) : (
          <Image
            src="/assets/placeholder.jpg"
            alt="Placeholder"
            width={768}
            height={768}
            className="h-full w-full object-cover"
          />
        )}
      </div>
      <div className="flex-1 flex flex-col p-4">
        <a
          href="#"
          className="text-black text-xl font-semibold mb-2"
        >
          {title}
        </a>
        <p className="mb-6 font-normal text-gray-500 flex-1">{desc}</p>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors text-sm self-start"
          type="button"
        >
          see details
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
