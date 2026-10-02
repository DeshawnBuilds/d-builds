"use client";

import { useId, useState } from "react";

type Props = { headingLevel?: "h1" | "h2" };

// UI only for V1. Nothing is sent or stored until the newsletter is connected.
export default function Newsletter({ headingLevel = "h2" }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const id = useId();
  const Heading = headingLevel;

  return (
    <section className="newsletter" aria-labelledby={`${id}-title`}>
      <div className="container newsletter__grid">
        <div className="reveal">
          <p className="meta newsletter__label">
            <span className="section-head__rule" aria-hidden="true" />
            Weekly dispatch
          </p>
          <Heading id={`${id}-title`} className="newsletter__title">
            Follow
            <br />
            the build<span className="accent">.</span>
          </Heading>
        </div>

        <div className="newsletter__form-wrap reveal">
          <p className="newsletter__copy">
            Once a week: what I built, what I learned, what failed, and what changed.
          </p>

          {submitted ? (
            <div className="newsletter__done" role="status">
              <p className="meta">
                <span className="dot" aria-hidden="true" /> Noted
              </p>
              <p>
                The newsletter connection is coming next. Nothing was sent or stored
                yet—check back soon to join for real.
              </p>
              <button type="button" className="link-btn" onClick={() => setSubmitted(false)}>
                Back
              </button>
            </div>
          ) : (
            <form
              className="newsletter__form"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <label htmlFor={`${id}-email`} className="sr-only">
                Email address
              </label>
              <input
                id={`${id}-email`}
                type="email"
                name="email"
                required
                autoComplete="email"
                inputMode="email"
                placeholder="your@email.com"
                className="newsletter__input"
              />
              <button type="submit" className="btn btn--solid">
                Join D BUILDS <span aria-hidden="true">→</span>
              </button>
            </form>
          )}

          <p className="meta newsletter__small">No noise. Just the build.</p>
        </div>
      </div>
    </section>
  );
}
