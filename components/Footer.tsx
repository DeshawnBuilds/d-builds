import Link from "next/link";
import { followNav, primaryNav, site, socialLinks } from "@/data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <p className="footer__brand">
            D BUILDS<span className="accent">.</span>
          </p>
          <p className="footer__mantra">
            Build the person.
            <br />
            Build the thing.
            <br />
            Build the future.
          </p>
        </div>

        <div className="footer__cols">
          <nav aria-label="Footer">
            <p className="meta footer__heading">Index</p>
            <ul className="footer__list">
              {[{ label: "Home", href: "/" }, ...primaryNav, followNav].map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="meta footer__heading">Channels</p>
            {socialLinks.length > 0 ? (
              <ul className="footer__list">
                {socialLinks.map((s) => (
                  <li key={s.href}>
                    <a href={s.href} rel="me noopener" target="_blank">
                      {s.label} <span aria-hidden="true">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="footer__note">Being connected.</p>
            )}
          </div>
        </div>

        <div className="footer__bottom meta">
          <p>© 2026 Deshawn Builds</p>
          <p>{site.location}</p>
        </div>
      </div>
    </footer>
  );
}
