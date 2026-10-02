import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import Placeholder from "@/components/Placeholder";
import Newsletter from "@/components/Newsletter";
import { learningPath, pillarByKey } from "@/data/site";

export const metadata: Metadata = {
  title: "Building My Future",
  description: "Learning the skills and building the career that takes me where I'm going.",
};

export default function FuturePage() {
  const pillar = pillarByKey("future");

  return (
    <>
      <PageHero
        variant="future"
        number={pillar.number}
        label={`${pillar.tagline} Learning from zero.`}
        title={<>Building<br />My Future.</>}
        lede={
          <p>
            I&rsquo;m not documenting expertise.
            <br />
            <span className="ink">I&rsquo;m documenting the process of earning it.</span>
          </p>
        }
      />

      <section className="section" aria-labelledby="path-title">
        <div className="container">
          <SectionHead
            label="The Route"
            id="path-title"
            title="The learning path."
            aside={<p>No stage is marked complete until it&rsquo;s earned.</p>}
          />
          <ol className="path reveal" aria-label="Learning path">
            {learningPath.map((step, i) => (
              <li key={step} className="path__step">
                <span className="meta path__num">Stage {String(i + 1).padStart(2, "0")}</span>
                <span className="path__name">{step}</span>
                {i < learningPath.length - 1 && (
                  <span className="path__arrow" aria-hidden="true">→</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="learning-title">
        <div className="container">
          <SectionHead label="Starter Sections" id="learning-title" title="The work, in public." />
          <div className="slots">
            <Placeholder index={0} title="What I'm Learning" note="Current focus: networking fundamentals, from zero. Notes will be posted as they're made." />
            <Placeholder index={1} title="Field Notes" note="Concepts, mistakes and the moments things finally click." />
            <Placeholder index={2} title="Labs / Projects" note="Hands-on labs and technical projects, documented step by step." />
            <Placeholder index={3} title="Career Build" note="The transition itself: what I'm aiming for and how I'm getting there." />
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
