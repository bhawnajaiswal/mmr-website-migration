import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feedback – MMR Hospital & IVF Center – Best IVF Center in Raipur",
  description: "Discover a new standard of care at MMR Hospital, where our commitment to excellence is reflected in our top-notch facilities.",
  openGraph: {
    title: "Feedback – MMR Hospital & IVF Center – Best IVF Center in Raipur",
    description: "Discover a new standard of care at MMR Hospital, where our commitment to excellence is reflected in our top-notch facilities.",
  }
};

export default function FeedbackLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
