import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Expert Team – MMR Hospital & IVF Center – Best IVF Center in Raipur",
  description: "Meet the team of skilled and compassionate healthcare professionals at MMR Hospital & IVF Center, Raipur.",
  openGraph: {
    title: "Our Expert Team – MMR Hospital & IVF Center – Best IVF Center in Raipur",
    description: "Meet the team of skilled and compassionate healthcare professionals at MMR Hospital & IVF Center, Raipur.",
  }
};

export default function OurExpertTeamLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
