"use client";

import Link from "next/link";
import styles from "@/app/ivf/Ivf.module.css";

export default function IvfIntro() {
  return (
    <section className={styles.introSection}>
      <div className={styles.introContainer}>
        
        {/* Left Side: Content */}
        <div className={styles.introContent}>
          <div className={styles.introTitle}>
            <h2>In Vitro Fertilization (IVF) Services at MMR Hospital &amp; IVF Center</h2>
          </div>
          
          <p className={styles.introText1}>
            Welcome to MMR Hospital &amp; IVF Center, where we specialize in providing comprehensive and compassionate IVF services to individuals and couples struggling with infertility. Our state-of-the-art facility, led by experienced fertility specialists, is dedicated to helping you achieve your dream of parenthood through personalized and advanced reproductive care.
          </p>
          
          <p className={styles.introText2}>
            In Vitro Fertilization (IVF) is a fertility treatment that involves fertilizing eggs with sperm outside the body in a laboratory setting. The resulting embryos are then carefully monitored and selected for transfer into the uterus, with the goal of establishing a successful pregnancy.
          </p>

          <Link className={styles.introButton} href="/our-expert-team/">
            Know about our experts..
          </Link>
        </div>

        {/* Right Side: Image with shadow/rounded corners */}
        <div className={styles.introImageWrapper}>
          <img
            src="/wp-content/uploads/2024/08/MMR-Hospital-1.png"
            alt="MMR IVF Embryology Lab"
            className={styles.introImage}
          />
        </div>

      </div>
    </section>
  );
}
