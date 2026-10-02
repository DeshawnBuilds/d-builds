import BuildPillar from "./BuildPillar";
import SectionHead from "./SectionHead";
import { pillars } from "@/data/site";

export default function ThreeBuilds() {
  return (
    <section id="the-builds" className="section builds" aria-labelledby="builds-title">
      <div className="container">
        <SectionHead
          label="The Three Builds"
          id="builds-title"
          title={
            <>
              One life.
              <br />
              <span className="dim">Three constructions.</span>
            </>
          }
          aside={
            <p>
              The person, the creations and the future are being built at the same
              time. Each one makes the others possible.
            </p>
          }
        />
        <ol className="pillars">
          {pillars.map((p) => (
            <BuildPillar key={p.key} pillar={p} />
          ))}
        </ol>
      </div>
    </section>
  );
}
