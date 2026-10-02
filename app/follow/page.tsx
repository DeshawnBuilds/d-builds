import type { Metadata } from "next";
import Newsletter from "@/components/Newsletter";
import { socialLinks } from "@/data/site";

export const metadata: Metadata = {
  title: "Follow the Build",
  description: "Once a week: what I built, what I learned, what failed, and what changed.",
};

export default function FollowPage() {
  return (
    <>
      <div className="follow-page">
        <Newsletter headingLevel="h1" />
      </div>
      <section className="section section--tight" aria-labelledby="channels-title">
        <div className="container channels">
          <h2 id="channels-title" className="meta">Channels</h2>
          {socialLinks.length > 0 ? (
            <ul>
              {socialLinks.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="me noopener">
                    {s.label} <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="channels__note">
              Social channels are being connected. For now, this page is the signal.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
