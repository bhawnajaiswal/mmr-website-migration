import Link from "next/link";
import styles from "./Hero.module.css";

const STATS = [
  {
    icon: "fas fa-history",
    number: "15+",
    label: "Years Experience"
  },
  {
    icon: "fas fa-smile-beam",
    number: "5000+",
    label: "Happy Families"
  },
  {
    icon: "fas fa-user-md",
    number: "Expert",
    label: "Medical Team"
  },
  {
    icon: "fas fa-headset",
    number: "24/7",
    label: "Care & Support"
  },
  {
    icon: "fas fa-award",
    number: "NABH",
    label: "Accredited Hospital"
  }
];

const DIAGNOSTICS = [
  { icon: "fas fa-x-ray", label: "Digital X-Ray" },
  { icon: "fas fa-baby", label: "Ultrasound 2D / 3D / 4D" },
  { icon: "fas fa-circle-notch", label: "CT Scan" },
  { icon: "fas fa-magnet", label: "MRI" },
  { icon: "fas fa-flask", label: "Pathology Lab" },
  { icon: "fas fa-stethoscope", label: "Endoscopy" },
  { icon: "fas fa-tint", label: "Uroflowmetry" },
  { icon: "fas fa-heartbeat", label: "ECG" },
  { icon: "fas fa-running", label: "TMT" },
  { icon: "fas fa-lungs", label: "PFT" },
  { icon: "fas fa-brain", label: "EEG" },
  { icon: "fas fa-bolt", label: "NCV" },
  { icon: "fas fa-pager", label: "Holter Monitoring" }
];

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      {/* Decorative background plus icons */}
      <div className={`${styles.floatingPlus} ${styles.plus1}`}>+</div>
      <div className={`${styles.floatingPlus} ${styles.plus2}`}>+</div>
      <div className={`${styles.floatingPlus} ${styles.plus3}`}>+</div>

      <div className={styles.heroContainer}>
        {/* Left Column */}
        <div className={styles.leftColumn}>
          <div className={styles.contentGroup}>
            {/* Emergency Badge */}
            <div className={styles.emergencyBadge}>
              <i className="far fa-clock" />
              <span>24/7 Emergency &amp; Ambulance Service</span>
            </div>

            {/* Main Headline */}
            <h1 className={styles.heroTitle}>
              ONE STOP SOLUTION<br />
              FOR <span className={styles.colorKidney}>KIDNEY</span> &amp; <span className={styles.colorIvf}>IVF</span>
            </h1>

            {/* Supporting Text */}
            <p className={styles.heroSubtitle}>
              Advanced care. Compassionate approach.<br />Better outcomes.
            </p>

            {/* CTA Buttons */}
            <div className={styles.btnGroup}>
              <Link className={styles.appointmentBtn} href="/consultation">
                <i className="far fa-calendar-check" />
                Book an Appointment
              </Link>
              <a className={styles.callBtn} href="tel:+919244122040">
                <i className="fas fa-phone-alt" />
                Call Now
              </a>
            </div>

            {/* Two Service Cards */}
            <div className={styles.serviceCards}>
              {/* Kidney Care Card */}
              <div className={styles.serviceCard}>
                <div className={styles.serviceHeader}>
                  <div className={`${styles.serviceIcon} ${styles.bgKidney}`}>
                    <i className="fas fa-tint" />
                  </div>
                  <h3 className={styles.serviceTitle}>KIDNEY CARE</h3>
                </div>
                <ul className={styles.bulletList}>
                  <li>
                    <i className={`fas fa-check-circle ${styles.checkKidney}`} />
                    <span>Kidney Transplant</span>
                  </li>
                  <li>
                    <i className={`fas fa-check-circle ${styles.checkKidney}`} />
                    <span>Nephrology Care</span>
                  </li>
                  <li>
                    <i className={`fas fa-check-circle ${styles.checkKidney}`} />
                    <span>Dialysis &amp; CRRT</span>
                  </li>
                  <li>
                    <i className={`fas fa-check-circle ${styles.checkKidney}`} />
                    <span>Advanced ICU Support</span>
                  </li>
                  <li>
                    <i className={`fas fa-check-circle ${styles.checkKidney}`} />
                    <span>Urology Treatments</span>
                  </li>
                </ul>
              </div>

              {/* IVF Care Card */}
              <div className={styles.serviceCard}>
                <div className={styles.serviceHeader}>
                  <div className={`${styles.serviceIcon} ${styles.bgIvf}`}>
                    <i className="fas fa-baby" />
                  </div>
                  <h3 className={styles.serviceTitle}>IVF &amp; FERTILITY</h3>
                </div>
                <ul className={styles.bulletList}>
                  <li>
                    <i className={`fas fa-check-circle ${styles.checkIvf}`} />
                    <span>IVF &amp; ICSI</span>
                  </li>
                  <li>
                    <i className={`fas fa-check-circle ${styles.checkIvf}`} />
                    <span>Laparoscopy</span>
                  </li>
                  <li>
                    <i className={`fas fa-check-circle ${styles.checkIvf}`} />
                    <span>Fertility Evaluation</span>
                  </li>
                  <li>
                    <i className={`fas fa-check-circle ${styles.checkIvf}`} />
                    <span>Women&apos;s Health Care</span>
                  </li>
                  <li>
                    <i className={`fas fa-check-circle ${styles.checkIvf}`} />
                    <span>High-Risk Pregnancy Care</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column */}
        <div className={styles.rightColumn}>
          <div className={styles.doctorImageWrapper}>
            <img 
              src="/images/home_hero.png" 
              alt="MMR Hospital IVF &amp; Kidney Care Doctors and Building Facade" 
              className={styles.doctorImage}
            />
          </div>
        </div>
      </div>

      {/* Stats Strip */}
      <div className={styles.statsStrip}>
        {STATS.map((stat, idx) => (
          <div key={idx} className={styles.statsItem}>
            <div className={styles.statsIcon}>
              <i className={stat.icon} />
            </div>
            <div className={styles.statsText}>
              <span className={styles.statsNum}>{stat.number}</span>
              <span className={styles.statsLabel}>{stat.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Diagnostics Grid Section */}
      <div className={styles.diagnosticsContainer}>
        <div className={styles.diagnosticsDividerLine}>
          <span className={styles.dividerDot} />
          <h2 className={styles.diagnosticsTitle}>ADVANCED DIAGNOSTIC FACILITIES</h2>
          <span className={styles.dividerDot} />
        </div>
        
        <div className={styles.diagnosticsGrid}>
          {DIAGNOSTICS.map((diag, idx) => (
            <div key={idx} className={styles.diagnosticCard}>
              <div className={styles.diagnosticIcon}>
                <i className={diag.icon} />
              </div>
              <span className={styles.diagnosticLabel}>{diag.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Wave bottom transition divider */}
      <div className={styles.waveDivider}>
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          preserveAspectRatio="none" 
          className={styles.waveDividerSvg}
        >
          <path 
            d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,120L1320,120C1200,120,960,120,720,120C480,120,240,120,120,120L0,120Z" 
            fill="#ffffff" 
          />
        </svg>
      </div>
    </section>
  );
}