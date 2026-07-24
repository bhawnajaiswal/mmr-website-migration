import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Infrastructure – MMR Hospital & IVF Center – Best IVF Center in Raipur",
  description: "Our key concern is to ensure that your health and comfort receives equal attention and you are given the best possible care once you enter into our hospital premise.",
  openGraph: {
    title: "Infrastructure – MMR Hospital & IVF Center – Best IVF Center in Raipur",
    description: "Our key concern is to ensure that your health and comfort receives equal attention and you are given the best possible care once you enter into our hospital premise.",
  }
};

export default function InfrastructureLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
