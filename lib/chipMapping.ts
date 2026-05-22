import type { OptionKey } from "./content";

export type Q1Key = OptionKey;

export interface Chip {
  id: string;
  triggers: Q1Key[];
  ru: string;
  en: string;
}

export const practicumChips: Chip[] = [
  {
    id: "p1",
    triggers: ["A", "C"],
    ru: "Сделала 4 дашборда — освободила 250+ часов в месяц у команды",
    en: "Built 4 dashboards — freed up 250+ hours/month for the team",
  },
  {
    id: "p2",
    triggers: ["A"],
    ru: "С помощью регрессионной модели показала неэффективность нашей сегментации — ресурс аналитика пошёл на более полезные задачи",
    en: "Used regression to expose ineffective segmentation — analyst time redirected to higher-value work",
  },
  {
    id: "p3",
    triggers: ["A", "B"],
    ru: "Унифицировала контент для 90+ профессий — прозрачно собираем данные и не собираем ненужные",
    en: "Unified content for 90+ professions — clean data collection, no unnecessary tracking",
  },
  {
    id: "p4",
    triggers: ["D"],
    ru: "Онбордила команду из 30 человек в новые инструменты аналитики",
    en: "Onboarded a team of 30 to new analytics tooling",
  },
];

export const smenaChips: Chip[] = [
  {
    id: "s1",
    triggers: ["A"],
    ru: "Провела качественные и количественные исследования — создала сегментацию по продукту и клиенту",
    en: "Ran qualitative and quantitative research — built product and customer segmentation",
  },
  {
    id: "s2",
    triggers: ["B"],
    ru: "Обеспечила продуктовую линейку на 2025 и 2026",
    en: "Delivered the product lineup for 2025 and 2026",
  },
  {
    id: "s3",
    triggers: ["B", "C"],
    ru: "Благодаря новой сегментации репозиционировали бренд → солдауты на 3 месяца раньше плана",
    en: "New segmentation led to brand repositioning → sellouts 3 months ahead of plan",
  },
];

export function filterChips(chips: Chip[], selected: Q1Key[]): Chip[] {
  if (selected.length === 0 || selected.includes("none")) {
    return chips;
  }
  return chips.filter((chip) =>
    chip.triggers.some((t) => selected.includes(t))
  );
}

export function selectPdfPath(_q2: OptionKey[], _q3: OptionKey[]): string {
  return "/resumes/resume_default.pdf";
}
