/* ── Central Type Exports ─────────────────────────────────────
   Re-exports domain types from their co-located data modules
   so consumers can import from a single `@/types` path.
   ──────────────────────────────────────────────────────────── */

// Home feature data types
export type { Service } from "@/features/home/data/services";
export type { Stat } from "@/features/home/data/stats";
export type { TechItem } from "@/features/home/data/techStack";
export type { Industry } from "@/features/home/data/industries";
export type { Testimonial } from "@/features/home/data/testimonials";
export type { ProjectItem } from "@/features/home/data/projects";

// Shared data types
export type { Brand } from "@/data/brands";
