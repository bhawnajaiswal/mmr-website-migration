import GynConsultationHero from "@/components/sections/consultation/GynConsultationHero/GynConsultationHero";
import GynConsultationForm from "@/components/sections/consultation/GynConsultationForm/GynConsultationForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MMR Hospital- Looking for gynecologist near me / Gyn near me",
  description: "If you are searching for gynecologist near me so get consultaion with best Gynecologist for your gynecology problem. MMR Hospital get best treatment for you.",
  openGraph: {
    title: "MMR Hospital- Looking for gynecologist near me / Gyn near me",
    description: "If you are searching for gynecologist near me so get consultaion with best Gynecologist for your gynecology problem. MMR Hospital get best treatment for you.",
  }
};

export default function ConsultationPage() {
  return (
    <main className="main-content">
      {/* Section 1: Hero Banner */}
      <GynConsultationHero />

      {/* Section 2: Content & Appointment Form */}
      <GynConsultationForm />
    </main>
  );
}
