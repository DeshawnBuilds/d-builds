import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import Newsletter from "@/components/Newsletter";
import { atlasCalls, atlasMeta, formatDate, statusOf } from "@/data/atlas";

export const metadata: Metadata = {
  title: "ATLAS",
  description:
    "A ledger of dated calls about where AI's physical buildout gets squeezed next, each logged with what would prove it wrong.",
};

export default function AtlasPage() {
  const scored = atlasCalls.filter((c) => statusOf(c) !== "Open").length;
  const nextCheck = atlasCalls.map((c) => c.nextCheck).sort()[0];

  return (
    <>
      <PageHero
        variant="things"
        label="Building Things / Research"
        title={
          <>
            ATLAS<span className="accent">.</span>
          </>
        }
        lede={
          <p>
            AI runs on power plants, chips, cooling and cable. I&rsquo;m learning that
            world by writing down what I think happens next, with a date on it, and
            checking later whether I was right.
          </p>
        }
      >
        <p className="meta atlas-crumbs">
          <Link href="/things">← Building Things</Link>
        </p>
      </PageHero>

      <section className="section section--tight" aria-labelledby="atlas-rules-title">
        <div className="container">
          <SectionHead label="How it works" id="atlas-rules-title" title="Three rules." />
          <ol className="atlas-rules reveal">
            <li>
              <span className="meta">01</span>
              <p>Every call is dated and says what would prove it wrong.</p>
            </li>
            <li>
              <span className="meta">02</span>
              <p>A call is never edited. New information is added underneath with its own date.</p>
            </li>
            <li>
              <span className="meta">03</span>
              <p>Each call has a check date. When it comes, the call gets scored here, right or wrong.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="section section--tight" aria-labelledby="atlas-ledger-title">
        <div className="container">
          <SectionHead label="The Ledger" id="atlas-ledger-title" title="On the record." />
          <p className="meta atlas-strip">
            <span>{atlasCalls.length} calls logged</span>
            <span>{scored} scored</span>
            <span>Next check {formatDate(nextCheck)}</span>
          </p>

          <ol className="atlas-calls">
            {atlasCalls.map((c) => {
              const status = statusOf(c);
              return (
                <li key={c.num} className="atlas-call reveal">
                  <details>
                    <summary>
                      <span className="meta atlas-call__num">
                        No. {String(c.num).padStart(2, "0")} · Logged {formatDate(c.logged)}
                      </span>
                      <span className="atlas-call__title">{c.title}</span>
                      <span className="meta atlas-call__tags">
                        <span className={`atlas-tag atlas-tag--${status.toLowerCase().replace(/ /g, "-")}`}>
                          <span className="dot" aria-hidden="true" /> {status}
                        </span>
                        <span>{c.confidence} confidence</span>
                        <span>Check {formatDate(c.nextCheck)}</span>
                      </span>
                    </summary>

                    <div className="atlas-call__body">
                      <div>
                        <h3 className="meta">Why it should happen</h3>
                        <p>{c.mechanism}</p>
                      </div>
                      <div>
                        <h3 className="meta">Evidence when logged</h3>
                        <ul>
                          {c.evidence.map((e) => (
                            <li key={e}>{e}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="meta">Wrong if</h3>
                        <ul>
                          {c.wrongIf.map((w) => (
                            <li key={w}>{w}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="atlas-call__pair">
                        <div>
                          <h3 className="meta">Time horizon</h3>
                          <p>{c.horizon}</p>
                        </div>
                        <div>
                          <h3 className="meta">Watching</h3>
                          <p>{c.watching}</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="meta">What I check next</h3>
                        <p>{c.checkNote}</p>
                      </div>
                      <div>
                        <h3 className="meta">Record</h3>
                        {c.record.length ? (
                          <ul className="atlas-record">
                            {c.record.map((r) => (
                              <li key={r.date + r.text}>
                                <span className="meta">{formatDate(r.date)}</span>{" "}
                                {r.verdict && <strong>{r.verdict}. </strong>}
                                {r.text}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="dim">No updates yet.</p>
                        )}
                      </div>
                    </div>
                  </details>
                </li>
              );
            })}
          </ol>

          <p className="meta note">
            Logged {formatDate(atlasMeta.logged)} from research current to{" "}
            {formatDate(atlasMeta.researchAsOf)}. Nothing has been scored yet.
          </p>
          <p className="atlas-disclaimer">
            This is me learning in public. It is research, not financial advice. The
            companies named are ones I&rsquo;m watching, not recommendations to buy or sell
            anything.
          </p>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
