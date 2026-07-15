export interface NavItem {
  title: string;
  url: string;
  subItems?: NavItem[];
}

export const NAVIGATION_ITEMS: NavItem[] = [
  {
    title: "Home",
    url: "/",
    subItems: [
      { title: "Why Matruchhaya Hospitals", url: "/why-matruchhaya-hospitals" },
      { title: "Consultation for Gynecology Problems", url: "/consultation" },
      { title: "Consultation for Renal Problems", url: "/consultation-for-renal-problems" }
    ]
  },
  {
    title: "Women’s Healthcare & Fertility Center",
    url: "/female-fertility-2-2",
    subItems: [
      { title: "Female Infertility", url: "/female-infertility" },
      { title: "Male Infertility", url: "/male-infertility" },
      { title: "Other Conditions", url: "/womens-healthcare-fertility-center/other-conditions" },
      {
        title: "Fertility Treatments",
        url: "/womens-healthcare-fertility-center/fertility-treatments",
        subItems: [
          { title: "Male Fertility Treatments", url: "/womens-healthcare-fertility-center/male-fertility-treatments" },
          { title: "Female Fertility Treatments", url: "/womens-healthcare-fertility-center/female-fertility-treatments" },
          { title: "Fertility Preservation", url: "/fertility-preservation" },
          { title: "Fertility Problems", url: "/womens-healthcare-fertility-center/fertility-problems" }
        ]
      },
      { title: "Pere Menopausal & Menopausal", url: "/womens-healthcare-fertility-center/pere-menopausal-menopausal" },
      { title: "Adolescent Problems", url: "/womens-healthcare-fertility-center/adolescent-problems" }
    ]
  },
  {
    title: "Procedure & Services",
    url: "/procedure-services",
    subItems: [
      { title: "Fertility Guide", url: "/patient-zone/fertility-guide" },
      { title: "Genomics", url: "/womens-healthcare-fertility-center/genomics" },
      { title: "Fertility Journey", url: "/fertility-journey" },
      { title: "IUI – Intra Uterine Insemination", url: "/iui-intra-uterine-insemination" },
      { title: "IVF – In vitro Fertilization", url: "/ivf-in-vitro-fertilization" },
      { title: "IVM – In Vitro Maturation of Oocytes", url: "/ivm-in-vitro-maturation-of-oocytes" },
      { title: "Fertility Preservation", url: "/womens-healthcare-fertility-center/fertility-preservation" },
      { title: "ICSI", url: "/womens-healthcare-fertility-center/icsi" },
      { title: "Ectopic Pregnancy", url: "/ectopic-pregnancy" },
      { title: "Other Procedure", url: "/womens-healthcare-fertility-center/other-procedure" }
    ]
  },
  {
    title: "Renal Care",
    url: "/renal-care",
    subItems: [
      {
        title: "Diagnosis",
        url: "/renal-care/diagnosis",
        subItems: [
          { title: "Male Diagnosis", url: "/womens-healthcare-fertility-center/male-diagnosis" },
          { title: "Female Diagnosis", url: "/womens-healthcare-fertility-center/female-diagnosis" }
        ]
      },
      {
        title: "Chronic Kidney Disease",
        url: "/chromic-kidney-disease",
        subItems: [
          { title: "Kidney Stones", url: "/kidney-stones" },
          { title: "Polycystic Kidney Disease", url: "/polycystic-kidny-disease" },
          { title: "Glomerulonephritis", url: "/glomenrulonephritis" },
          { title: "Interstitial Nephritis", url: "/interstritial-nephritis" }
        ]
      },
      { title: "Intervention Nephrology", url: "/renal-care/intervention-nephrology" }
    ]
  },
  {
    title: "About",
    url: "/about",
    subItems: [
      { title: "Founders", url: "/founders" },
      { title: "Facilities", url: "/facilities" },
      { title: "Philosophy", url: "/philosophy" },
      { title: "Infrastructure", url: "/infrastructure" },
      { title: "Our Philosophy", url: "/our-philosophy" }
    ]
  },
  {
    title: "Patient Zone",
    url: "/patient-zone",
    subItems: [
      { title: "Intensive Renal Care Unit", url: "/renal-care/intensive-renal-care-unit" },
      { title: "Career", url: "/career" }
    ]
  },
  {
    title: "Contact",
    url: "/contact"
  }
];
