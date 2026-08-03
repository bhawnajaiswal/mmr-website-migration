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
      { title: "WHY MMR Hospital & IVF Center", url: "/why-mmr-hospital-ivf-center" },
      { title: "Consultation for Gynecology Problems", url: "/consultation" },
      { title: "Consultation for Renal Problems", url: "/consultation-for-renal-problems" }
    ]
  },
  {
    title: "IVF CARE",
    url: "/treatment-services",
    subItems: [
      { title: "IVF", url: "/ivf" },
      { title: "IUI", url: "/iui" },
      { title: "IVM", url: "/ivm" },
      { title: "Fertility Preservation..", url: "/fertility-preservation-2" },
      { title: "ICSI….", url: "/icsi-treatment" },
      { title: "Infertility men & women", url: "/infertility-men-women" },
      { title: "Ectopic Pregnancy..", url: "/ectopic-pregnancy-2" },
      { title: "Female Infertility", url: "/female-infertility" },
      { title: "Infertility Testing", url: "/infertility-testing" },
      { title: "Male Infertility", url: "/male-infertility" },
      { title: "Diagnostic", url: "/daignostic" }
    ]
  },
  {
    title: "Kidney care",
    url: "/renal-care-2",
    subItems: [
      { title: "CAPD", url: "/capd" },
      { title: "Evaluation of proteinuria", url: "/evaluation-of-proteinuria" },
      { title: "UTI ( urinary tract infection )", url: "/uti-urinary-tract-infection" }
    ]
  },
  /* {
    title: "FAQs",
    url: "/faqs"
  },
  {
    title: "About Us",
    url: "/about-us",
    subItems: [
      { title: "Our Expert Team", url: "/our-expert-team" },
      { title: "Facilities", url: "/facilities" },
      { title: "Our Philosophy", url: "/uti-urinary-tract-infection-2" },
      { title: "Infrastructure", url: "/infrastructure" }
    ]
  }, */
  {
    title: "Feedback",
    url: "/feedback"
  },
  {
    title: "Contact Us",
    url: "/contact-us"
  },
  {
    title: "News & Blogs",
    url: "/news-blogs"
  }
];
