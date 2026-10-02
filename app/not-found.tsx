import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="meta page-hero__label">Error / 404</p>
        <h1 className="page-hero__title">Not built<br />yet.</h1>
        <div className="page-hero__lede">
          <p>This page doesn&rsquo;t exist—yet.</p>
        </div>
        <Link href="/" className="btn btn--solid">
          Back to the build <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
