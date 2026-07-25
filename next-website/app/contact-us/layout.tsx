import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us – MMR Hospital & IVF Center – Best IVF Center in Raipur",
  description: "Get in touch with MMR Hospital & IVF Center Raipur for appointments, feedback, and other inquiries.",
  openGraph: {
    title: "Contact Us – MMR Hospital & IVF Center – Best IVF Center in Raipur",
    description: "Get in touch with MMR Hospital & IVF Center Raipur for appointments, feedback, and other inquiries.",
  }
};

export default function ContactUsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
