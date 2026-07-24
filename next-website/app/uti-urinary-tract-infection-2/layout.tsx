import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Philosophy – MMR Hospital & IVF Center – Best IVF Center in Raipur",
  description: "Experience healthcare with a human touch – where our philosophy revolves around your well-being. MMR Hospital is not just a healthcare provider; we are your partners in health.",
  openGraph: {
    title: "Our Philosophy – MMR Hospital & IVF Center – Best IVF Center in Raipur",
    description: "Experience healthcare with a human touch – where our philosophy revolves around your well-being. MMR Hospital is not just a healthcare provider; we are your partners in health.",
  }
};

export default function PhilosophyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
