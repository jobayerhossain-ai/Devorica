export interface Service {
  num: string;
  name: string;
  path: string;
  description: string;
}

export const services: Service[] = [
  { 
    num: "01", 
    name: "Scalable Web & Software Engineering", 
    path: "/services/web-development",
    description: "Architecting high-performance digital platforms designed for enterprise scalability and seamless user engagement. Our engineering team builds resilient back-end systems and intuitive front-end interfaces that serve as the foundation for your digital growth."
  },
  { 
    num: "02", 
    name: "Mobile App Development", 
    path: "/services/mobile-app-development",
    description: "Developing mission-critical mobile applications that deliver native performance across all device ecosystems. From high-growth startups to global enterprises, we engineer mobile solutions that optimize user retention and drive mobile commerce."
  },
  { 
    num: "03", 
    name: "Website Redesign & Optimization", 
    path: "/services/website-redesign",
    description: "Transforming legacy digital assets into high-converting, performance-optimized discovery engines. We utilize data-driven design methodologies to ensure your brand identity align with modern user expectations and business performance goals."
  },
  { 
    num: "04", 
    name: "SEO & Growth Optimization", 
    path: "/services/seo-services",
    description: "Accelerating your digital visibility through technical SEO and outcome-focused performance marketing. Our growth strategists implement data-driven methodologies to maximize organic reach and optimize customer acquisition costs."
  },
  { 
    num: "05", 
    name: "Maintenance & Support", 
    path: "/services/maintenance-support",
    description: "Providing 24/7 technical oversight and proactive system maintenance to ensure continuous operational stability. Our dedicated support team manages security patches, performance tuning, and infrastructure scaling to protect your digital investments."
  },
];
