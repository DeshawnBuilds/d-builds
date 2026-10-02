"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { followNav, pillars, primaryNav } from "@/data/site";
import { isActive } from "@/lib/nav";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  pathname: string;
};

export default function MobileMenu({ open, setOpen, pathname }: Props) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    root.classList.add("menu-open");
    panelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onResize = () => {
      if (window.matchMedia("(min-width: 960px)").matches) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      root.classList.remove("menu-open");
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open, setOpen]);

  const close = () => setOpen(false);
  const items = [{ label: "Home", href: "/" }, ...primaryNav];

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen(!open)}
      >
        <span className="menu-toggle__label" aria-hidden="true">
          {open ? "Close" : "Menu"}
        </span>
        <span className="menu-toggle__icon" aria-hidden="true">
          <span />
          <span />
        </span>
      </button>

      <div
        id="mobile-menu"
        ref={panelRef}
        className="mobile-menu"
        data-open={open || undefined}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile" className="mobile-menu__inner">
          <ol className="mobile-menu__list">
            {items.map((item, i) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href} style={{ "--i": i } as React.CSSProperties}>
                  <Link
                    href={item.href}
                    onClick={close}
                    tabIndex={open ? 0 : -1}
                    aria-current={active ? "page" : undefined}
                    className="mobile-menu__link"
                  >
                    <span className="mobile-menu__num" aria-hidden="true">
                      {String(i).padStart(2, "0")}
                    </span>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ol>

          <Link
            href={followNav.href}
            onClick={close}
            tabIndex={open ? 0 : -1}
            className="mobile-menu__follow"
          >
            {followNav.label} <span aria-hidden="true">↗</span>
          </Link>

          <p className="mobile-menu__meta meta">
            {pillars.map((p) => p.title).join(" · ")}
          </p>
        </nav>
      </div>
    </>
  );
}
