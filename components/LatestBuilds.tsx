import Link from "next/link";
import BuildArt from "./BuildArt";
import SectionHead from "./SectionHead";
import { latestBuilds, pillarByKey, type LatestBuild } from "@/data/site";

export function BuildEntry({ entry, index }: { entry: LatestBuild; index: number }) {
  const pillar = pillarByKey(entry.pillar);
  return (
    <li className={`entry entry--${index} reveal`}>
      <Link href={entry.href} className="entry__link">
        <BuildArt art={entry.art} />
        <div className="entry__text">
          <p className="meta entry__meta">
            <span>{pillar.title}</span>
            <span className="dim">/ {String(index + 1).padStart(3, "0")}</span>
          </p>
          <h3 className="entry__title">{entry.title}</h3>
          <p className="entry__desc">{entry.description}</p>
          <p className="meta entry__status">
            <span className="dot" aria-hidden="true" /> {entry.status}
          </p>
        </div>
      </Link>
    </li>
  );
}

export default function LatestBuilds() {
  return (
    <section className="section latest" aria-labelledby="latest-title">
      <div className="container">
        <SectionHead
          label="Field Notes / Latest Builds"
          id="latest-title"
          title={
            <>
              What&rsquo;s being
              <br />
              built right now.
            </>
          }
        />
        <ol className="entries">
          {latestBuilds.map((entry, i) => (
            <BuildEntry key={entry.title} entry={entry} index={i} />
          ))}
        </ol>
      </div>
    </section>
  );
}
