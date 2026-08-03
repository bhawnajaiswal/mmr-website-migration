"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import Link from "next/link";
import styles from "./ExpertTeam.module.css";

// Helper component for Intersection Observer Scroll Reveal
function ScrollRevealSection({ children, className = "", style }: { children: ReactNode; className?: string; style?: React.CSSProperties }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      style={style}
      className={`${className} ${styles.scrollReveal} ${isVisible ? styles.revealVisible : ""}`}
    >
      {children}
    </div>
  );
}

export default function OurExpertTeamPage() {
  return (
    <div className={styles.container}>
      <main className="main-content">
        
        {/* Section 1: Hero Banner */}
        <section className={styles.heroSection}>
          <div className={styles.heroOverlay} />
          
          <div className={`${styles.shapeDivider} ${styles.shapeDividerBottom}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className={styles.shapeDividerSvg}>
              <path d="M0,6V0h1000v100L0,6z" />
            </svg>
          </div>

          <div className={styles.heroContent}>
            <span className={styles.heroSubtitle}>MMR Hospital &amp; IVF Center</span>
            <div className={styles.heroDivider} />
            <div className={styles.heroTitle}>
              <h1>
                Meet the team
              </h1>
            </div>
            <Link className={styles.heroButton} href="/consultation/">
              <i aria-hidden="true" className="fas fa-envelope-open" style={{ marginRight: "8px" }} />
              BOOK AN APPOINTMENT
            </Link>
          </div>
        </section>

        {/* Section 2: Intro Wording Paragraph */}
        <ScrollRevealSection className={styles.introSection}>
          <div className={styles.introContainer}>
            <div className={styles.introTitle}>
              <h2>
                At MMR Hospital &amp; IVF Center, our team is comprised of skilled and compassionate healthcare professionals who are committed to providing exceptional care to our patients. Led by our founders, Dr. Anuradha Tibrewal Chowdhary and Dr. Prawash Chowdhary, our team includes experts in the fields of reproductive medicine, nephrology, embryology, nursing, and support staff.
              </h2>
            </div>
          </div>
        </ScrollRevealSection>

        {/* Section 3: Not just a team, We're a Family block */}
        <section className={styles.familySection}>
          {/* Decoupled Scoped Top Divider */}
          <div className={`${styles.shapeDivider} ${styles.shapeDividerTop}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className={`${styles.shapeDividerSvg} ${styles.shapeDividerFillLight}`}>
              <path d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9" />
            </svg>
          </div>

          {/* Decoupled Scoped Bottom Divider */}
          <div className={`${styles.shapeDivider} ${styles.shapeDividerBottom}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className={styles.shapeDividerSvg}>
              <path d="M761.9,40.6L643.1,24L333.9,93.8L0.1,1H0v99h1000V1" />
            </svg>
          </div>

          <div className={styles.familyContainer}>
            {/* Left Column: Image collage */}
            <div className={styles.familyLeft}>
              <div className={styles.collageCol1}>
                <ScrollRevealSection className={styles.collageImageWrapper}>
                  <img
                    src="/wp-content/uploads/2024/03/Untitled-design-29.png"
                    alt="Team Collage 1"
                    className={styles.collageImage}
                  />
                </ScrollRevealSection>
              </div>

              <div className={styles.collageCol2}>
                <ScrollRevealSection className={styles.collageImageWrapper}>
                  {/* Restored broken pexels photo by using elementor thumb version */}
                  <img
                    src="/wp-content/uploads/elementor/thumbs/pexels-photo-356040-qmekftngdhxzzbauem2fve3va6wnam4rxpha8l3b20.jpg"
                    alt="Team Collage 2"
                    className={styles.collageImage}
                  />
                </ScrollRevealSection>
                <ScrollRevealSection className={styles.collageImageWrapper}>
                  <img
                    src="/wp-content/uploads/2023/11/Layer-616-2.png"
                    alt="Best IVF Center Logo"
                    className={styles.collageImage}
                  />
                </ScrollRevealSection>
              </div>
            </div>

            {/* Right Column: Titles & Paragraphs */}
            <ScrollRevealSection className={styles.familyRight}>
              <span className={styles.familySubtitle}>Not just a team</span>
              <h2 className={styles.familyTitle}>We&apos;re a Family.</h2>
              <p className={styles.familyDesc}>
                We are not just a team we&apos;re a family also, our staff members are our families .
              </p>
            </ScrollRevealSection>
          </div>
        </section>

        {/* Section 4: Founders Heading Banner */}
        <section className={styles.foundersHeader}>
          <h2 className={styles.foundersHeaderTitle}>Founders</h2>
        </section>

        {/* Section 5: Profiles Section (Dr. Anuradha & Dr. Prawash) */}
        <section className={styles.profilesSection}>
          
          {/* DR. ANURADHA TIBREWAL CHOWDHARY */}
          <div className={styles.profileContainer}>
            <ScrollRevealSection className={styles.founderHeroCard}>
              <div className={styles.founderImageWrapper}>
                <img
                  src="/wp-content/uploads/2024/04/Untitled-design-66.png"
                  alt="Dr. Anuradha Tibrewal Chowdhary"
                  className={styles.founderImage}
                />
              </div>
              <div className={styles.founderContent}>
                <span className={styles.founderRole}>Founder</span>
                <div className={styles.founderName}>
                  <h2>Dr. Anuradha Tibrewal Chowdhary <span>(MD, DNB, FNB, MNAMS)</span></h2>
                </div>
                <p className={styles.founderDesc}>
                  As a renowned fertility specialist, Dr. Anuradha brings extensive experience and expertise in reproductive medicine to our center. She is dedicated to helping individuals and couples overcome fertility challenges and achieve their dream of parenthood through advanced assisted reproductive technologies.
                </p>
              </div>
            </ScrollRevealSection>

            {/* Dr. Anuradha detailed grid */}
            <div className={styles.founderDetailsGrid}>
              <ScrollRevealSection className={styles.detailsCard}>
                <div className={styles.detailsCardHeader}>
                  <div className={styles.detailsCardIcon}>
                    <i className="fas fa-graduation-cap" />
                  </div>
                  <h3 className={styles.detailsCardTitle}>Details of Academic Qualifications</h3>
                </div>
                <div className={styles.detailsCardContent}>
                  <ul>
                    <li><strong>SSC (March 1993)</strong> Board of secondary education Orissa Ramdeo high school</li>
                    <li><strong>HSC (March 1995)</strong> Ravenshaw college, Cuttack Utkal University Orissa</li>
                    <li><strong>Graduation:</strong> MBBS (Bachelor of Medicine &amp; Surgery).1996-2001,V.S S M college Burla, Sambalpur University Orissa. <strong>Received merit scholarship and Gold Medal in Gynaecology</strong></li>
                    <li><strong>Post Graduation:</strong> MD (Doctor of Medicine) in obstetrics &amp; gynecology. 2004-2007,SCB Medical college Cuttack Utkal university Orissa. <strong>Received Gold Medal.</strong></li>
                  </ul>
                </div>
              </ScrollRevealSection>

              <ScrollRevealSection className={styles.detailsCard}>
                <div className={styles.detailsCardHeader}>
                  <div className={styles.detailsCardIcon}>
                    <i className="fas fa-clipboard-list" />
                  </div>
                  <h3 className={styles.detailsCardTitle}>Other Examinations Passed</h3>
                </div>
                <div className={styles.detailsCardContent}>
                  <ul>
                    <li>Fellowship in reproductive Medicine from Surat under Dr. Purnima Nadkarni</li>
                    <li>Diploma in ART (Dubai, Bourn Hall Fertility Clinic under guidance of Dr Mettler and Dr KarunakaraMarikinti)</li>
                    <li>Certified course in ART: NUH Singapore, under Dr. P.C. Wong.</li>
                    <li>Trained in Endoscopy surgery from Cuttack, Hyderabad</li>
                    <li>Trained in urogynecology from K.G.M.C Chennai Tamilnadu under Dr.Rajamaheshwari</li>
                  </ul>
                </div>
              </ScrollRevealSection>

              <ScrollRevealSection className={styles.detailsCard}>
                <div className={styles.detailsCardHeader}>
                  <div className={styles.detailsCardIcon}>
                    <i className="fas fa-history" />
                  </div>
                  <h3 className={styles.detailsCardTitle}>Professional Experience</h3>
                </div>
                <div className={styles.detailsCardContent}>
                  <ul>
                    <li>Internship training (1 year) VSS Medical college Burla</li>
                    <li>Residency in Obgyn (3 year) : in SCB medical college Cuttack</li>
                    <li>(1 year) experience as gynecology Specialist 2007 to 2008 in CHC Khariar road</li>
                    <li>Working as consultant in kamineni group of hospitals Hyderabad(A.P)</li>
                    <li>Faculty appointment held in India as Asst Professor in kamineni institute of medical science Hyderabad (A.P.) 2008 to 2011</li>
                    <li>Working as consultant in fertility centre at Hyderabad</li>
                    <li>Working as consultant in Ramkrishna Care Hospital Raipur from 2011 to May - 2016.</li>
                    <li>Worked as A director in Matrutva fertility center Raipur</li>
                    <li>Experience as a trainer of DNB student.</li>
                    <li>Experience as a trainer in FOGSI recognised laparoscopy training center, colposcopy training center and ultra sound training center Hyderabad (A.P)</li>
                    <li>Experience of managing gynaecological oncology cases at Acharya Harihara institute of cancer in Cuttack</li>
                    <li>Working as A consultant in Reproductive Medicine, the Genome the Fertility Center, Raipur from 2016 to till date</li>
                  </ul>
                </div>
              </ScrollRevealSection>

              <ScrollRevealSection className={styles.detailsCard}>
                <div className={styles.detailsCardHeader}>
                  <div className={styles.detailsCardIcon}>
                    <i className="fas fa-stethoscope" />
                  </div>
                  <h3 className={styles.detailsCardTitle}>Clinical Skills</h3>
                </div>
                <div className={styles.detailsCardContent}>
                  <ul>
                    <li><strong>Already done more than 1000 cycles of ICSI / 2000 cycles of IUI, TESA, TESE, MESA and Surrogacy</strong></li>
                    <li>Able to do hysteroscopy and laparoscopy with major therapeutic procedure</li>
                    <li>Already done more than 3000 TLH and fertility enhancing endoscopic surgery</li>
                    <li>More than 1000 TAH and more than 2000 LSCS</li>
                    <li>More than 500 cases of VH</li>
                    <li>More than 2000 cases of high risk pregnancy and critical care obstetrics</li>
                  </ul>
                </div>
              </ScrollRevealSection>

              <ScrollRevealSection className={styles.detailsCard}>
                <div className={styles.detailsCardHeader}>
                  <div className={styles.detailsCardIcon}>
                    <i className="fas fa-award" />
                  </div>
                  <h3 className={styles.detailsCardTitle}>Papers Presented at National Conferences</h3>
                </div>
                <div className={styles.detailsCardContent}>
                  <ul>
                    <li><strong>Paper Presentation –</strong> Case presentation on an unusual case of mullerian anomaly in all India conference FOGSI (Aurangabad) and state conference Bhubaneswar Orissa Govt. (<strong>Got 1<sup>st</sup> prize)</strong></li>
                    <li><strong>Paper Presentation - </strong>A comparison study of fertility outcome of endometriosis with progesterone, danazol and GnRh in all India national conference of FOGSI 2006 (Kochi)</li>
                    <li><strong>Paper presentation - </strong>To evaluate the association of MTH folate reductase polymorphism with development of preeclampsia and eclampsia in primigravida in NATIONAL ALL INDIA CONFERENCE 2010 at Guwahati &amp; appreciated by owning “<strong>C S DAWN AWARD”</strong></li>
                    <li><strong>Paper presentation - </strong>A study of long term clinical effectiveness and patient satisfaction after endometrial ablation using thermal balloon in NATIONAL ALL CONFERENCE 2011 at Hyderabad</li>
                    <li><strong>Poster presentation</strong> - Post partum AKI, Convulsion Think beyond PIH at Ahmedabad in October 2017 (<strong>Got 1<sup>st</sup> prize).</strong></li>
                    <li><strong>Paper presentation</strong><strong> -</strong> UTI, Fatigue and pancytopenia in post menopause lady - Do obstetrics history carry importance presented in AOGCG in 2018 at Raipur <strong>(Got 2<sup>nd</sup> prize)</strong></li>
                    <li><strong>Paper Presentation-</strong> Rare case of HUS manage successful by plasmapheresis 2018 AICOG, Bhubaneswar</li>
                    <li><strong>Paper presentation</strong><strong>-</strong> Incidence, etiological profile and outcome of postpartum acute kidney injury in Chhattisgarh - A single centre Retrospective study: presented in AOGCG 2019 at Raipur.</li>
                  </ul>
                </div>
              </ScrollRevealSection>

              <ScrollRevealSection className={styles.detailsCard}>
                <div className={styles.detailsCardHeader}>
                  <div className={styles.detailsCardIcon}>
                    <i className="fas fa-book" />
                  </div>
                  <h3 className={styles.detailsCardTitle}>Publications</h3>
                </div>
                <div className={styles.detailsCardContent}>
                  <ul>
                    <li>Uterine fibroids of more than 18 weeks size associated with DVT in pelvis and pulmonary embolism - 4 case report published in JOGI, 2014, 64(supplement), 5.70.</li>
                    <li>A rare case report of Pheochromocytoma complicating pregnancy – Journal of Indian Obstetrics and Gynaecology, Jan-Mar 2019, Vol 9, No 1.</li>
                    <li>Post partum acute kidney injury in tertiary care centre - Single centre experience from central India: Accepted for publication in Saudi journal of kidney disease and transplantation.</li>
                    <li>Goodpasture syndrome with P-ANCA vasculitis in pregnancy - Published in Journal of Indian Obstetrics and Gynaecology, Apr-Jun, Volume 10. No. 2.</li>
                    <li>Post Partum AKI with Convulsion, Think beyond PPH - Under publication in Journal of Indian Obstetrics and Gynaecology.</li>
                  </ul>
                </div>
              </ScrollRevealSection>

              <ScrollRevealSection className={styles.detailsCard}>
                <div className={styles.detailsCardHeader}>
                  <div className={styles.detailsCardIcon}>
                    <i className="fas fa-edit" />
                  </div>
                  <h3 className={styles.detailsCardTitle}>Author of Chapter</h3>
                </div>
                <div className={styles.detailsCardContent}>
                  <p>1) Chaudhary Anuradha (2018). Human Chorionic Gonadotropin. In Seema Pandey, Pratik Tambe (Edin). Handbook of Drugs in Infertility (69-81). New Delhi, Jaypee brothers medical publisher.</p>
                  <p>2) Chaudhary Anuradha (2019). OHSS and its Management. In Gita ganguly Mukherjee, Gautam Khastgir, Siddhartha Chatterjee (Edin). Practical Guide In Assisted Reproductive Technology (183-187). New Delhi, The health sciences publisher.</p>
                </div>
              </ScrollRevealSection>

              <ScrollRevealSection className={styles.detailsCard}>
                <div className={styles.detailsCardHeader}>
                  <div className={styles.detailsCardIcon}>
                    <i className="fas fa-users" />
                  </div>
                  <h3 className={styles.detailsCardTitle}>Membership of Scientific Organizations</h3>
                </div>
                <div className={styles.detailsCardContent}>
                  <ul>
                    <li>Life member of IMA, FOGSI, AOGO, IFS, ESHRE, IMS, CGOGS, ASPIRE, ASRM.</li>
                  </ul>
                </div>
              </ScrollRevealSection>
            </div>
          </div>

          {/* DR. PRAWASH CHOWDHARY */}
          <div className={styles.profileContainer} style={{ marginTop: "100px" }}>
            <ScrollRevealSection className={styles.founderHeroCard}>
              <div className={styles.founderImageWrapper}>
                <img
                  src="/wp-content/uploads/2024/04/Untitled-design-67.png"
                  alt="Dr. Prawash Chowdhary"
                  className={styles.founderImage}
                />
              </div>
              <div className={styles.founderContent}>
                <span className={styles.founderRole}>Co Founder</span>
                <div className={styles.founderName}>
                  <h2>Dr. Prawash Chowdhary</h2>
                </div>
                <p className={styles.founderDesc}>
                  With a specialization in nephrology, Dr. Prawash leads our Kidney Care department with compassion and clinical excellence. He is committed to providing comprehensive care to patients with kidney-related conditions, including dialysis, transplant evaluation, and management of kidney diseases.
                </p>
              </div>
            </ScrollRevealSection>

            {/* Dr. Prawash detailed grid */}
            <div className={styles.founderDetailsGrid}>
              <ScrollRevealSection className={styles.detailsCard}>
                <div className={styles.detailsCardHeader}>
                  <div className={styles.detailsCardIcon}>
                    <i className="fas fa-graduation-cap" />
                  </div>
                  <h3 className={styles.detailsCardTitle}>Details of Academic Qualifications</h3>
                </div>
                <div className={styles.detailsCardContent}>
                  <ul>
                    <li>Secondary School Certificate(March 1993) :- Shri Balaji vidya mandir higher Secondary School, Affiliated to Madhyamic Shiksha Mandal Bhopal (M.P.) Receive distinction in mathematics &amp; Science.</li>
                    <li>Higher Secondary Certificate (March 1995) :- Shri Balaji vidya mandir higher Secondary School, Affiliated to Madhyamic Shiksha Mandal Bhopal (M.P.) Receive distinction in Physics.</li>
                    <li>Graduation: MBBS (Bachelor of Medicine &amp; Surgery). 1996-2001, Pt. J.N.M Medical College Raipur affiliated to Ravishankar Shukla University Receive Merit scholarship twice and certificate of merit in anatomy</li>
                    <li>Post Graduation: MD (Doctor of Medicine) in Internal Medicine. 2003-2006, MKCG Medical College. Affiliated to Behrampur University.</li>
                    <li>DNB (Nephrology) 2008- 2011 Kamineni institute of Medical science Hyderabad (A.P.) Affiliated to DNB Board New Delhi.</li>
                    <li>MNAMS - Awarded by National Academy of Medical science (India) in year 2019.</li>
                    <li>Fellow of American society of Nephrology (FASN) - Awarded by American society of Nephrology Postgraduate Certificate in organ Transplantation - From University of Liverpool, London (UK). Passed in Distinction.</li>
                    <li>Clinical Nephropathology Certificate Program - From International society of Nephrology ANIO, 2021.</li>
                    <li>Complete course of Abdominal Ultrasonography - From Bilmed USG Institute.</li>
                    <li>Certificate Course in Infection control from The European Academy of CME, approved and accredited by the Federation of Royal College of Physician of the United Kingdom in the year 2019-2020.</li>
                    <li>Fellow of the Royal College of Physicians - June 2022 (RCP Code 279167) Royal College of Physicians, London, UK</li>
                    <li>Interventional Nephrologist (ISN IN Scholar, Japan) - Awarded by International society of Nephrology. Received Scholarship.</li>
                  </ul>
                </div>
              </ScrollRevealSection>

              <ScrollRevealSection className={styles.detailsCard}>
                <div className={styles.detailsCardHeader}>
                  <div className={styles.detailsCardIcon}>
                    <i className="fas fa-clipboard-list" />
                  </div>
                  <h3 className={styles.detailsCardTitle}>Course and Workshop Attended</h3>
                </div>
                <div className={styles.detailsCardContent}>
                  <p>1) Research Methodology Workshop by Indian Society of Nephrology from 1st August 2010 to 1st November 2020.</p>
                  <p>2) PG Online Medico-Legal Course by Apex Institute of Medico Legal System on 10 September 2020.</p>
                  <p>3) Myoclinic-2019 Invasive Fungal Infections: Continuing Certification Programme by the International Society For Human and Animal Mycology and Fungal Infection Study Forum in February 4, 2020.</p>
                  <p>4) Cath-Lab Workshop: Hands on Tunneled Catheter and Central Vein Stenosis Management by AVATAR</p>
                  <p>5) Advanced Course on Updates in Nephrology (2020-2021): HealthValens Foundation and ERA-EDTA.</p>
                  <p>6) Vascular doppler Hands-on training in diagnostic ultrasound imaging from Selvi school of sonology on 25/9/2021.</p>
                  <p>7) Central Vein Catheter Learning Program on 13/08/2021 by ISN Academy.</p>
                  <p>8) POCUS Curriculum on 11/08/2021 by ISN Academy.</p>
                  <p>9) A masterclass on practical aspects on peritoneal dialysis on 24th september 2021 by ISN-SRC initiative.</p>
                </div>
              </ScrollRevealSection>

              <ScrollRevealSection className={styles.detailsCard}>
                <div className={styles.detailsCardHeader}>
                  <div className={styles.detailsCardIcon}>
                    <i className="fas fa-history" />
                  </div>
                  <h3 className={styles.detailsCardTitle}>Professional Experience</h3>
                </div>
                <div className={styles.detailsCardContent}>
                  <ul>
                    <li>Internship training ( 1 year) Dr. B.R. Ambedkar Hospital Raipur (C.G.)</li>
                    <li>Residency in internal medicine (3 year) : internal medicine residency at M.K.C.G Medical college Berhampur (Orissa) rotated through infectious wards, Cardiology, Nephrology and Critical care department</li>
                    <li>Medical officer in charge (1 year) : medical officer in charge of PHC of state Government Hospital Sunki Koraput, where got practical successfully experience in handling rural / Village area patient</li>
                    <li>Senior registrar (6 month) : senior registrar in intensive medical unit of Sun Hospital Cuttack (Odisha). Managing critical care patient including ventilator</li>
                    <li>Senior registrar (9 month) : senior registrar in acute medical care at Ramkrishna Care Hospital Raipur(C.G.) manage both ICU and indoor patient, including trauma &amp; emergency .</li>
                    <li>Senior residency in Nephrology (3 year): Senior residency in Kamineni institute private limited Hyderabad (A.P.) leading to the degree DNB (Nephrology). (Trained to manage acute and chronic renal failure patients, haemodialysis, CAPD, CRRT, kidney transplant patients, paediatric renal problems, and renal problems in intensive care unit patients )</li>
                    <li>Senior consultant Nephrologist and Renal Transplant Physician in Ramkrishna care hospital from 2011.</li>
                    <li>Honorary visiting specialist as nephrologist in SECR Raipur Division since 5 years from 2018.</li>
                  </ul>
                </div>
              </ScrollRevealSection>

              <ScrollRevealSection className={styles.detailsCard}>
                <div className={styles.detailsCardHeader}>
                  <div className={styles.detailsCardIcon}>
                    <i className="fas fa-award" />
                  </div>
                  <h3 className={styles.detailsCardTitle}>Award and Recognition</h3>
                </div>
                <div className={styles.detailsCardContent}>
                  <ul>
                    <li>Awarded “Arogya Ratan” in Nagpur during Zero Mile ICON award 2022 ceremony from Zero Mile foundation for serving people.</li>
                    <li>Awarded “Man of the year 21-22” as Best Nephrologist and Transplant physician by Divya Bhaskar in Gujarat from Hon Cabinet minister of Gujarat Shri Purnesh Modi and Shri Arjun singh Chauhan.</li>
                    <li>Awarded “ICONS OF HEALTH” 2019 of Chhattisgarh in the field of nephrology received from shree Bhupesh baghel, chief minister of Chhattisgarh.</li>
                    <li>Recognised by department of health and family welfare of Chhattisgarh to serve remote area Supebeda</li>
                    <li>Appreciated with “Shri Agrasen Corona Karambir Samman” in 2020 by Chhattisgarh Agrawal Samaj.</li>
                    <li>Appreciated by “JCI Raipur Medico City” in July 2017 for contribution in field of nephrology for serving people of Chhattisgarh</li>
                    <li>Appreciated by “Mahaveer Intercontinental Service Organisation” in 28th Dec. 2018.</li>
                    <li>Appreciated by “Rotary Club of Raigarh Steel City” in Oct. 2018.</li>
                    <li>Appreciated by “MARWARI YUVA MANCH” in 28 June 2014.</li>
                    <li>Receive Merit scholarship twice and certificate of merit in anatomy</li>
                  </ul>
                </div>
              </ScrollRevealSection>
            </div>
          </div>

        </section>

        {/* Section 6: Bottom Recruitment Banner */}
        <section
          className={styles.ctaSection}
          style={{
            backgroundImage: "url('/wp-content/uploads/2024/03/happy-young-sri-lankan-parents-with-baby-scaled.jpg')"
          }}
        >
          <div className={styles.ctaOverlay} />

          <ScrollRevealSection className={styles.ctaContainer}>
            <span className={styles.ctaSubtitle}>MMR HOSPITAL &amp; IVF CENTER</span>
            <div className={styles.ctaTitle}>
              <h2>We are the best in IVF treatment &amp; Kidney care also.</h2>
            </div>
            {/* Preserving production quirk: unlinked button */}
            <Link className={styles.ctaButton} href="#">
              <i aria-hidden="true" className="fas fa-envelope-open" style={{ marginRight: "8px" }} />
              Apply Today
            </Link>
          </ScrollRevealSection>
        </section>

      </main>
    </div>
  );
}
