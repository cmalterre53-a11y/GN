import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Les Créations — La Galerie GNM",
  description:
    "Découvrez toutes les œuvres uniques de La Galerie GNM. Pots en terre cuite peints à la main.",
};

const works = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: `Œuvre sans titre`,
  number: `N°${String(i + 1).padStart(2, "0")}`,
  image: ["/images/oeuvre-01.jpeg", "/images/oeuvre-02.jpeg", "/images/oeuvre-03.jpeg", "/images/oeuvre-04.jpeg", "/images/oeuvre-05.jpeg", "/images/oeuvre-06.jpeg", "/images/oeuvre-07.jpeg", "/images/oeuvre-08.jpeg"][i] ?? null,
}));

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
            <div key={work.id} className="flex flex-col items-center">
              <div className="w-full aspect-[3/4] bg-placeholder border-[0.5px] border-or flex items-center justify-center relative overflow-hidden">
                {work.image ? (
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <span className="text-or-moyen text-xs small-caps">
                    Image
                  </span>
                )}
              </div>
              <span className="font-cormorant text-brun text-base mt-3">
                {work.title}
              </span>
              <span className="small-caps text-brun-lien text-xs tracking-wide">
                {work.number}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
