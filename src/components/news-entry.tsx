import { ArrowUpRight } from "lucide-react";
import { News } from "@/data/news";

export function NewsEntry({ news }: { news: News }) {
  return (
    <div className="flex flex-row gap-6 border-l-2 border-mycolor1/50 bg-zinc-50 rounded-r-lg px-5 py-2.5">
      <div className="flex flex-col flex-1">
        <p className="text-xs text-zinc-500 mb-2">{news.date}</p>
        <h3 className="font-serif text-mycolor1 text-md mb-3">
          {
            news.link ? (
              <a
                href={news.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 hover:text-mycolor2 transition-colors duration-300"
              >
                {news.title}
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                />
              </a>
            ) : (news.title)
          }
        </h3>
        <p className="text-sm text-zinc-600">{news.description}</p>
      </div>
    </div>
  );
}
