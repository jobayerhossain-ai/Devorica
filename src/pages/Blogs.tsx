import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FAQSection from "@/components/shared/FAQSection";
import AnimatedSection from "@/components/shared/AnimatedSection";

const blogPosts = [
  {
    title: "The Devorica Blueprint: Engineering Excellence in the Digital Era",
    excerpt: "From technical visionaries to a global engineering force — Devorica is redefining the standard for digital transformation and enterprise-scale software development.",
    author: "Abdur Rahat Tarek",
    date: "1-9-2025",
    featured: true,
  },
  {
    title: "Building Scalable Remote Teams: Best Practices for Startups",
    excerpt: "Learn why smart startups are choosing remote teams to scale faster. Discover how startups are growing with distributed talent and lowering costs.",
    author: "Abdur Rahat Tarek",
    date: "20-9-2025",
  },
  {
    title: "How to Turn Your Idea into a Successful SaaS Product with an MVP",
    excerpt: "Learn how to build a successful SaaS product — benefits, challenges, and 7 proven steps to launch and scale your SaaS.",
    author: "Abdur Rahat Tarek",
    date: "8-10-2025",
  },
  {
    title: "UI/UX Trends in 2025: What Your Website Needs to Convert More Clients",
    excerpt: "In 2025, great design isn't enough. Learn key UI/UX trends — AI, voice, speed & ethics — to boost conversions and client trust.",
    author: "Abdur Rahat Tarek",
    date: "29-11-2025",
  },
];

const categories = ["All", "Scalable Engineering", "Mobile App Development", "Website Optimization", "Growth Strategies", "Enterprise Support"];

const Blogs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container-main text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-[800] leading-[1.1] tracking-tight mb-6 mt-8">
              Strategic Insights & <br className="hidden md:block" />Digital Intelligence
            </h1>
            <p className="text-[#A0A0A0] text-sm md:text-lg leading-[1.6] font-normal max-w-2xl mx-auto text-center">
              Explore the intersection of high-performance engineering, enterprise growth strategies, and the future of digital transformation at Devorica.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-12">
        <div className="container-main">
          <AnimatedSection>
            <div className="glass-card overflow-hidden rounded-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-card to-primary/10 flex items-center justify-center">
                  <p className="text-muted-foreground text-sm">Featured Image</p>
                </div>
                <div className="p-8 md:p-10">
                  <p className="text-xs text-muted-foreground mb-3">{blogPosts[0].author} • {blogPosts[0].date}</p>
                  <h2 className="text-[20px] md:text-[22px] font-[600] text-foreground leading-[1.3] tracking-[-0.3px] mb-4">{blogPosts[0].title}</h2>
                  <p className="text-[#A0A0A0] text-[16px] leading-[1.6] font-normal">{blogPosts[0].excerpt}</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-8">
        <div className="container-main">
          <AnimatedSection>
            <div className="flex flex-nowrap overflow-x-auto gap-3 pb-4 snap-x snap-mandatory scrollbar-hide md:flex-wrap md:overflow-visible">
              {categories.map((cat, i) => (
                <button key={cat} className={`flex-shrink-0 snap-start px-5 py-2 rounded-full text-[14px] font-[500] transition-all ${i === 0 ? "bg-white text-black" : "bg-[#111] border border-white/5 text-white/50 hover:text-white"}`}>
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="glass-card-hover overflow-hidden rounded-xl">
                  <div className="aspect-video bg-gradient-to-br from-card to-primary/5 flex items-center justify-center">
                    <p className="text-muted-foreground text-xs">Blog Image</p>
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-muted-foreground mb-2">{post.author} • {post.date}</p>
                    <h3 className="font-[600] text-[14px] text-foreground mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-xs text-[#A0A0A0] line-clamp-3">{post.excerpt}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding">
        <div className="container-main">
          <AnimatedSection>
            <div className="bg-[#0A0A0E] border border-white/5 rounded-[24px] p-8 md:p-12 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-[800] tracking-tight mb-4">Digital Intelligence</h2>
              <p className="text-white/40 text-sm md:text-lg leading-[1.6] font-normal mb-8">Receive strategic insights directly to your inbox.</p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Your Email" className="flex-1 bg-black border border-white/10 rounded-lg px-6 py-4 text-sm outline-none focus:border-blue-500 transition-colors text-white" />
                <button className="btn-secondary shrink-0">Subscribe</button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <FAQSection />
      <Footer />
    </div>
  );
};

export default Blogs;
