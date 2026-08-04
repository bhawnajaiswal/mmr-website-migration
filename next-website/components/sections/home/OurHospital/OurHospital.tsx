import Container from "@/components/shared/Container/Container";
import { FACILITY_IMAGES } from "@/config/assets/facilities";
import styles from "./OurHospital.module.css";

export default function OurHospital() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.grid}>
          
          {/* Column 1: Text Content */}
          <div className={styles.textContent}>
            <h3 className={styles.subtitle}>Our Hospital</h3>
            <h2 className={styles.title}>
              We are available for 24/7 for your service.
            </h2>
            <p className={styles.description}>
              At MMR Hospital &amp; IVF Center, we understand that healthcare needs can
              arise at any time, which is why we are proud to offer round-the-clock
              services to our patients. Our dedicated team of medical professionals and
              support staff is available 24/7 to provide timely and compassionate care to
              those in need. Whether you require urgent medical attention, have
              questions about your treatment plan, or simply need reassurance, you can
              count on us to be there for you every step of the way. Your health and
              well-being are our top priorities, that&apos;s why we are the best IVF Center
              in Raipur, Chhattisgarh and we are committed to ensuring that you receive
              the highest quality care, day or night.&nbsp;
            </p>
          </div>

          {/* Column 2: Hospital Image */}
          <div className={styles.imageContent}>
            <img
              decoding="async"
              src={FACILITY_IMAGES.hospitalGeneral}
              alt="best ivf center in Raipur"
              className={styles.image}
            />
          </div>

        </div>
      </Container>
    </section>
  );
}
