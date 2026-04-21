import Link from "next/link";
import Image from "next/image";

const galleryItems = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  label: `Œuvre n°${String(i + 1).padStart(2, "0")}`,
  image: ["/images/oeuvre-01.jpeg", "/images/oeuvre-02.jpeg", "/images/oeuvre-03.jpeg", "/images/oeuvre-04.jpeg", "/images/oeuvre-05.jpeg", "/images/oeuvre-06.jpeg"][i] ?? null,
}));

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
              <div key={item.id} className="flex flex-col items-center">
                <div className="w-full aspect-square bg-placeholder border-[0.5px] border-or flex items-center justify-center relative overflow-hidden">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.label}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <span className="text-or-moyen text-xs small-caps">
                      Image
                    </span>
                  )}
                </div>
                <span className="small-caps text-brun-lien text-xs tracking-wide mt-3">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link
              href="/creations"
              className="small-caps text-or-moyen text-xs tracking-[0.14em] border-[0.5px] border-or px-6 py-2.5 transition-colors hover:bg-or hover:text-parchemin"
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
          className="small-caps text-or text-xs tracking-[0.14em] border-[0.5px] border-or px-6 py-2.5 transition-colors hover:bg-or hover:text-brun"
        >
          Écrire à GNM
        </Link>
      </section>
    </>
  );
}
