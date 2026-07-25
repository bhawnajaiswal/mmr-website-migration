import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SubPageHero from "@/components/sections/shared/SubPageHero/SubPageHero";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const blogPostsData: {
  [key: string]: {
    id: string;
    title: string;
    date: string;
    excerpt: string;
    image: string;
    cssFile?: string;
    isElementor: boolean;
    sections?: Array<{
      title?: string;
      content: string;
    }>;
  };
} = {
  "rising-infertility-rates-in-india-a-growing-concern": {
    id: "7048",
    title: "Rising Infertility Rates in India: A Growing Concern",
    date: "August 30, 2024",
    excerpt: "Rising Infertility Rates in India: A Growing Concern",
    image: "/wp-content/uploads/2024/04/MMR-Hospital-IVF-Center-1024-x-1024-px-1.png",
    cssFile: "/wp-content/uploads/elementor/css/post-7048.css",
    isElementor: true,
    sections: [
      {
        title: "Introduction",
        content: "<p>In a country like India, where family and children are considered the cornerstone of society, infertility is a topic that is often hushed up. However, the ground reality is that infertility rates are rising at an alarming pace across the country. According to various health organizations and IVF specialists, approximately 10% to 15% of married couples in India experience fertility problems. What was once seen as a rare occurrence is now a major public health concern.</p>"
      },
      {
        content: "<p><strong>Key Causes of Infertility</strong><br />There are several reasons behind the increasing infertility rates in India, ranging from environmental issues to lifestyle shifts:<br />1. <strong>Late Marriages &amp; Delayed Childbearing:</strong> With career priorities taking precedence, many couples are delaying marriage and childbearing. A woman's fertility peaks in her 20s and begins to decline gradually after 30, and more rapidly after 35.<br />2. <strong>Sedentary Lifestyle &amp; Poor Diet:</strong> Lack of physical activity, rising obesity levels, consumption of processed foods, and high stress levels significantly impact hormonal balance, affecting both male and female fertility.<br />3. <strong>Environmental Pollution &amp; Toxins:</strong> Exposure to pollutants, chemicals, and toxins in everyday life has been linked to declining sperm count in men and ovarian dysfunction in women.<br />4. <strong>Medical Conditions:</strong> Rising prevalence of Polycystic Ovary Syndrome (PCOS), endometriosis, and thyroid disorders among women, and low sperm motility/count in men, are key factors.</p>"
      }
    ]
  },
  "the-reality-of-ivf-success-rates-what-you-need-to-know": {
    id: "7084",
    title: "The Reality of IVF Success Rates: What You Need to Know",
    date: "August 30, 2024",
    excerpt: "Rising Infertility Rates in India: A Growing Concern", // duplicate quirk preserved
    image: "/wp-content/uploads/2024/04/MMR-Hospital-IVF-Center-1024-x-1024-px-1.png",
    cssFile: "/wp-content/uploads/elementor/css/post-7084.css",
    isElementor: true,
    sections: [
      {
        title: "Introduction",
        content: "<p>In vitro fertilization (IVF) has become a beacon of hope for millions of couples around the world facing infertility. However, as the demand for IVF grows, so do the misconceptions surrounding its success rates. Many couples embark on their IVF journey expecting a guaranteed pregnancy on the first attempt. To navigate this path successfully, it is crucial to understand the realistic expectations and factors that influence IVF success rates.</p>"
      },
      {
        content: "<p><strong>What Influences IVF Success Rates?</strong><br />IVF success rates are influenced by a variety of factors, and it is rarely a one-size-fits-all scenario:<br />1. <strong>Maternal Age:</strong> Age is the single most critical factor in IVF success. Younger women have healthier and higher quality eggs, leading to higher success rates. Success rates decline significantly for women over the age of 37.<br />2. <strong>Cause of Infertility:</strong> The underlying reason for infertility plays a key role. While IVF is highly effective for issues like blocked fallopian tubes, success rates may vary for severe male factor infertility or advanced endometriosis.<br />3. <strong>Lifestyle Factors:</strong> Smoking, excessive alcohol consumption, obesity, and high stress levels can negatively impact the success of IVF treatments. Adopting a healthy lifestyle prior to starting a cycle is highly recommended.<br />4. <strong>Embryo Quality &amp; Transfer:</strong> The quality of the embryos developed in the lab and the precision of the transfer process are critical. Modern techniques like pre-implantation genetic testing (PGT) help select the healthiest embryos for transfer.</p>"
      }
    ]
  },
  "renal-replacement-therapy": {
    id: "3295",
    title: "Renal Replacement Therapy",
    date: "November 7, 2023",
    excerpt: "Treatments for individuals with kidney failure...",
    image: "/wp-content/uploads/2023/11/renal-replacement-th.png",
    isElementor: false,
    sections: [
      {
        content: "<p>Treatments for individuals with kidney failure, providing essential support when their kidneys can no longer adequately filter waste and excess fluid from the blood.</p>"
      }
    ]
  },
  "intervention-nephrology": {
    id: "3297",
    title: "Intervention Nephrology",
    date: "November 7, 2023",
    excerpt: "Renal biopsy is a diagnostic procedure...",
    image: "/wp-content/uploads/2023/11/intervention-nephrology-th.png",
    isElementor: false,
    sections: [
      {
        content: "<p>Renal biopsy is a diagnostic procedure where a small sample of kidney tissue is extracted for examination to identify specific kidney diseases and determine appropriate treatments.</p>"
      }
    ]
  },
  "diagnosis": {
    id: "3291",
    title: "Renal Diagnosis",
    date: "November 7, 2023",
    excerpt: "Diagnosis involves assessing changes...",
    image: "/wp-content/uploads/2023/11/renal-dignosis-th.png",
    isElementor: false,
    sections: [
      {
        content: "<p>Diagnosis involves assessing changes in kidney function through blood tests and identifying the underlying cause to initiate prompt treatment.</p>"
      }
    ]
  }
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPostsData[slug];
  if (!post) return {};
  return {
    title: `${post.title} – MMR Hospital & IVF Center`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPostsData[slug];

  if (!post) {
    notFound();
  }

  return (
    <>
      {post.cssFile && <link rel="stylesheet" href={post.cssFile} />}

      <main className="main-content">
        {post.isElementor ? (
          /* Elementor Layout for modern blog posts (7048, 7084) */
          <div data-elementor-type="wp-post" data-elementor-id={post.id} className={`elementor elementor-${post.id}`}>
            
            {/* Section 3: Hero Banner (ID: 7f3a7ef2) */}
            <SubPageHero
              secId="7f3a7ef2"
              title={post.title}
              backgroundColor="transparent"
            />

            {/* Section 4: Content Body (ID: 1daec487) */}
            <section
              className="elementor-section elementor-top-section elementor-element elementor-element-1daec487 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
              data-id="1daec487"
              data-element_type="section"
            >
              <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-row">
                  <div
                    className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-43688de8"
                    data-id="43688de8"
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated" style={{ padding: "40px 20px" }}>
                      
                      <div className="elementor-post__meta-data" style={{ marginBottom: "20px", color: "#666", fontSize: "14px" }}>
                        <span>Published on {post.date}</span>
                      </div>

                      {post.sections?.map((sec, idx) => (
                        <div key={idx} style={{ marginBottom: "30px" }}>
                          {sec.title && (
                            <h2
                              className="elementor-heading-title"
                              style={{
                                color: "#453A78",
                                fontFamily: "Nunito, sans-serif",
                                fontSize: "28px",
                                fontWeight: 700,
                                marginBottom: "15px"
                              }}
                            >
                              {sec.title}
                            </h2>
                          )}
                          <div
                            className="elementor-text-editor elementor-clearfix"
                            style={{
                              color: "#666",
                              fontFamily: "Roboto, sans-serif",
                              fontSize: "16px",
                              lineHeight: "1.6"
                            }}
                            dangerouslySetInnerHTML={{ __html: sec.content }}
                          />
                        </div>
                      ))}

                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>
        ) : (
          /* Standard fallback clean layout for older posts (3291, 3295, 3297) */
          <div className="standard-post-container" style={{ maxWidth: "800px", margin: "60px auto", padding: "0 20px" }}>
            <article>
              <header style={{ marginBottom: "30px" }}>
                <h1
                  style={{
                    color: "#453A78",
                    fontFamily: "Nunito, sans-serif",
                    fontSize: "36px",
                    fontWeight: 700,
                    marginBottom: "10px"
                  }}
                >
                  {post.title}
                </h1>
                <div style={{ color: "#888", fontSize: "14px" }}>Published on {post.date}</div>
              </header>

              {post.image && (
                <div style={{ marginBottom: "35px" }}>
                  <img
                    src={post.image}
                    alt={post.title}
                    style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                  />
                </div>
              )}

              <div
                style={{
                  color: "#666",
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "16px",
                  lineHeight: "1.8"
                }}
                dangerouslySetInnerHTML={{ __html: post.sections?.[0]?.content || "" }}
              />
            </article>
          </div>
        )}
      </main>
    </>
  );
}

export async function generateStaticParams() {
  return Object.keys(blogPostsData).map(slug => ({
    slug,
  }));
}
