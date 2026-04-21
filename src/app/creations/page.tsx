import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { works } from "@/data/works";

export const metadata: Metadata = {
  title: "Les Créations — La Galerie GNM",
  description:
    "Découvrez toutes les œuvres uniques de La Galerie GNM. Pots en terre cuite peints à la main.",
};

export default function CreationsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-parchemin border-b border-or py-16 md:py-20 px-6 text-center">
        <h1 className="font-cormorant font-light text-[36px] md:text-[42px] text-brun">
          Les Créations
        </h1>
        <p className="font-eb text-brun-clair text-sm mt-2">
          Chaque œuvre est unique au monde
        </p>
      </section>

      {/* ── Grille ── */}
      <section className="bg-parchemin py-16 md:py-20 px-6 md:px-16 lg:px-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work) => (
            <Link
              key={work.id}
              href={`/creations/${work.id}`}
              className="flex flex-col items-center group transition-transform duration-[250ms] ease-out hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(61,32,8,0.15)]"
            >
              <div className="w-full aspect-[3/4] bg-placeholder border-[0.5px] border-or relative overflow-hidden">
                {work.image ? (
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover transition-transform duration-[350ms] ease-out group-hover:scale-105"
                  />
                ) : (
                  <span className="text-or-moyen text-xs small-caps flex items-center justify-center h-full">
                    Image
                  </span>
                )}
              </div>
              <span className="font-cormorant text-brun text-base mt-3 group-hover:text-or transition-colors duration-200">
                {work.title}
              </span>
              <span className="small-caps text-brun-lien text-xs tracking-wide group-hover:text-or transition-colors duration-200">
                {work.number}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
