import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { works } from "@/data/works";

interface Props {
  params: { id: string };
}

export function generateStaticParams() {
  return works.map((w) => ({ id: String(w.id) }));
}

export function generateMetadata({ params }: Props): Metadata {
  const work = works.find((w) => w.id === Number(params.id));
  return {
    title: work
      ? `${work.title} ${work.number} — La Galerie GNM`
      : "Œuvre introuvable",
  };
}

export default function WorkPage({ params }: Props) {
  const work = works.find((w) => w.id === Number(params.id));
  if (!work) return notFound();

  return (
    <>
      {/* ── Détail de l'œuvre ── */}
      <section className="bg-parchemin py-12 md:py-20 px-6 md:px-16 lg:px-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Image principale */}
          <div className="w-full aspect-[3/4] bg-placeholder border-[0.5px] border-or relative overflow-hidden">
            {work.image ? (
              <Image
                src={work.image}
                alt={`${work.title} ${work.number}`}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-or-moyen text-xs small-caps">
                  Image à venir
                </span>
              </div>
            )}
          </div>

          {/* Informations */}
          <div className="flex flex-col justify-center">
            <span className="small-caps text-brun-lien text-xs tracking-wide">
              {work.number}
            </span>
            <h1 className="font-cormorant font-light text-[32px] md:text-[38px] text-brun mt-1 mb-6">
              {work.title}
            </h1>

            <p className="font-eb text-sm text-brun-clair leading-[1.9] mb-8">
              Cette œuvre naît d&rsquo;une rencontre entre la matière et
              l&rsquo;imaginaire. Sur ce pot en terre cuite soigneusement
              choisi, GNM a laissé s&rsquo;installer un visage aux teintes
              profondes — bleu nuit, ocre brûlé, vert forêt. Chaque trait
              tracé au pinceau raconte une émotion silencieuse, une présence.
              L&rsquo;œuvre se dévoile à 360°, invitant le regard à ne jamais
              vraiment s&rsquo;arrêter.
            </p>

            <p className="font-eb text-sm text-brun mb-2">
              H 28 cm / Ø 14 cm
            </p>
            <p className="small-caps text-or-moyen text-xs tracking-[0.14em] mb-10">
              Pièce unique — vernis marin
            </p>

            <Link
              href="/creations"
              className="small-caps text-brun-lien text-xs tracking-wide hover:text-or-moyen transition-colors"
            >
              ← Retour à la galerie
            </Link>
          </div>
        </div>
      </section>

      {/* ── Carrousel (à venir) ── */}
      <section className="bg-sable border-t border-or py-16 md:py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <span className="small-caps text-or-moyen text-xs tracking-[0.22em] block mb-2">
            Le processus
          </span>
          <h2 className="font-cormorant font-light text-[28px] text-brun mb-10">
            La naissance de l&rsquo;œuvre
          </h2>
          <div className="bg-placeholder border-[0.5px] border-or py-16 flex items-center justify-center">
            <span className="text-or-moyen text-sm small-caps tracking-wide">
              Carrousel à venir
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
