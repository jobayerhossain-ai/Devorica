export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 30, suffix: "+", label: "Countries Served" },
  { value: 13, suffix: "+", label: "Tech Partners" },
  { value: 250, suffix: "+", label: "Projects" },
  { value: 5, suffix: "M+", label: "Spending" },
];
