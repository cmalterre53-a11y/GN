import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — La Galerie GNM",
  description:
    "Contactez La Galerie GNM pour une commande, une question ou une œuvre sur mesure.",
};

export default function ContactPage() {
  return (
    <section className="bg-parchemin min-h-[calc(100vh-56px-52px)] flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md">
        <h1 className="font-cormorant font-light text-[36px] text-brun text-center mb-2">
          Contact
        </h1>
        <p className="font-eb text-brun-clair text-sm text-center mb-10">
          Pour une commande, une question ou une œuvre sur mesure
        </p>

        <form className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="name"
              className="small-caps text-or-moyen text-xs tracking-[0.14em]"
            >
              Nom
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="bg-nav border border-or px-3 py-2 font-eb text-sm text-brun outline-none focus:border-or-moyen transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="email"
              className="small-caps text-or-moyen text-xs tracking-[0.14em]"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="bg-nav border border-or px-3 py-2 font-eb text-sm text-brun outline-none focus:border-or-moyen transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="message"
              className="small-caps text-or-moyen text-xs tracking-[0.14em]"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              className="bg-nav border border-or px-3 py-2 font-eb text-sm text-brun outline-none focus:border-or-moyen transition-colors resize-y"
            />
          </div>

          <button
            type="submit"
            className="mt-2 bg-brun text-footer-text font-eb text-sm small-caps tracking-[0.14em] px-6 py-2.5 transition-all duration-200 hover:bg-footer hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(196,150,74,0.3)]"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
}
