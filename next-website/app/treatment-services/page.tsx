import ServicesHero from "@/components/sections/treatment-services/ServicesHero/ServicesHero";
import TreatmentSection from "@/components/sections/treatment-services/TreatmentSection/TreatmentSection";
import ServicesCTA from "@/components/sections/treatment-services/ServicesCTA/ServicesCTA";
import styles from "@/app/TreatmentPage.module.css";

interface TreatmentData {
  secId: string;
  innerSecId: string;
  imgColId: string;
  textColId: string;
  imgWidgetId: string;
  textWidgetId: string;
  btnWidgetId?: string;
  title: string;
  desc: string;
  imgSrc: string;
  imgAlt?: string;
  iconSrc?: string;
  buttonUrl: string;
  reverseLayout: boolean;
}

export default function TreatmentServicesPage() {
  const treatments: TreatmentData[] = [
    {
      secId: "7647be26",
      innerSecId: "375df5e4",
      imgColId: "7fa062a5",
      textColId: "4f12b2a5",
      imgWidgetId: "190eb009",
      textWidgetId: "28342d3c",
      title: "IVF",
      desc: "In vitro fertilization (IVF) is a reproductive technology that assists individuals or couples in achieving pregnancy when other methods have not been successful. Women’s healthcare in the context of IVF involves a range of medical services and support to optimize the chances of successful conception, a healthy pregnancy, and a positive outcome for both the mother and the child. Here are key aspects of women’s healthcare in the context of IVF:",
      imgSrc: "/wp-content/uploads/2024/04/Untitled-design-45.png",
      iconSrc: "/wp-content/uploads/2024/03/1.png",
      buttonUrl: "/ivf",
      reverseLayout: false,
    },
    {
      secId: "15cd8a42",
      innerSecId: "705ad3f5",
      imgColId: "4c2b21c7",
      textColId: "4d1fa996",
      imgWidgetId: "eeb38aa",
      textWidgetId: "7b6ccb9",
      title: "IUI",
      desc: "Intrauterine Insemination (IUI) is a fertility treatment that involves placing sperm directly into a woman’s uterus to facilitate fertilization and increase the chances of pregnancy. IUI is often recommended for couples facing infertility due to various reasons, such as low sperm count, unexplained infertility, cervical mucus issues, or mild male factor infertility. Here’s an overview of the IUI process.",
      imgSrc: "/wp-content/uploads/2024/04/Untitled-design-47.png",
      iconSrc: "/wp-content/uploads/2024/03/2.png",
      buttonUrl: "/iui",
      reverseLayout: true,
    },
    {
      secId: "4d192a85",
      innerSecId: "7555d889",
      imgColId: "4fad6f1e",
      textColId: "4203f450",
      imgWidgetId: "0261271",
      textWidgetId: "3b4ec229",
      title: "IVM",
      desc: "Vitro Maturation (IVM) is a fertility treatment technique that involves the retrieval and maturation of immature eggs (oocytes) outside the body before they are fertilized. This procedure is an alternative to traditional in vitro fertilization (IVF), where mature eggs are collected after ovarian stimulation. IVM is particularly useful for certain groups of patients, and it offers some advantages in terms of reduced hormonal stimulation.",
      imgSrc: "/wp-content/uploads/2024/04/Untitled-design-48.png",
      iconSrc: "/wp-content/uploads/2024/03/4.png",
      buttonUrl: "/ivm",
      reverseLayout: false,
    },
    {
      secId: "78558c0f",
      innerSecId: "653df552",
      imgColId: "5618389a",
      textColId: "57cfc92a",
      imgWidgetId: "80a7672",
      textWidgetId: "382890f",
      title: "Fertility preservation",
      desc: "Fertility preservation refers to the process of saving or protecting eggs, sperm, or reproductive tissue so that individuals can have the option of having biological children in the future",
      imgSrc: "/wp-content/uploads/2024/04/Untitled-design-62.png",
      iconSrc: "/wp-content/uploads/2024/03/3.png",
      buttonUrl: "/fertility-preservation-2",
      reverseLayout: true,
    },
    {
      secId: "fc7bfdd",
      innerSecId: "21f759d",
      imgColId: "f3b25fc",
      textColId: "d557abb",
      imgWidgetId: "ffef285",
      textWidgetId: "6dbd1e8",
      title: "ICSI",
      desc: "ICSI stands for Intracytoplasmic Sperm Injection. It is an assisted reproductive technology (ART) technique used in cases of severe male infertility or when previous attempts at fertilization through in vitro fertilization (IVF) have failed",
      imgSrc: "/wp-content/uploads/2024/04/Untitled-design-49.png",
      iconSrc: "/wp-content/uploads/2024/03/1.png",
      buttonUrl: "/icsi-treatment",
      reverseLayout: false,
    },
    {
      secId: "3391099",
      innerSecId: "92309cb",
      imgColId: "06dd8ef",
      textColId: "91db85f",
      imgWidgetId: "ec0c91d",
      textWidgetId: "9bc826e",
      title: "Infertility men & women",
      desc: "Infertility is the inability of a couple to conceive after a year of regular, unprotected intercourse. Both men and women can face infertility issues.<br><br>Men's Infertility: Common causes include low sperm count, poor sperm mobility, hormonal imbalances, and issues like blockages in the reproductive tract. Lifestyle factors, such as smoking, excessive alcohol use, and obesity, can also contribute.<br><br>Women's Infertility: Causes include ovulation disorders, blocked fallopian tubes, endometriosis, and age-related decline in fertility. Conditions like PCOS (Polycystic Ovary Syndrome) and hormonal imbalances are also major factors.<br><br>Both can be treated through medical interventions like medications, surgeries, or assisted reproductive techniques as IVF.",
      imgSrc: "/wp-content/uploads/2024/04/Untitled-design-56.png",
      iconSrc: "/wp-content/uploads/2024/03/1.png",
      buttonUrl: "/infertility-men-women",
      reverseLayout: true,
    },
    {
      secId: "3d3ebed",
      innerSecId: "cb68f3d",
      imgColId: "44d7172",
      textColId: "6c27ef3",
      imgWidgetId: "b6eb1c7",
      textWidgetId: "450c4d3",
      title: "Ectopic pregnancy",
      desc: "An ectopic pregnancy occurs when a fertilized egg implants and begins to develop outside of the uterus, typically in one of the fallopian tubes. This type of pregnancy is not viable and poses a serious risk to the woman’s health. Ectopic pregnancies require prompt medical attention and intervention",
      imgSrc: "/wp-content/uploads/2024/04/Untitled-design-51.png",
      iconSrc: "/wp-content/uploads/2024/04/Untitled-design-51.png",
      buttonUrl: "/ectopic-pregnancy-2",
      reverseLayout: false,
    },
    {
      secId: "2a3d697",
      innerSecId: "7d2dfad",
      imgColId: "d5752cd",
      textColId: "82918d8",
      imgWidgetId: "6753a71",
      textWidgetId: "3a31dd8",
      title: "Female fertility",
      desc: "Female fertility refers to a woman's ability to conceive and carry a pregnancy to term. It depends on several factors, including the regular release of healthy eggs during ovulation, the condition of the reproductive organs (such as the fallopian tubes and uterus), and hormonal balance. Age plays a crucial role in female fertility, with the chances of conception typically declining after the age of 35.<br><br>Common issues affecting female fertility include ovulation disorders, blocked fallopian tubes, endometriosis, and conditions like Polycystic Ovary Syndrome (PCOS). Treatments for fertility problems range from medications to assist ovulation, surgical procedures, and assisted reproductive technologies like IVF. Healthy lifestyle choices, such as maintaining a balanced diet and managing stress, can also positively impact fertility.",
      imgSrc: "/wp-content/uploads/2024/04/Untitled-design-57.png",
      iconSrc: "/wp-content/uploads/2024/03/1.png",
      buttonUrl: "/female-infertility",
      reverseLayout: true,
    },
    {
      secId: "28b7811",
      innerSecId: "0295e74",
      imgColId: "e87954c",
      textColId: "e464260",
      imgWidgetId: "08b7dfc",
      textWidgetId: "d245a87",
      title: "Male fertility",
      desc: "Male fertility refers to a man's ability to father a child. It primarily depends on the quantity and quality of sperm. Common factors that impact male fertility include:<br><br><strong>Sperm Count</strong>: The number of sperm produced, with low sperm count being a common cause of infertility.<br><br>S<b>perm Motility</b>: The ability of sperm to swim towards the egg.<br><br>S<b>perm Shape (Morphology)</b>: Healthy sperm have a normal shape that allows for easier fertilization.<br><br>Other factors, like hormonal imbalances, genetic conditions, lifestyle choices (smoking, alcohol use, obesity), and environmental exposures, can affect fertility. Medical treatments, lifestyle changes, or assisted reproductive techniques can help improve fertility in men.",
      imgSrc: "/wp-content/uploads/2024/04/Untitled-design-59.png",
      iconSrc: "/wp-content/uploads/2024/03/1.png",
      buttonUrl: "/male-infertility",
      reverseLayout: false,
    },
    {
      secId: "b26e018",
      innerSecId: "c7e2f30",
      imgColId: "6b9e68e",
      textColId: "51b9eac",
      imgWidgetId: "d56e0fe",
      textWidgetId: "4e2941b",
      btnWidgetId: "63b7601a",
      title: "Infertility testing",
      desc: "Infertility testing helps determine the cause of a couple's difficulty in conceiving. It involves evaluating both men and women.<br><br>F<b>or Men</b>: A semen analysis is commonly performed to check sperm count, motility, and shape. Hormone testing and genetic evaluations may also be done.<br><br>F<b>or Women:</b> Testing includes checking ovulation through blood tests, ultrasound exams to assess the ovaries and uterus, and hysterosalpingography (HSG) to evaluate the fallopian tubes.<br><br>",
      imgSrc: "/wp-content/uploads/2024/04/Untitled-design-61.png",
      iconSrc: "/wp-content/uploads/2024/03/1.png",
      buttonUrl: "/infertility-testing",
      reverseLayout: true,
    },
  ];

  return (
    <div className={styles.container}>
      <main className="main-content">
        {/* Section 1: Hero Banner */}
        <ServicesHero />

        {/* Section 2: Alternating Treatment Rows */}
        {treatments.map((treatment) => (
          <TreatmentSection key={treatment.secId} {...treatment} />
        ))}

        {/* Section 3: Safe & Modern CTA Banner */}
        <ServicesCTA />
      </main>

      {/* Scoped CSS overlays for mobile grid stacking & hover animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .responsive-grid-split {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          .grid-image-col {
            order: 1 !important;
          }
          .grid-image-col img {
            max-width: 100% !important;
          }
        }
        .hover-scale-img:hover {
          transform: scale(1.03) !important;
        }
      ` }} />
    </div>
  );
}
