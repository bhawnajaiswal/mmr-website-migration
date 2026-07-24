import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Male Infertility – MMR Hospital & IVF Center – Best IVF Center in Raipur",
  description: "MMR Hospital & IVF Center is the best IVF center in Raipur. We have highly experienced staff who provide world-class infertility treatment.",
  openGraph: {
    title: "Male Infertility – MMR Hospital & IVF Center – Best IVF Center in Raipur",
    description: "MMR Hospital & IVF Center is the best IVF center in Raipur. We have highly experienced staff who provide world-class infertility treatment.",
  }
};

export default function MaleInfertilityLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
