import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { WorkingPaper } from "@/data/workingpapers";

export function WorkingPaperEntry({
  workingpaper,
}: {
  workingpaper: WorkingPaper;
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-6">
      {workingpaper.imageUrl && (
        <div className="w-full sm:w-1/4 min-w-[160px] relative">
          <Image
            src={workingpaper.imageUrl}
            alt={workingpaper.title}
            width={160}
            height={200}
            className="rounded-lg transition-all duration-300"
          />
        </div>
      )}

      <div className="flex flex-col flex-1">
        <h3 className="italic font-serif text-md mb-3">{workingpaper.title}</h3>
        
        <p className="text-sm text-zinc-600 mb-2">{workingpaper.authors}</p>
        
        <p className="text-xs text-zinc-500 mb-4">
          {workingpaper.conference} {workingpaper.year}
        </p>

        <div className="flex flex-row gap-6">
          {workingpaper.paperUrl && (
            <a
              href={workingpaper.paperUrl}
              target="_blank"
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">Paper</span>
            </a>
          )}
          {workingpaper.codeUrl && (
            <a
              href={workingpaper.codeUrl}
              target="_blank"
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">Code</span>
            </a>
          )}
          {workingpaper.bibtex && (
            <a
              href={workingpaper.bibtex}
              target="_blank"
              className="group inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 transition-colors duration-300"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">BibTeX</span>
            </a>
          )}
        </div>
        
        {workingpaper.tldr && (
          <p className="text-sm italic text-zinc-600 mt-4">
            {workingpaper.tldr}
          </p>
        )}

      </div>

    </div>
  );
}
