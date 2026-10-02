"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { followNav, primaryNav } from "@/data/site";
import { isActive } from "@/lib/nav";

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="nav" data-open={open || undefined}>
      <div className="nav__bar">
        <Link href="/" className="nav__brand" aria-label="D BUILDS — home">
          D BUILDS<span className="accent">.</span>
        </Link>

        <nav className="nav__desktop" aria-label="Primary">
          <ul>
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="nav__link"
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={followNav.href}
            className="nav__follow"
            aria-current={pathname === followNav.href ? "page" : undefined}
          >
            {followNav.label} <span aria-hidden="true">↗</span>
          </Link>
        </nav>

        <MobileMenu open={open} setOpen={setOpen} pathname={pathname} />
      </div>
    </header>
  );
}
