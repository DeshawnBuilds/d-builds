import Link from "next/link";
import PortalVisual from "./PortalVisual";

export default function ACUPortal() {
  return (
    <section className="acu-feature" aria-labelledby="acu-title">
      <div className="acu-feature__seam" aria-hidden="true" />
      <div className="container acu-feature__grid">
        <div className="acu-feature__text reveal">
          <p className="meta acu-feature__label">
            Building Things <span className="dim">/</span> Active Universe
          </p>
          <h2 id="acu-title" className="acu-feature__title">
            Awakened
            <br />
            Creators
          </h2>
          <p className="acu-feature__copy">
            An evolving cinematic universe about remembering the future you&rsquo;re
            capable of creating.
          </p>
          <Link href="/things/awakened-creators" className="btn btn--portal">
            Enter the universe <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="acu-feature__visual reveal">
          <PortalVisual />
        </div>
      </div>
    </section>
  );
}
