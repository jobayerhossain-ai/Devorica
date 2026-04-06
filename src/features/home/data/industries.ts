import {
  Landmark,
  ShoppingBag,
  Braces,
  Building2,
  Gamepad2,
  Rocket,
  Shirt,
  Heart,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Industry {
  name: string;
  icon: LucideIcon;
}

export const industries: Industry[] = [
  { name: "Finance & Banking", icon: Landmark },
  { name: "E-commerce", icon: ShoppingBag },
  { name: "Software", icon: Braces },
  { name: "Business", icon: Building2 },
  { name: "Gaming", icon: Gamepad2 },
  { name: "Startup", icon: Rocket },
  { name: "Fashion & Apparel", icon: Shirt },
  { name: "Non-profit", icon: Heart },
];
