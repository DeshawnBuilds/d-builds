import type { Metadata } from "next";
import Link from "next/link";
import PortalVisual from "@/components/PortalVisual";
import Placeholder from "@/components/Placeholder";
import Newsletter from "@/components/Newsletter";
import { acuSections } from "@/data/site";

export const metadata: Metadata = {
  title: "Awakened Creators",
  description:
    "An evolving cinematic universe about remembering the future you're capable of creating.",
};

export default function AwakenedCreatorsPage() {
  return (
    <div className="acu">
      <section className="acu-hero" aria-labelledby="acu-page-title">
        <div className="acu-hero__visual">
          <PortalVisual size="xl" />
        </div>
        <div className="container acu-hero__content">
          <p className="meta acu-hero__crumbs">
            <Link href="/things">Building Things</Link> <span className="dim">/</span> Active Universe
          </p>
          <h1 id="acu-page-title" className="acu-hero__title">
            Awakened
            <br />
            Creators
          </h1>
          <p className="acu-hero__copy">
            An evolving cinematic universe about remembering the future you&rsquo;re
            capable of creating.
          </p>
          <p className="meta acu-hero__status">
            <span className="dot" aria-hidden="true" /> Universe in development · Transmissions begin soon
          </p>
        </div>
      </section>

      <section className="section acu-index" aria-labelledby="acu-index-title">
        <div className="container">
          <header className="section-head reveal">
            <p className="meta section-head__label">
              <span className="section-head__rule" aria-hidden="true" />
              The Archive
            </p>
            <h2 id="acu-index-title" className="section-head__title">
              What will
              <br />
              live here.
            </h2>
            <div className="section-head__aside">
              <p>
                These rooms are being built. Nothing below is finished yet, so nothing
                below pretends to be.
              </p>
            </div>
          </header>
          <div className="slots slots--acu">
            {acuSections.map((s, i) => (
              <Placeholder key={s.title} index={i} title={s.title} note={s.note} />
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
