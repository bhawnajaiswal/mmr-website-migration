import styles from "./Ivf.module.css";
import IvfHero from "@/components/sections/ivf/IvfHero";
import IvfIntro from "@/components/sections/ivf/IvfIntro";
import IvfProcess from "@/components/sections/ivf/IvfProcess";
import IvfWhyChoose from "@/components/sections/ivf/IvfWhyChoose";
import IvfFacilities from "@/components/sections/ivf/IvfFacilities";
import IvfCTA from "@/components/sections/ivf/IvfCTA";

export default function IvfPage() {
  return (
    <div className={styles.ivfContainer}>
      <main className="main-content">
        <IvfHero />
        <IvfIntro />
        <IvfProcess />
        <IvfWhyChoose />
        <IvfFacilities />
        <IvfCTA />
      </main>
    </div>
  );
}
