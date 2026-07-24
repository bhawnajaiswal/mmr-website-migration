"use client";

import styles from "@/app/ivf/Ivf.module.css";

export default function IvfProcess() {
  const steps = [
    {
      num: "01",
      icon: "fas fa-comments",
      title: "Initial Consultation",
      desc: "Your journey begins with an in-depth consultation with one of our experienced fertility specialists. During this appointment, we will review your medical history, discuss your fertility goals, and recommend appropriate diagnostic tests to assess your reproductive health."
    },
    {
      num: "02",
      icon: "fas fa-capsules",
      title: "Ovarian Stimulation",
      desc: "In preparation for IVF, we use medications to stimulate the ovaries to produce multiple eggs. Close monitoring and ultrasound examinations are performed to track follicular development."
    },
    {
      num: "03",
      icon: "fas fa-procedures",
      title: "Egg Retrieval",
      desc: "Once the eggs have matured, they are retrieved from the ovaries using a minimally invasive procedure called transvaginal ultrasound-guided aspiration. This procedure is performed under sedation to ensure your comfort."
    },
    {
      num: "04",
      icon: "fas fa-vial",
      title: "Fertilization & Embryo Culture",
      desc: "The retrieved eggs are then fertilized with sperm in the laboratory. Our embryologists carefully monitor embryo development over the next few days, assessing their quality and viability."
    },
    {
      num: "05",
      icon: "fas fa-syringe",
      title: "Embryo Transfer",
      desc: "The highest-quality embryos are selected for transfer into the uterus. This procedure is typically performed 3 to 5 days after egg retrieval and involves placing the embryos directly into the uterine cavity using a thin catheter."
    },
    {
      num: "06",
      icon: "fas fa-baby",
      title: "Pregnancy Test & Care",
      desc: "Approximately two weeks after embryo transfer, a pregnancy test is performed to determine if the treatment was successful. Our team provides ongoing support and guidance throughout your IVF journey."
    }
  ];

  return (
    <section
      className={styles.processSection}
      style={{
        backgroundImage: "url('/wp-content/uploads/2024/03/matt-jones-67226-unsplash.jpg')",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed"
      }}
    >
      <div className={styles.processOverlay} />

      <div className={styles.processContainer}>
        {/* Section Title Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTitle}>
            <h2>Our IVF Process</h2>
          </div>
          <div className={styles.sectionDivider} />
        </div>

        {/* 6 Steps Grid Layout */}
        <div className={styles.processGrid}>
          {steps.map((step) => (
            <div key={step.num} className={styles.processCard}>
              <div className={styles.processHeader}>
                <span className={styles.processNumber}>{step.num}</span>
                <div className={styles.processIcon}>
                  <i className={step.icon} />
                </div>
              </div>
              <h3 className={styles.processCardTitle}>{step.title}</h3>
              <p className={styles.processCardDesc}>{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
