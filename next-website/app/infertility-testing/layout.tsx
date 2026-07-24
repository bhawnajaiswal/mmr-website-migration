import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Infertility Testing – MMR Hospital & IVF Center – Best IVF Center in Raipur",
  description: "MMR Hospital & IVF Center is the best IVF center in Raipur. We have highly experienced staff who provide world-class infertility treatment.",
  openGraph: {
    title: "Infertility Testing – MMR Hospital & IVF Center – Best IVF Center in Raipur",
    description: "MMR Hospital & IVF Center is the best IVF center in Raipur. We have highly experienced staff who provide world-class infertility treatment.",
  }
};

export default function InfertilityTestingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
