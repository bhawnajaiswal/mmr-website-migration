import { MetadataRoute } from "next";
import { SITE } from "@/config/site";

const STATIC_ROUTES = [
  "",
  "/about-us",
  "/capd",
  "/consultation",
  "/consultation-for-renal-problems",
  "/contact-us",
  "/daignostic",
  "/ectopic-pregnancy-2",
  "/evaluation-of-proteinuria",
  "/facilities",
  "/faqs",
  "/female-infertility",
  "/fertility-preservation-2",
  "/icsi-treatment",
  "/infertility-men-women",
  "/infertility-testing",
  "/infrastructure",
  "/iui",
  "/ivf",
  "/ivm",
  "/male-infertility",
  "/news-blogs",
  "/our-expert-team",
  "/renal-care-2",
  "/treatment-services",
  "/uti-urinary-tract-infection",
  "/uti-urinary-tract-infection-2",
  "/why-mmr-hospital-ivf-center"
];

const BLOG_SLUGS = [
  "rising-infertility-rates-in-india-a-growing-concern",
  "the-reality-of-ivf-success-rates-what-you-need-to-know",
  "renal-replacement-therapy",
  "intervention-nephrology",
  "diagnosis"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = STATIC_ROUTES.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const blogEntries = BLOG_SLUGS.map((slug) => ({
    url: `${SITE.url}/news-blogs/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
