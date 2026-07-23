import type { Metadata } from "next";
import Link from "next/link";
import SubPageHero from "@/components/sections/shared/SubPageHero/SubPageHero";

export const metadata: Metadata = {
  title: "News & Blogs – MMR Hospital & IVF Center – Best IVF Center in Raipur",
  description: "Stay updated with the latest news, updates, and informative medical blogs from MMR Hospital & IVF Center Raipur.",
};

const blogPosts = [
  {
    id: "7048",
    slug: "rising-infertility-rates-in-india-a-growing-concern",
    title: "Rising Infertility Rates in India: A Growing Concern",
    date: "August 30, 2024",
    excerpt: "Rising Infertility Rates in India: A Growing Concern",
    image: "/wp-content/uploads/2024/04/MMR-Hospital-IVF-Center-1024-x-1024-px-1.png" // fallback image
  },
  {
    id: "7084",
    slug: "the-reality-of-ivf-success-rates-what-you-need-to-know",
    title: "The Reality of IVF Success Rates: What You Need to Know",
    date: "August 30, 2024",
    // Preserving production excerpt duplicate quirk
    excerpt: "Rising Infertility Rates in India: A Growing Concern",
    image: "/wp-content/uploads/2024/04/MMR-Hospital-IVF-Center-1024-x-1024-px-1.png" // fallback image
  },
  {
    id: "3295",
    slug: "renal-replacement-therapy",
    title: "Renal Replacement Therapy",
    date: "November 7, 2023",
    excerpt: "Treatments for individuals with kidney failure, providing essential support when their kidneys can no longer adequately filter waste and excess fluid from the blood.",
    image: "/wp-content/uploads/2023/11/renal-replacement-th.png"
  },
  {
    id: "3297",
    slug: "intervention-nephrology",
    title: "Intervention Nephrology",
    date: "November 7, 2023",
    excerpt: "Renal biopsy is a diagnostic procedure where a small sample of kidney tissue is extracted for examination.",
    image: "/wp-content/uploads/2023/11/intervention-nephrology-th.png"
  },
  {
    id: "3291",
    slug: "diagnosis",
    title: "Renal Diagnosis",
    date: "November 7, 2023",
    excerpt: "Diagnosis involves assessing changes in kidney function through blood tests and identifying the underlying cause to initiate prompt treatment.",
    image: "/wp-content/uploads/2023/11/renal-dignosis-th.png"
  }
];

export default function NewsBlogsPage() {
  return (
    <>
      {/* Load page-specific Elementor Stylesheet */}
      <link
        rel="stylesheet"
        href="/wp-content/uploads/elementor/css/post-159.css"
      />

      <main className="main-content">
        <div data-elementor-type="wp-page" data-elementor-id="159" className="elementor elementor-159">
          
          {/* Section 1: Hero Banner (ID: 460c2d75) */}
          <SubPageHero
            secId="460c2d75"
            title="News And Blogs"
            backgroundColor="transparent"
          />

          {/* Section 2: Blog Posts Grid (ID: 64b7f810) */}
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-64b7f810 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="64b7f810"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-row">
                <div
                  className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-110abc7"
                  data-id="110abc7"
                  data-element_type="column"
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                      className="elementor-element elementor-element-66eba6a elementor-grid-3 elementor-posts--thumbnail-top elementor-widget elementor-widget-posts"
                      data-id="66eba6a"
                      data-element_type="widget"
                      data-widget_type="posts.classic"
                    >
                      <div className="elementor-widget-container">
                        <div className="elementor-posts-container elementor-posts elementor-posts--skin-classic elementor-grid">
                          
                          {blogPosts.map(post => (
                            <article
                              key={post.id}
                              className={`elementor-post elementor-grid-item post-${post.id} post type-post status-publish format-standard has-post-thumbnail hentry`}
                            >
                              <Link
                                className="elementor-post__thumbnail__link"
                                href={`/news-blogs/${post.slug}`}
                              >
                                <div className="elementor-post__thumbnail">
                                  <img
                                    src={post.image}
                                    alt={post.title}
                                    width={400}
                                    height={250}
                                    style={{ objectFit: "cover", width: "100%", height: "200px" }}
                                    loading="lazy"
                                  />
                                </div>
                              </Link>
                              
                              <div className="elementor-post__text">
                                <h3 className="elementor-post__title">
                                  <Link href={`/news-blogs/${post.slug}`}>
                                    {post.title}
                                  </Link>
                                </h3>
                                
                                <div className="elementor-post__meta-data">
                                  <span className="elementor-post-date">{post.date}</span>
                                </div>
                                
                                <div className="elementor-post__excerpt">
                                  <p>{post.excerpt}</p>
                                </div>
                                
                                <Link
                                  className="elementor-post__read-more"
                                  href={`/news-blogs/${post.slug}`}
                                >
                                  Read More »
                                </Link>
                              </div>
                            </article>
                          ))}

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Bottom Banner (ID: 6070715) */}
          <section
            className="elementor-section elementor-top-section elementor-element elementor-element-6070715 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
            data-id="6070715"
            data-element_type="section"
          >
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-row">
                <div
                  className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-cda5bf2"
                  data-id="cda5bf2"
                  data-element_type="column"
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                      className="elementor-section elementor-inner-section elementor-element elementor-element-0e015f4 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                      data-id="0e015f4"
                      data-element_type="section"
                    >
                      <div className="elementor-container elementor-column-gap-default">
                        <div className="elementor-row">
                          
                          {/* Left Column: Info Text */}
                          <div
                            className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-036ff78"
                            data-id="036ff78"
                            data-element_type="column"
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-93f97d3 elementor-widget elementor-widget-heading"
                                data-id="93f97d3"
                                data-element_type="widget"
                                data-widget_type="heading.default"
                              >
                                <div className="elementor-widget-container">
                                  <h2 className="elementor-heading-title elementor-size-default">
                                    Our Hospital
                                  </h2>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-f2f77cc elementor-widget elementor-widget-heading"
                                data-id="f2f77cc"
                                data-element_type="widget"
                                data-widget_type="heading.default"
                              >
                                <div className="elementor-widget-container">
                                  <h3 className="elementor-heading-title elementor-size-default">
                                    We are available for 24/7 for your service.
                                  </h3>
                                </div>
                              </div>
                              <div
                                className="elementor-element elementor-element-e8eee31 elementor-widget elementor-widget-text-editor"
                                data-id="e8eee31"
                                data-element_type="widget"
                                data-widget_type="text-editor.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="elementor-text-editor elementor-clearfix">
                                    <p>At MMR Hospital &amp; IVF Center, we understand that healthcare needs can arise at any time, which is why we are proud to offer round-the-clock services to our patients. Our dedicated team of medical professionals and support staff is available 24/7 to provide prompt, compassionate, and high-quality care whenever you need it.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Right Column: Hospital Image */}
                          <div
                            className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-46e91ab"
                            data-id="46e91ab"
                            data-element_type="column"
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-54c639f elementor-widget elementor-widget-image"
                                data-id="54c639f"
                                data-element_type="widget"
                                data-widget_type="image.default"
                              >
                                <div className="elementor-widget-container">
                                  <img
                                    src="/wp-content/uploads/2024/04/MMR-Hospital-IVF-Center-1024-x-1024-px-1.png"
                                    alt="MMR Hospital IVF Center"
                                    width={1024}
                                    height={1024}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
