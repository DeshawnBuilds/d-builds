import Link from "next/link";
import type { Pillar } from "@/data/site";

export default function BuildPillar({ pillar }: { pillar: Pillar }) {
  const [first, ...rest] = pillar.title.split(" ");
  return (
    <li className={`pillar pillar--${pillar.key} reveal`}>
      <Link href={pillar.href} className="pillar__link">
        <span className="pillar__num meta" aria-hidden="true">
          {pillar.number}
        </span>
        <span className="pillar__body">
          <span className="pillar__title">
            {first}
            <br />
            {rest.join(" ")}
          </span>
          <span className="pillar__tagline">{pillar.tagline}</span>
        </span>
        <span className="pillar__desc">{pillar.description}</span>
        <span className="pillar__arrow" aria-hidden="true">
          →
        </span>
        <span className="pillar__sweep" aria-hidden="true" />
      </Link>
    </li>
  );
}
