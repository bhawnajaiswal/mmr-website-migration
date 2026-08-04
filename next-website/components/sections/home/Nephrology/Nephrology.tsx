import Container from "@/components/shared/Container/Container";
import { SHARED_IMAGES } from "@/config/assets/shared";
import styles from "./Nephrology.module.css";

export default function Nephrology() {
  return (
    <section className={styles.nephrologySection}>
      
      {/* Decoupled Scoped Top Pyramids Divider */}
      <div className={`${styles.shapeDivider} ${styles.shapeDividerTop}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className={styles.shapeDividerSvg}>
          <path d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9" />
        </svg>
      </div>

      {/* Decoupled Scoped Bottom Pyramids Negative Divider */}
      <div className={`${styles.shapeDivider} ${styles.shapeDividerBottom}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className={styles.shapeDividerSvg}>
          <path d="M761.9,40.6L643.1,24L333.9,93.8L0.1,1H0v99h1000V1" />
        </svg>
      </div>

      <Container className={styles.nephrologyContainer}>
        {/* Left Column: Modern 3-Image Grid Collage */}
        <div className={styles.collageGrid}>
          {/* Main Large Left Image */}
          <div className={styles.collageMain}>
            <img
              src={SHARED_IMAGES.kidneyCareGraphic}
              alt="best ivf center in Raipur"
              className={styles.collageImage}
              loading="lazy"
            />
          </div>
          
          {/* Right Top Image */}
          <div className={styles.collageSub1}>
            <img
              src="/wp-content/uploads/2024/03/senior-man-suffering-from-kidney-pain-home-scaled.jpg"
              alt="senior man suffering from kidney pain"
              className={styles.collageImage}
              loading="lazy"
            />
          </div>

          {/* Right Bottom Image */}
          <div className={styles.collageSub2}>
            <img
              src="/wp-content/uploads/2024/03/urethra-kidneys-man-with-hands-holding-her-crotch-male-anatomy-concept-scaled.jpg"
              alt="kidneys man with hands holding crotch"
              className={styles.collageImage}
              loading="lazy"
            />
          </div>
        </div>

        {/* Right Column: Text Content */}
        <div className={styles.nephrologyContent}>
          <span className={styles.nephrologySub}>Modern &amp; Result Oriented</span>
          
          <div className={styles.nephrologyTitle}>
            <h2>Best Nephrology service</h2>
          </div>
          
          <p className={styles.nephrologyText1}>
            MMR has super speciality in nephology service. We have state of art dialysis service, Renal transplant Service. Hospital provides High-quality care for Nephrological and Urological diseases.
          </p>
          
          <p className={styles.nephrologyText2}>
            From managing chronic kidney disease and hypertension to offering dialysis and kidney transplant services, we are committed to improving the quality of life for our patients. With state-of-the-art facilities and a patient-centered approach, MMR Hospital ensures that every patient receives the highest standard of care and support on their journey to kidney health. Trust us to be your partner in managing kidney-related conditions with expertise, compassion, and dedication.
          </p>

          <a href="/renal-care-2" className={styles.nephrologyButton}>
            Learn more &raquo;
          </a>
        </div>
      </Container>
    </section>
  );
}
