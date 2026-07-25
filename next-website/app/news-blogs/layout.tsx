import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Blogs – MMR Hospital & IVF Center – Best IVF Center in Raipur",
  description: "Stay updated with the latest news, updates, and informative medical blogs from MMR Hospital & IVF Center Raipur.",
  openGraph: {
    title: "News & Blogs – MMR Hospital & IVF Center – Best IVF Center in Raipur",
    description: "Stay updated with the latest news, updates, and informative medical blogs from MMR Hospital & IVF Center Raipur.",
  }
};

export default function NewsBlogsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
