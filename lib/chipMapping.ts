import type { Lang, OptionKey } from "./content";

type QuestionId = "q1" | "q2" | "q3";
type AnswerKey = Exclude<OptionKey, "none">;

interface LocalizedText {
  ru: string;
  en: string;
}

export interface ResultBullet {
  id: string;
  source: LocalizedText;
  period: LocalizedText;
  label: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  tags: Record<QuestionId, AnswerKey[]>;
  priority: number;
}

const weights: Record<QuestionId, number> = {
  q1: 5,
  q2: 3,
  q3: 4,
};

const noSignalResultIds = [
  "practicum-dashboards",
  "smena-repositioning",
  "practicum-change-team",
  "smena-sellout",
  "practicum-segmentation-audit",
];

const fallbackResultIds = [
  "practicum-dashboards",
  "smena-repositioning",
  "smena-sellout",
  "archstoyanie-partners",
];

export const resultBullets: ResultBullet[] = [
  {
    id: "practicum-dashboards",
    source: {
      ru: "Менеджер проектов @ Яндекс Практикум",
      en: "Project Manager @ Yandex Practicum",
    },
    period: {
      ru: "май 2023 — настоящее время",
      en: "May 2023 — Present",
    },
    label: {
      ru: "аналитика и процессы",
      en: "analytics and processes",
    },
    title: {
      ru: "Сняла 250+ ручных часов в месяц через 4 дашборда",
      en: "Cut 250+ manual hours a month with 4 dashboards",
    },
    description: {
      ru: "Заменила Google-таблицы; собирала вместе с аналитиками и разработчиками.",
      en: "Replaced Google Sheets; built it together with analysts and developers.",
    },
    tags: {
      q1: ["B", "C"],
      q2: ["A", "C"],
      q3: ["A", "C", "D"],
    },
    priority: 110,
  },
  {
    id: "practicum-metric-tree",
    source: {
      ru: "Менеджер проектов @ Яндекс Практикум",
      en: "Project Manager @ Yandex Practicum",
    },
    period: {
      ru: "май 2023 — настоящее время",
      en: "May 2023 — Present",
    },
    label: {
      ru: "управление метриками",
      en: "metrics management",
    },
    title: {
      ru: "Связала метрики Карьерного центра с EBITDA",
      en: "Tied Career Center metrics to EBITDA",
    },
    description: {
      ru: "Связь между продуктом, воронкой и трудоустройством стала видна всей команде.",
      en: "The link between product work, funnel, and graduate employment became visible to the whole team.",
    },
    tags: {
      q1: ["B", "C"],
      q2: ["A"],
      q3: ["A", "C"],
    },
    priority: 96,
  },
  {
    id: "practicum-segmentation-audit",
    source: {
      ru: "Менеджер проектов @ Яндекс Практикум",
      en: "Project Manager @ Yandex Practicum",
    },
    period: {
      ru: "май 2023 — настоящее время",
      en: "May 2023 — Present",
    },
    label: {
      ru: "продуктовая аналитика",
      en: "product analytics",
    },
    title: {
      ru: "Регрессией доказала, что старая сегментация не работает",
      en: "Used regression to retire a broken segmentation",
    },
    description: {
      ru: "Перенаправила аналитический ресурс с поддержки нерабочей модели на более полезные задачи.",
      en: "Redirected analytics time from supporting a broken model to higher-value work.",
    },
    tags: {
      q1: ["B", "C"],
      q2: ["A", "B"],
      q3: ["A", "C"],
    },
    priority: 88,
  },
  {
    id: "practicum-data-process",
    source: {
      ru: "Менеджер проектов @ Яндекс Практикум",
      en: "Project Manager @ Yandex Practicum",
    },
    period: {
      ru: "май 2023 — настоящее время",
      en: "May 2023 — Present",
    },
    label: {
      ru: "масштабирование процессов",
      en: "process scaling",
    },
    title: {
      ru: "Опрозрачила сбор данных на 90+ курсах",
      en: "Made data collection transparent across 90+ courses",
    },
    description: {
      ru: "Единые правила подсчёта, LX-опросники и отчётность по трудоустройству — программы сравниваются честно, без лишних касаний студентов.",
      en: "Shared metric rules, LX surveys, and employment reporting — programs compare cleanly, no extra student touchpoints.",
    },
    tags: {
      q1: ["B", "C"],
      q2: ["A", "C"],
      q3: ["A", "D"],
    },
    priority: 86,
  },
  {
    id: "practicum-change-team",
    source: {
      ru: "Менеджер проектов @ Яндекс Практикум",
      en: "Project Manager @ Yandex Practicum",
    },
    period: {
      ru: "май 2023 — настоящее время",
      en: "May 2023 — Present",
    },
    label: {
      ru: "изменения в команде",
      en: "team change",
    },
    title: {
      ru: "Перевела команду из 30 человек на новые процессы",
      en: "Moved a 30-person team onto new processes",
    },
    description: {
      ru: "Изменение прижилось в ежедневной работе, а не осталось в презентации.",
      en: "The change stuck in daily work instead of staying in a deck.",
    },
    tags: {
      q1: ["B", "D"],
      q2: ["C", "D"],
      q3: ["A", "D"],
    },
    priority: 100,
  },
  {
    id: "smena-repositioning",
    source: {
      ru: "B2C Менеджер продукта @ Станция Смена",
      en: "B2C Product Manager @ Station Smena",
    },
    period: {
      ru: "ноябрь 2024 — март 2026",
      en: "November 2024 — March 2026",
    },
    label: {
      ru: "продуктовая стратегия",
      en: "product strategy",
    },
    title: {
      ru: "Перезапустила продуктовую линейку на новой сегментации",
      en: "Relaunched the product lineup on a new segmentation",
    },
    description: {
      ru: "Основа — качественное и количественное исследование аудитории, которое провела с COO и CEO.",
      en: "Built on qualitative and quantitative audience research I ran with the COO and CEO.",
    },
    tags: {
      q1: ["A", "B"],
      q2: ["A", "B"],
      q3: ["A", "B", "C"],
    },
    priority: 105,
  },
  {
    id: "smena-sellout",
    source: {
      ru: "B2C Менеджер продукта @ Станция Смена",
      en: "B2C Product Manager @ Station Smena",
    },
    period: {
      ru: "ноябрь 2024 — март 2026",
      en: "November 2024 — March 2026",
    },
    label: {
      ru: "рост продукта",
      en: "product growth",
    },
    title: {
      ru: "Распродала 100% сезона на 3 месяца раньше плана",
      en: "Sold out 100% of the season 3 months ahead of plan",
    },
    description: {
      ru: "Драйверы — новая сегментация и обновлённая линейка поездок.",
      en: "Drivers — a new segmentation and a refreshed trip lineup.",
    },
    tags: {
      q1: ["A", "C"],
      q2: ["B"],
      q3: ["B", "C"],
    },
    priority: 100,
  },
  {
    id: "archstoyanie-partners",
    source: {
      ru: "B2C Менеджер продукта @ Станция Смена",
      en: "B2C Product Manager @ Station Smena",
    },
    period: {
      ru: "ноябрь 2024 — март 2026",
      en: "November 2024 — March 2026",
    },
    label: {
      ru: "спецпроект и партнёрства",
      en: "special project and partnerships",
    },
    title: {
      ru: "Привела 400+ лидов и 5 партнёров через спецпроект на Архстоянии",
      en: "Brought 400+ leads and 5 partners through an Archstoyanie special project",
    },
    description: {
      ru: "Спецпроект — аудиоспектакль; финансирование закрыла краудфандингом без платного медиа.",
      en: "The special project was an audio performance; funded through crowdfunding with zero paid media.",
    },
    tags: {
      q1: ["A"],
      q2: [],
      q3: ["B"],
    },
    priority: 70,
  },
  {
    id: "founder-pnl",
    source: {
      ru: "Основательница @ Едем дальше",
      en: "Founder @ Moving On",
    },
    period: {
      ru: "2020 — 2024",
      en: "2020 — 2024",
    },
    label: {
      ru: "свой проект",
      en: "own project",
    },
    title: {
      ru: "Создала тревел-проект с прибылью с 3-й поездки",
      en: "Built a travel project, profitable from trip 3",
    },
    description: {
      ru: "Как основательница считала экономику проекта, запускала маркетинг, собирала продуктовую линейку и вела сами заезды.",
      en: "As the founder, owned P&L, marketing, product lineup, and trip operations.",
    },
    tags: {
      q1: ["A"],
      q2: [],
      q3: ["B"],
    },
    priority: 40,
  },
  {
    id: "jtbd-soldout",
    source: {
      ru: "Основательница @ Едем дальше",
      en: "Founder @ Moving On",
    },
    period: {
      ru: "2020 — 2024",
      en: "2020 — 2024",
    },
    label: {
      ru: "исследование продукта",
      en: "product research",
    },
    title: {
      ru: "Через JTBD-интервью довела заезды до солдаута за сутки",
      en: "Used JTBD interviews to push trips to sell out in 24h",
    },
    description: {
      ru: "Использовала их, чтобы выбирать длительность и локации поездок под реальные драйверы решений клиентов.",
      en: "Used them to pick trip duration and locations around real customer decision drivers.",
    },
    tags: {
      q1: ["A"],
      q2: [],
      q3: ["B"],
    },
    priority: 35,
  },
];

export interface AlsoExperienceCard {
  id: string;
  period: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
}

export const alsoExperienceCards: AlsoExperienceCard[] = [
  {
    id: "archstoyanie",
    period: { ru: "июль 2025", en: "July 2025" },
    title: {
      ru: "Сделала аудиоспектакль на Архстоянии",
      en: "Made an audio performance at Archstoyanie",
    },
    description: {
      ru: "Привела 400+ тёплых лидов в воронку, закрыла финансирование через краудфандинг и 5 корпоративных партнёрств.",
      en: "Brought 400+ warm leads into the funnel and secured funding through crowdfunding and 5 corporate partnerships.",
    },
  },
  {
    id: "tolk",
    period: {
      ru: "ноябрь 2025 — апрель 2026",
      en: "November 2025 — April 2026",
    },
    title: {
      ru: "Собрала программу интенсива для 100k+ зрителей ТОЛКа (Т-Банк)",
      en: "Built the program for TOLK's 100k+ audience intensive (T-Bank)",
    },
    description: {
      ru: "Крупнейший ивент по финансовой грамотности в РФ. 4 индивидуальных формата под медийных спикеров, координация 12 часов прямого эфира.",
      en: "Russia's largest financial literacy event. 4 custom formats for media speakers, coordinated 12 hours of live broadcast.",
    },
  },
  {
    id: "moving-on",
    period: { ru: "2020 — 2024", en: "2020 — 2024" },
    title: {
      ru: "Создала тревел-проект «Едем дальше»",
      en: "Built a travel project «Moving On»",
    },
    description: {
      ru: "Как основательница считала экономику, запускала маркетинг, собирала продуктовую линейку и вела сами заезды. 16 поездок, прибыль с 3-й, JTBD-интервью.",
      en: "As the founder, owned P&L, marketing, product lineup, and trip operations. 16 trips, profitable from the 3rd, JTBD interviews.",
    },
  },
];

export function isAllNone(
  q1: OptionKey[],
  q2: OptionKey[],
  q3: OptionKey[]
): boolean {
  const isNone = (arr: OptionKey[]) =>
    arr.length === 1 && arr[0] === "none";
  return isNone(q1) && isNone(q2) && isNone(q3);
}

function activeAnswers(selected: OptionKey[]): AnswerKey[] {
  return selected.filter((key): key is AnswerKey => key !== "none");
}

function scoreBullet(
  bullet: ResultBullet,
  selected: Record<QuestionId, AnswerKey[]>
): number {
  return (Object.keys(selected) as QuestionId[]).reduce((score, questionId) => {
    const answers = selected[questionId];
    const matches = answers.filter((answer) =>
      bullet.tags[questionId].includes(answer)
    ).length;

    return score + matches * weights[questionId];
  }, bullet.priority / 100);
}

export function selectResultBullets(
  q1: OptionKey[],
  q2: OptionKey[],
  q3: OptionKey[],
  limit = 4
): ResultBullet[] {
  const selected = {
    q1: activeAnswers(q1),
    q2: activeAnswers(q2),
    q3: activeAnswers(q3),
  };
  const hasSignal = Object.values(selected).some((answers) => answers.length > 0);

  if (!hasSignal) {
    return noSignalResultIds
      .map((id) => resultBullets.find((bullet) => bullet.id === id))
      .filter((bullet): bullet is ResultBullet => Boolean(bullet))
      .slice(0, limit);
  }

  const ranked = resultBullets
    .map((bullet) => ({
      bullet,
      score: scoreBullet(bullet, selected),
    }))
    .filter(({ score, bullet }) => score > bullet.priority / 100)
    .sort((a, b) => b.score - a.score || b.bullet.priority - a.bullet.priority)
    .map(({ bullet }) => bullet);

  const fallback = fallbackResultIds
    .map((id) => resultBullets.find((bullet) => bullet.id === id))
    .filter((bullet): bullet is ResultBullet => Boolean(bullet));

  const merged = [...ranked];
  for (const bullet of fallback) {
    if (merged.length >= limit) break;
    if (!merged.some((item) => item.id === bullet.id)) {
      merged.push(bullet);
    }
  }

  return merged.slice(0, limit);
}

export type ResumeVariant = "basic" | "operational" | "launch";

const launchSignals: Record<QuestionId, AnswerKey[]> = {
  q1: ["A"],
  q2: ["B"],
  q3: ["B"],
};

const operationalSignals: Record<QuestionId, AnswerKey[]> = {
  q1: ["B", "C", "D"],
  q2: ["A", "C", "D"],
  q3: ["A", "C", "D"],
};

export function classifyResumeVariant(
  q1: OptionKey[],
  q2: OptionKey[],
  q3: OptionKey[]
): ResumeVariant {
  const selected: Record<QuestionId, AnswerKey[]> = {
    q1: activeAnswers(q1),
    q2: activeAnswers(q2),
    q3: activeAnswers(q3),
  };
  const hasSignal = Object.values(selected).some((answers) => answers.length > 0);
  if (!hasSignal) return "basic";

  let launchScore = 0;
  let opsScore = 0;
  (Object.keys(selected) as QuestionId[]).forEach((qid) => {
    for (const ans of selected[qid]) {
      if (launchSignals[qid].includes(ans)) launchScore += 1;
      if (operationalSignals[qid].includes(ans)) opsScore += 1;
    }
  });

  if (launchScore === 0 && opsScore === 0) return "basic";
  // Launch has 3 possible signals vs 9 for ops; weight launch hits 2x to balance.
  const launchWeighted = launchScore * 2;
  if (launchWeighted > opsScore) return "launch";
  if (opsScore > launchWeighted) return "operational";
  return "basic";
}

const pdfPaths: Record<ResumeVariant, Record<Lang, string>> = {
  basic: {
    ru: "/resumes/resume_basic_ru.pdf",
    en: "/resumes/resume_basic_en.pdf",
  },
  operational: {
    ru: "/resumes/resume_operational_ru.pdf",
    en: "/resumes/resume_operational_en.pdf",
  },
  launch: {
    ru: "/resumes/resume_launch_ru.pdf",
    en: "/resumes/resume_launch_en.pdf",
  },
};

export function selectPdfPath(
  lang: Lang,
  variant: ResumeVariant = "basic"
): string {
  return pdfPaths[variant][lang];
}
