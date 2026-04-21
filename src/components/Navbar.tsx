"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/creations", label: "Créations" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between h-14 px-6 md:px-12 bg-nav border-b border-or">
      <Link
        href="/"
        className="font-cormorant font-light text-xl tracking-[0.12em] text-brun"
      >
        La Galerie GNM
      </Link>

      <ul className="flex gap-6 md:gap-8">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`small-caps text-sm tracking-wide transition-colors hover:text-or-moyen ${
                pathname === link.href
                  ? "text-or-moyen"
                  : "text-brun-lien"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
