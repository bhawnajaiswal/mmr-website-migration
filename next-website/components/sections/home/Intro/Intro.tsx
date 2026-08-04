import Link from "next/link";
import Container from "@/components/shared/Container/Container";
import Button from "@/components/shared/Button/Button";
import { SHARED_IMAGES } from "@/config/assets/shared";
import styles from "@/app/Home.module.css";

export default function Intro() {
  return (
    <section className={styles.introSection}>
      <Container className={styles.introContainer}>
        
        {/* Left Column: Content */}
        <div className={styles.introContent}>
          <span className={styles.introSub}>Best IVF Center in Raipur, Chhattisgarh.</span>
          
          <div className={styles.introTitle}>
            <h2>MMR Hospital &amp; IVF Center</h2>
          </div>
          
          <p className={styles.introText1}>
            Matruchhaya Medicare &amp; Research Pvt. Ltd.{" "}
            <Link href="/" style={{ color: "var(--color-primary)", textDecoration: "none", fontWeight: "600" }}>
              (MMR Hospital)
            </Link>{" "}
            is a 50 Bedded Super Speciality Health Service Provider in Infertility &amp; Nephrology Branch. Hospital provides Advanced Reproductive Technology (ART) in Raipur, Chhattisgarh. MMR Hospital &amp; IVF Center offers standardized and ethical infertility treatment like IVF, ICSL, and IMSL.
          </p>
          
          <p className={styles.introText2}>
            MMR Hospital provide all infertility treatment services IVF, IUI, ICSI, IVM, Fertility preservation, Infertility men &amp; women, Ectopic pregnancy, Infertility testing etc. We always serve best treatment to our patient. That&apos;s the reason that we are the Best IVF Center in Raipur.
          </p>
          
          {/* CTA Buttons Group */}
          <div className={styles.btnGroup}>
            <Button href="/about-us" variant="primary" className={styles.btnPrimary}>
              About Us &raquo;
            </Button>
            <Button href="/treatment-services" variant="secondary" className={styles.btnSecondary}>
              <i className="far fa-life-ring" aria-hidden="true" style={{ marginRight: "8px" }} />
              Our Services
            </Button>
          </div>
        </div>

        {/* Right Column: Modern 3-Image Grid Collage */}
        <div className={styles.collageGrid}>
          {/* Main Large Left Image */}
          <div className={styles.collageMain}>
            <img
              src={SHARED_IMAGES.ivfHeartGraphic}
              alt="best ivf center in Raipur"
              className={styles.collageImage}
              loading="lazy"
            />
          </div>
          
          {/* Right Top Image */}
          <div className={styles.collageSub1}>
            <img
              src={SHARED_IMAGES.ivfCellMicroscopeIllustration}
              alt="vitro fertilization human female cell microscopic view"
              className={styles.collageImage}
              loading="lazy"
            />
          </div>

          {/* Right Bottom Image */}
          <div className={styles.collageSub2}>
            <img
              src={SHARED_IMAGES.embryoSupportIllustration}
              alt="woman's hands support human embryo icon"
              className={styles.collageImage}
              loading="lazy"
            />
          </div>
        </div>

      </Container>
    </section>
  );
}
