import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SmartHeading from "@/components/shared/SmartHeading";
import { SEO } from "@/lib/seo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <SEO
        title="Page Not Found — Devorica"
        description="The page you're looking for doesn't exist. Return to Devorica's homepage to explore our web development, mobile app, and digital growth services."
        noIndex={true}
      />
      <div className="text-center">
        <SmartHeading as="h1" text="404" highlightWord="404" className="mb-4 text-4xl font-[800]" />
        <p className="mb-6 text-xl text-muted-foreground font-normal">Requested resource not found. The path may have moved or been decommissioned.</p>
        <a href="/" className="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-neutral-800 transition-colors uppercase text-sm tracking-wider">
          Return to Institutional Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
