"use client";

import { useState } from "react";

const navLinks = [
  { href: "#strengths", label: "私の強み" },
  { href: "#services", label: "できること" },
  { href: "#works", label: "制作実績" },
  { href: "#process-pricing", label: "ご相談の流れ" },
] as const;

const navLinkClassName =
  "whitespace-nowrap text-label-md font-medium text-[#4A5568] transition-colors hover:text-primary-blue";

const contactButtonClassName =
  "inline-flex items-center rounded-full bg-primary px-6 py-2 text-label-md font-bold text-on-primary shadow-sm transition-all duration-200 ease-out hover:bg-primary/80 hover:shadow-md";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 w-full max-w-container-max items-center justify-between gap-3 px-4 sm:px-6 md:h-[72px]">
        <a
          className="min-w-0 flex-1 text-[13px] font-bold leading-snug text-primary sm:text-[15px] md:flex-none md:text-body-lg"
          href="#"
          onClick={closeMenu}
        >
          江口純一｜業務改善・自動化支援
        </a>
        <nav className="hidden shrink-0 items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a className={navLinkClassName} href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
          <a className={contactButtonClassName} href="#contact">
            無料相談
          </a>
        </nav>
        <button
          aria-controls="mobile-nav"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
          className="shrink-0 p-1 text-primary md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          type="button"
        >
          <span className="material-symbols-outlined">
            {isMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>
      <div
        className={`border-t border-outline-variant/40 bg-white/95 backdrop-blur-sm md:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
        id="mobile-nav"
      >
        <nav className="mx-auto flex max-w-container-max flex-col px-4 py-3 sm:px-6">
          {navLinks.map((link) => (
            <a
              className={`${navLinkClassName} block py-3`}
              href={link.href}
              key={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <a
            className={`${contactButtonClassName} mt-2 justify-center py-3`}
            href="#contact"
            onClick={closeMenu}
          >
            無料相談
          </a>
        </nav>
      </div>
    </header>
  );
}
