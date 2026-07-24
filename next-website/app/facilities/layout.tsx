import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Facilities – MMR Hospital & IVF Center – Best IVF Center in Raipur",
  description: "Discover a new standard of care at MMR Hospital, where our commitment to excellence is reflected in our top-notch facilities.",
  openGraph: {
    title: "Facilities – MMR Hospital & IVF Center – Best IVF Center in Raipur",
    description: "Discover a new standard of care at MMR Hospital, where our commitment to excellence is reflected in our top-notch facilities.",
  }
};

export default function FacilitiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
