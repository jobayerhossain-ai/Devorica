import { SiJavascript, SiJsonwebtokens, SiTailwindcss, SiWebflow, SiMeta } from "react-icons/si";
import { FaNodeJs, FaPython, FaReact, FaWordpress, FaFigma } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import type { ComponentType } from "react";

const AdobeLogo = ({ className, color }: { className?: string; color?: string }) => (
  <svg className={className} fill={color} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.52 19L18.66 8.78L22.8 19H14.52ZM9.48 19L5.34 8.78L1.2 19H9.48ZM12 4.1L15.36 12.33L8.64 12.33L12 4.1Z" />
  </svg>
);

export interface TechItem {
  name: string;
  category: string;
  Icon: ComponentType<{ className?: string; color?: string }>;
  color: string;
}

export const techStackData: TechItem[] = [
  { name: "Javascript", category: "Development", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "JWT", category: "Development", Icon: SiJsonwebtokens, color: "#FFFFFF" },
  { name: "NodeJS", category: "Development", Icon: FaNodeJs, color: "#339933" },
  { name: "Python", category: "Development", Icon: FaPython, color: "#3776AB" },
  { name: "React", category: "Development", Icon: FaReact, color: "#61DAFB" },
  { name: "Tailwind", category: "Development", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Wordpress", category: "Development", Icon: FaWordpress, color: "#21759B" },
  { name: "Webflow", category: "Design", Icon: SiWebflow, color: "#4353FF" },
  { name: "Figma", category: "Design", Icon: FaFigma, color: "#F24E1E" },
  { name: "Adobe", category: "Design", Icon: AdobeLogo, color: "#FF0000" },
  { name: "Meta", category: "Digital Marketing", Icon: SiMeta, color: "#0668E1" },
  { name: "Google", category: "Digital Marketing", Icon: FcGoogle, color: "" },
];
