import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UTI ( urinary tract infection ) – MMR Hospital & IVF Center – Best IVF Center in Raipur",
  description: "MMR Hospital & IVF Center is the best IVF center in Raipur. We have highly experienced staff who provide world-class infertility treatment.",
  openGraph: {
    title: "UTI ( urinary tract infection ) – MMR Hospital & IVF Center – Best IVF Center in Raipur",
    description: "MMR Hospital & IVF Center is the best IVF center in Raipur. We have highly experienced staff who provide world-class infertility treatment.",
  }
};

export default function UtiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
