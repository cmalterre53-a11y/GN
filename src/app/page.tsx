import Link from "next/link";
import Image from "next/image";

import { works } from "@/data/works";

const galleryItems = works.slice(0, 6);

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-parchemin flex flex-col items-center py-16 md:py-24 px-6 border-b border-or">
        {/* Monogramme */}
        <h1 className="font-cormorant font-light text-[54px] tracking-[0.08em] text-brun leading-none">
          GNM
        </h1>
        <span className="small-caps text-[10px] tracking-[0.28em] text-or-moyen mt-1">
          La Galerie
        </span>

        {/* Bloc texte */}
        <h3 className="font-cormorant font-light text-lg tracking-[0.15em] text-brun mt-10 mb-4">
          Œuvres uniques signées GNM
        </h3>
        <p className="font-eb text-sm leading-[1.9] text-brun-clair text-center max-w-[480px]">
          Chaque pot est une œuvre d&rsquo;art à part entière. Peints à la main
          sur terre cuite, sans calque ni reproduction, ils sont par essence
          uniques au monde — comme l&rsquo;est chaque personne qui les possède.
        </p>

        {/* Image d'accueil */}
        <div className="relative mt-10 mb-10 w-52 md:w-60">
          <Image
            src="/images/medallion.webp"
            alt="Œuvre GNM — portrait peint sur terre cuite"
            width={240}
            height={300}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Citation */}
        <blockquote className="max-w-lg text-center font-cormorant italic text-brun-clair text-lg leading-relaxed">
          «&nbsp;L&rsquo;art est une âme offerte au regard de l&rsquo;autre, sa
          vérité naît dans l&rsquo;émotion qu&rsquo;il éveille.&nbsp;»
        </blockquote>

        {/* Tagline */}
        <p className="small-caps text-or-moyen text-xs tracking-[0.18em] mt-6">
          Œuvres uniques signées GNM
        </p>
      </section>

      {/* ── La Création ── */}
      <section className="bg-parchemin py-16 md:py-20 px-6 md:px-16 lg:px-32">
        <div className="max-w-3xl mx-auto">
          <span className="small-caps text-or-moyen text-xs tracking-[0.22em] block mb-2">
            Le processus
          </span>
          <h2 className="font-cormorant font-light text-[28px] text-brun mb-8">
            La Création
          </h2>

          <div className="font-eb text-sm text-brun-clair leading-[1.95] space-y-5">
            <p>
              GNM sélectionne avec soin chaque pot en terre cuite selon la
              qualité de son support. Portée par l&rsquo;inspiration du moment,
              elle laisse naître ses compositions avec liberté, avant de les
              confier au pot et de tracer au crayon, comme un secret murmuré à
              la matière.
            </p>
            <p>
              De ses mains, elle peint chaque pot avec la même ardeur
              qu&rsquo;elle offrirait à une toile, geste après geste, comme si
              chaque courbe était unique. Chaque centimètre de terre devient
              territoire d&rsquo;expression. GNM habite la surface entière,
              sans laisser le silence s&rsquo;installer. L&rsquo;œuvre se
              dévoile à 360°, invitant le regard à voyager sans fin, et
              offrant à son gardien le privilège de changer de monde,
              simplement en tournant le pot.
            </p>
            <p>
              Chaque œuvre reçoit enfin son dernier souffle&nbsp;; un vernis
              marin posé avec patience, couche après couche, pour que la
              beauté résiste au temps et s&rsquo;épanouisse aussi bien sous
              la lumière d&rsquo;un salon qu&rsquo;à la caresse du vent.
            </p>
          </div>
        </div>
      </section>

      {/* ── Aperçu Galerie ── */}
      <section className="bg-sable border-t border-or py-16 md:py-20 px-6 md:px-16 lg:px-32">
        <div className="max-w-5xl mx-auto">
          <span className="small-caps text-or-moyen text-xs tracking-[0.22em] block mb-2">
            Les œuvres
          </span>
          <h2 className="font-cormorant font-light text-[28px] text-brun mb-10">
            Galerie
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <Link
                key={item.id}
                href={`/creations/${item.id}`}
                className="flex flex-col items-center group transition-transform duration-[250ms] ease-out hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(61,32,8,0.15)]"
              >
                <div className="w-full aspect-square bg-placeholder border-[0.5px] border-or relative overflow-hidden">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.number}
                      fill
                      className="object-cover transition-transform duration-[350ms] ease-out group-hover:scale-105"
                    />
                  ) : (
                    <span className="text-or-moyen text-xs small-caps flex items-center justify-center h-full">
                      Image
                    </span>
                  )}
                </div>
                <span className="small-caps text-brun-lien text-xs tracking-wide mt-3 group-hover:text-or transition-colors duration-200">
                  {item.number}
                </span>
              </Link>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link
              href="/creations"
              className="small-caps text-or-moyen text-xs tracking-[0.14em] border-[0.5px] border-or px-6 py-2.5 transition-all duration-200 hover:bg-or hover:text-parchemin hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(196,150,74,0.3)]"
            >
              Voir toutes les créations
            </Link>
          </div>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section className="bg-brun py-16 md:py-20 px-6 text-center">
        <h2 className="font-cormorant font-light text-[28px] text-footer-text mb-3">
          Entrer en contact
        </h2>
        <p className="text-or text-sm mb-8">
          Pour une commande, une question ou une œuvre sur mesure
        </p>
        <Link
          href="/contact"
          className="small-caps text-or text-xs tracking-[0.14em] border-[0.5px] border-or px-6 py-2.5 transition-all duration-200 hover:bg-or hover:text-brun hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(196,150,74,0.3)]"
        >
          Écrire à GNM
        </Link>
      </section>
    </>
  );
}
