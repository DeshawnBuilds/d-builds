"use client";

import { useState } from "react";
import ArticleList from "./ArticleList";
import { articles, pillars, type PillarKey } from "@/data/site";

type Filter = "all" | PillarKey;

export default function WritingArchive() {
  const [filter, setFilter] = useState<Filter>("all");
  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: "All" },
    ...pillars.map((p) => ({ key: p.key as Filter, label: p.short })),
  ];
  const items = filter === "all" ? articles : articles.filter((a) => a.pillar === filter);

  return (
    <div>
      <div className="filters" role="group" aria-label="Filter writing by build">
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            className="filter meta"
            aria-pressed={filter === f.key}
            onClick={() => setFilter(f.key)}
          >
            {f.label}
            <span className="filter__count">
              {f.key === "all" ? articles.length : articles.filter((a) => a.pillar === f.key).length}
            </span>
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        Showing {items.length} {items.length === 1 ? "entry" : "entries"}
      </p>
      <ArticleList items={items} />
    </div>
  );
}
