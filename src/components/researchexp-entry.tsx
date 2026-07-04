import { Researchexp } from "@/data/researchexp";

export function ResearchexpEntry({ researchexp }: { researchexp: Researchexp }) {
  return (
    <div className="grid grid-cols-4 gap-x-2">
      <span className="text-xs text-zinc-500 mt-1">{researchexp.date}</span>
      <div className="col-span-3 flex flex-col">
        <h3 className="text-base font-serif">
           
          {researchexp.companyUrl ? (
            <a
              href={researchexp.companyUrl}
              className="hover:text-zinc-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {researchexp.company}
            </a>
          ) : (
            researchexp.company
          )}
          {/* <span className="text-sm ml-2">—<span className="ml-2">{researchexp.title}</span></span> */}
          <span className="text-sm ml-1">—<span className="ml-1">{researchexp.title}</span></span>
        </h3>
        {researchexp.manager && (
          <p className="text-sm text-zinc-600 leading-relaxed italic mt-2">
            Manager: {researchexp.manager}
          </p>
        )}
        {researchexp.advisor && (
          <p className="text-sm text-zinc-600 leading-relaxed italic mt-2">
            Advisor: {researchexp.advisor}
          </p>
        )}
        {researchexp.description && (
          <p className="text-sm text-zinc-600 leading-relaxed mt-2">
            {researchexp.description}
          </p>
        )}
      </div>
    </div>
  );
}
