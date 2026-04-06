/**
 * Centralized image configuration for Devorica.
 * All images are organized by section with SEO-optimized filenames and alt text.
 *
 * IMAGE GENERATION STATUS:
 * Replace placeholder paths with actual generated images.
 * All filenames and alt text are production-ready.
 */

const IMG_BASE = "/assets/images";

export interface ImageAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

// ─── HERO ──────────────────────────────────────────
export const heroImages = {
  main: {
    src: `${IMG_BASE}/hero/devorica-developers-saas-dashboard-dhaka-office.webp`,
    alt: "Bangladeshi software developers working on SaaS dashboard in modern Dhaka office at night with city skyline",
    width: 1920,
    height: 1080,
  },
  fallback: {
    src: `${IMG_BASE}/hero/devorica-team-web-app-review-meeting.webp`,
    alt: "Devorica engineering team reviewing web application design in premium Dhaka coworking space",
    width: 1920,
    height: 1080,
  },
} as const;

// ─── ABOUT SECTION (Homepage) ─────────────────────
export const aboutImages = {
  teamHero: {
    src: `${IMG_BASE}/about/devorica-team-collaboration-app-development.webp`,
    alt: "Bangladeshi developers and designers collaborating on mobile app project at Devorica office",
    width: 1200,
    height: 800,
  },
  astronaut: {
    src: `${IMG_BASE}/about/devorica-innovation-frontier-engineering.webp`,
    alt: "Devorica innovation illustration representing frontier digital engineering and technology",
    width: 800,
    height: 800,
  },
  leadership: {
    src: `${IMG_BASE}/about/devorica-ceo-leadership-portrait.webp`,
    alt: "Devorica CEO leading software engineering team in modern Bangladesh tech office",
    width: 800,
    height: 1067,
  },
} as const;

// ─── WHY CHOOSE US / MOMENTS ──────────────────────
export const momentImages = {
  moment1: {
    src: `${IMG_BASE}/moments/devorica-agile-sprint-planning-team.webp`,
    alt: "Agile sprint planning session — Devorica development team organizing project roadmap",
    width: 800,
    height: 600,
  },
  moment2: {
    src: `${IMG_BASE}/moments/devorica-modern-tech-office-dhaka.webp`,
    alt: "Devorica modern tech office in Dhaka — software engineering team workspace",
    width: 800,
    height: 600,
  },
  moment3: {
    src: `${IMG_BASE}/moments/devorica-react-developer-coding-workspace.webp`,
    alt: "Bangladeshi React developer coding enterprise web application at Devorica",
    width: 800,
    height: 1067,
  },
  moment4: {
    src: `${IMG_BASE}/moments/devorica-team-product-design-review.webp`,
    alt: "Devorica product design review session — UI/UX team analyzing mobile app wireframes",
    width: 800,
    height: 600,
  },
  moment5: {
    src: `${IMG_BASE}/moments/devorica-developer-pair-programming.webp`,
    alt: "Pair programming session at Devorica — senior developers collaborating on enterprise code",
    width: 800,
    height: 600,
  },
  moment6: {
    src: `${IMG_BASE}/moments/devorica-client-presentation-meeting.webp`,
    alt: "Devorica team presenting project deliverables to client in conference room",
    width: 800,
    height: 600,
  },
  moment7: {
    src: `${IMG_BASE}/moments/devorica-qa-testing-mobile-devices.webp`,
    alt: "Quality assurance testing on multiple mobile devices at Devorica lab",
    width: 800,
    height: 600,
  },
  moment8: {
    src: `${IMG_BASE}/moments/devorica-engineering-whiteboard-architecture.webp`,
    alt: "System architecture planning on whiteboard — Devorica engineering team",
    width: 800,
    height: 600,
  },
} as const;

// ─── SERVICES ─────────────────────────────────────
export const serviceImages = {
  webDevelopment: {
    src: `${IMG_BASE}/services/web-development-saas-dashboard-coding.webp`,
    alt: "Custom web development — SaaS dashboard and code editor on developer workstation",
    width: 1200,
    height: 900,
  },
  mobileApp: {
    src: `${IMG_BASE}/services/mobile-app-development-fintech-ui-testing.webp`,
    alt: "Mobile app development — fintech application UI testing on iOS and Android devices",
    width: 1200,
    height: 900,
  },
  websiteRedesign: {
    src: `${IMG_BASE}/services/website-redesign-before-after-optimization.webp`,
    alt: "Website redesign transformation — before and after UI optimization by Devorica",
    width: 1200,
    height: 900,
  },
  seoGrowth: {
    src: `${IMG_BASE}/services/seo-growth-optimization-analytics-dashboard.webp`,
    alt: "SEO growth optimization — analytics dashboard showing organic traffic increase and keyword rankings",
    width: 1200,
    height: 900,
  },
  maintenance: {
    src: `${IMG_BASE}/services/maintenance-support-server-monitoring-devops.webp`,
    alt: "24/7 website maintenance — DevOps engineer monitoring server uptime and security dashboard",
    width: 1200,
    height: 900,
  },
} as const;

// Map service slugs to their images
export const serviceImageMap: Record<string, ImageAsset> = {
  "web-development": serviceImages.webDevelopment,
  "mobile-app-development": serviceImages.mobileApp,
  "website-redesign": serviceImages.websiteRedesign,
  "seo-services": serviceImages.seoGrowth,
  "maintenance-support": serviceImages.maintenance,
};

// ─── TEAM HEADSHOTS ───────────────────────────────
export const teamHeadshots = [
  {
    src: `${IMG_BASE}/team/devorica-team-member-1.webp`,
    alt: "Devorica team member — software engineer portrait",
  },
  {
    src: `${IMG_BASE}/team/devorica-team-member-2.webp`,
    alt: "Devorica team member — senior developer portrait",
  },
  {
    src: `${IMG_BASE}/team/devorica-team-member-3.webp`,
    alt: "Devorica team member — full stack engineer portrait",
  },
  {
    src: `${IMG_BASE}/team/devorica-team-member-4.webp`,
    alt: "Devorica team member — UI/UX designer portrait",
  },
  {
    src: `${IMG_BASE}/team/devorica-team-member-5.webp`,
    alt: "Devorica team member — project manager portrait",
  },
  {
    src: `${IMG_BASE}/team/devorica-team-member-6.webp`,
    alt: "Devorica team member — DevOps specialist portrait",
  },
  {
    src: `${IMG_BASE}/team/devorica-team-member-7.webp`,
    alt: "Devorica team member — digital marketing specialist portrait",
  },
  {
    src: `${IMG_BASE}/team/devorica-team-member-8.webp`,
    alt: "Devorica team member — motion designer portrait",
  },
] as const;

// ─── TESTIMONIALS ─────────────────────────────────
export const testimonialAvatars = {
  entrepreneur: {
    src: `${IMG_BASE}/testimonials/client-testimonial-tech-entrepreneur-bangladesh.webp`,
    alt: "Bangladeshi tech entrepreneur — satisfied Devorica client testimonial",
  },
  businessOwner: {
    src: `${IMG_BASE}/testimonials/client-testimonial-female-business-owner.webp`,
    alt: "Female Bangladeshi business owner — Devorica web development client review",
  },
  startupFounder: {
    src: `${IMG_BASE}/testimonials/client-testimonial-startup-founder-saas.webp`,
    alt: "Startup founder — Devorica SaaS development client testimonial",
  },
} as const;

// ─── CTA ──────────────────────────────────────────
export const ctaImages = {
  consultation: {
    src: `${IMG_BASE}/cta/devorica-business-consultation-meeting.webp`,
    alt: "Business consultation meeting — Devorica team discussing project strategy with enterprise client",
    width: 2100,
    height: 900,
  },
  partnership: {
    src: `${IMG_BASE}/cta/devorica-business-partnership-handshake.webp`,
    alt: "Professional business handshake — Devorica partnership with international enterprise client",
    width: 2100,
    height: 900,
  },
} as const;

// ─── PROJECTS/PORTFOLIO ───────────────────────────
export const projectImages = [
  { src: `${IMG_BASE}/projects/devorica-saas-dashboard-project.webp`, title: "Enterprise SaaS Dashboard" },
  { src: `${IMG_BASE}/projects/devorica-fintech-mobile-app.webp`, title: "Fintech Mobile Application" },
  { src: `${IMG_BASE}/projects/devorica-ecommerce-platform.webp`, title: "E-Commerce Platform" },
  { src: `${IMG_BASE}/projects/devorica-healthcare-portal.webp`, title: "Healthcare Patient Portal" },
  { src: `${IMG_BASE}/projects/devorica-crm-system.webp`, title: "Enterprise CRM System" },
  { src: `${IMG_BASE}/projects/devorica-education-platform.webp`, title: "EdTech Learning Platform" },
  { src: `${IMG_BASE}/projects/devorica-real-estate-app.webp`, title: "Real Estate Marketplace" },
  { src: `${IMG_BASE}/projects/devorica-logistics-dashboard.webp`, title: "Logistics Management Dashboard" },
  { src: `${IMG_BASE}/projects/devorica-social-media-app.webp`, title: "Social Media Application" },
  { src: `${IMG_BASE}/projects/devorica-booking-system.webp`, title: "Booking & Scheduling System" },
  { src: `${IMG_BASE}/projects/devorica-analytics-platform.webp`, title: "Analytics & BI Platform" },
  { src: `${IMG_BASE}/projects/devorica-food-delivery-app.webp`, title: "Food Delivery Application" },
] as const;

// ─── IMAGE GENERATION PROMPTS ─────────────────────
// These prompts are kept here for reference. Use them in Midjourney v6.1 or FLUX 1.1 Pro.
export const imagePrompts = {
  "hero/devorica-developers-saas-dashboard-dhaka-office.webp":
    "Cinematic wide shot of a modern software development office in Dhaka, Bangladesh at night. Three South Asian male developers in their late 20s wearing minimalist dark clothing, focused on ultra-wide curved monitors displaying complex SaaS dashboards with dark UI, real-time analytics, and code editors. Deep navy and charcoal interior with soft amber desk lamps and cool blue monitor glow reflecting on faces. Floor-to-ceiling windows showing Dhaka city lights in the background. Shot on Sony A7IV, 35mm lens, f/1.8, shallow depth of field, cinematic color grading with teal and orange tones. Hyperrealistic, editorial photography style, no text on screens --ar 16:9 --style raw --s 50",

  "about/devorica-team-collaboration-app-development.webp":
    "Candid photograph of four young Bangladeshi professionals collaborating at a long oak table in a modern tech office. Two developers with laptops showing code, one UI designer with a tablet showing mobile app mockups, one project manager with a notebook. Relaxed but focused energy, natural micro-expressions. Interior has white walls, black steel-frame shelving with tech books, a single monstera plant. Overhead soft panel lighting, no harsh shadows. Documentary photography style, 35mm lens, f/2.8 --ar 3:2 --style raw",

  "moments/devorica-agile-sprint-planning-team.webp":
    "Overhead birds-eye photograph of a product sprint planning session. Four Bangladeshi developers sitting around a table covered with sticky notes, wireframe printouts, a laptop showing a Jira-style board, and marker pens. Each person's hands visible, actively arranging and pointing at items. Clean white table, colorful sticky notes providing the only color accent. Soft even overhead lighting, documentary style, 35mm --ar 3:2 --style raw",

  "moments/devorica-modern-tech-office-dhaka.webp":
    "Wide interior photograph of a premium modern tech office in Dhaka. Open floor plan with standing desks, ergonomic chairs, 6-8 developers working at stations. Features: exposed concrete ceiling, matte black fixtures, green accent wall, small lounge area with a sofa. Afternoon golden hour light streaming through large windows. Architectural photography style, 24mm tilt-shift lens, everything in focus. Clean, aspirational, real --ar 16:9 --style raw",

  "moments/devorica-react-developer-coding-workspace.webp":
    "Over-the-shoulder shot of a Bangladeshi female developer in her mid-20s writing React code on a 27-inch monitor in a dark modern workspace. Screen shows JSX components and a terminal with green text. She wears a simple navy top, hair tied back, wireless headphones around neck. Desk has a minimal setup: mechanical keyboard, single monitor arm, small desk plant. Cool monitor light illuminating her face from the front, warm ambient light from behind. Tack-sharp focus on the screen code, slight bokeh on the developer. Shot at f/2.0, 50mm --ar 4:3 --style raw",

  "services/web-development-saas-dashboard-coding.webp":
    "Close-up photograph of hands on a backlit mechanical keyboard with a large ultrawide monitor displaying a modern web application dashboard with dark UI — showing charts, data tables, and navigation sidebar. Code editor split-screen visible on a secondary vertical monitor to the right. Dark desk surface with subtle ambient RGB strip lighting underneath the monitor. Focus on the screen content with hands slightly blurred. Tech product photography style, 85mm macro, f/2.8. Cool blue-grey color palette --ar 4:3 --style raw",

  "services/mobile-app-development-fintech-ui-testing.webp":
    "Product photography style shot of a Bangladeshi QA engineer holding a smartphone displaying a clean fintech mobile app UI with dark theme, showing account balance and transaction list. Phone angled 15 degrees toward camera, engineer's face partially visible and blurred in background. Second phone on desk showing the same app in a different state. Modern minimal desk, matte black surface. Studio-quality lighting with single soft key light from upper left. Hyper-detailed screen content, realistic phone bezels --ar 4:3 --style raw",

  "services/website-redesign-before-after-optimization.webp":
    "Split composition photograph showing a before/after website transformation. Left side: older, cluttered website design displayed on a dusty older monitor with warm tungsten lighting. Right side: modern, clean redesigned version on a sleek new display with cool daylight-balanced lighting. Clean diagonal dividing line between the two halves. Desktop environment, product photography style. Sharp focus throughout, controlled studio lighting --ar 4:3 --style raw",

  "services/seo-growth-optimization-analytics-dashboard.webp":
    "Overhead flat-lay photograph of a developer's desk showing a laptop displaying Google Analytics dashboard with rising traffic graph, a tablet showing keyword ranking positions, printed SEO audit report with highlighted metrics, and a coffee cup. Clean white marble desk surface. Items arranged in an editorial grid layout. Soft natural top-down lighting, no harsh shadows. Lifestyle product photography, shot on 35mm, f/5.6 --ar 4:3 --style raw",

  "services/maintenance-support-server-monitoring-devops.webp":
    "Photograph of a Bangladeshi DevOps engineer monitoring a server health dashboard on three monitors in a dim operations room. Screens show uptime graphs at 99.99%, CPU load charts, security alert panels, and deployment pipelines — all with dark UI green accent theme. Engineer wearing a headset, calm confident posture, slight profile angle. Blue and green light from monitors, dark background. Cinematic low-key lighting, 24mm wide angle --ar 4:3 --style raw",

  "cta/devorica-business-consultation-meeting.webp":
    "Cinematic wide shot of two professionals — a Bangladeshi male developer and an international male client — having a focused one-on-one meeting at a premium glass conference table. Laptop between them showing a project timeline. Both leaning slightly forward indicating engagement. Modern conference room with floor-to-ceiling windows showing an evening cityscape. Warm interior lighting contrasting cool blue exterior light. 35mm, f/2.0, shallow depth, shot from slight low angle conveying authority. Teal-orange color grade --ar 21:9 --style raw",
} as const;
