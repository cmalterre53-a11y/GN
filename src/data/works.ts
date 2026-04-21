export interface Work {
  id: number;
  title: string;
  number: string;
  image: string | null;
}

export const works: Work[] = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: "Œuvre sans titre",
  number: `N°${String(i + 1).padStart(2, "0")}`,
  image:
    [
      "/images/oeuvre-01.jpeg",
      "/images/oeuvre-02.jpeg",
      "/images/oeuvre-03.jpeg",
      "/images/oeuvre-04.jpeg",
      "/images/oeuvre-05.jpeg",
      "/images/oeuvre-06.jpeg",
      "/images/oeuvre-07.jpeg",
      "/images/oeuvre-08.jpeg",
    ][i] ?? null,
}));
