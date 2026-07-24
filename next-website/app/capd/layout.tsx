import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CAPD – MMR Hospital & IVF Center – Best IVF Center in Raipur",
  description: "MMR Hospital & IVF Center is the best IVF center in Raipur. We have highly experienced staff who provide world-class infertility treatment.",
  openGraph: {
    title: "CAPD – MMR Hospital & IVF Center – Best IVF Center in Raipur",
    description: "MMR Hospital & IVF Center is the best IVF center in Raipur. We have highly experienced staff who provide world-class infertility treatment.",
  }
};

export default function CapdLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
