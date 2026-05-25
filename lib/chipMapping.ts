import type { Lang, OptionKey } from "./content";

type QuestionId = "q1" | "q2" | "q3";
type AnswerKey = Exclude<OptionKey, "none">;

interface LocalizedText {
  ru: string;
  en: string;
}

export type ResumeVariant = "basic" | "operational" | "launch";

export interface ResultBullet {
  id: string;
  source: LocalizedText;
  period: LocalizedText;
  label: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  descriptionByVariant?: Partial<Record<ResumeVariant, LocalizedText>>;
  tags: Record<QuestionId, AnswerKey[]>;
  priority: number;
}

export function resolveDescription(
  bullet: ResultBullet,
  variant: ResumeVariant
): LocalizedText {
  return bullet.descriptionByVariant?.[variant] ?? bullet.description;
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
      ru: "Дашборды — для управления воронкой в реальном времени. Команда распределяет ресурсы эффективнее без дополнительного найма.",
      en: "Dashboards for real-time funnel management. The team allocates resources more efficiently without extra hires.",
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
      ru: "Собрала дерево метрик под бизнес-цели",
      en: "Built a metric tree tied to business goals",
    },
    description: {
      ru: "В дашбордах остались только метрики, которые напрямую или косвенно влияют на EBITDA. Лишнее не считаем.",
      en: "Only metrics that directly or indirectly impact EBITDA stayed on the dashboards. The rest is no longer tracked.",
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
      ru: "Раньше команда на её основе пыталась принимать продуктовые решения — теперь аналитический ресурс ушёл на более ценные задачи.",
      en: "It used to drive product decisions; now the analytics time goes into higher-value work.",
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
      ru: "Обучала и онбордила сама. В итоге команда знает, где искать ошибки и как работать с данными, знания не зависят от меня.",
      en: "Onboarded and trained the team myself. They now know where to look for errors and how to work with the data, knowledge doesn't sit only with me.",
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
      ru: "Провела комплексное количественное и качественное исследование аудитории. Теперь видно, как новые продукты влияют на маркетинговые и продуктовые воронки.",
      en: "Ran comprehensive quantitative and qualitative audience research. We now see how new products move marketing and product funnels.",
    },
    descriptionByVariant: {
      operational: {
        ru: "Провела комплексное количественное и качественное исследование аудитории. Превратила это в системную работу: каждый новый продукт сразу попадает в маркетинговые и продуктовые воронки.",
        en: "Ran comprehensive quantitative and qualitative audience research. Turned it into a recurring system: every new product flows straight into marketing and product funnels.",
      },
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
      ru: "Распродала линейку поездок раньше плана",
      en: "Got the trip lineup to sell out ahead of plan",
    },
    description: {
      ru: "100% поездок ближайшего сезона ушли на 3 месяца раньше обычного. Драйверы — новая сегментация и обновлённая линейка.",
      en: "100% of the upcoming season sold out 3 months earlier than usual. Drivers — new segmentation and a refreshed lineup.",
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
      ru: "Сделала аудиоспектакль на Архстоянии",
      en: "Made an audio performance at Archstoyanie",
    },
    description: {
      ru: "Привела 400+ тёплых лидов в воронку; финансирование закрыла краудфандингом и 5 корпоративных партнёрств без платного медиа.",
      en: "Brought 400+ warm leads into the funnel; funded through crowdfunding and 5 corporate partnerships with zero paid media.",
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
      ru: "Создала тревел-проект",
      en: "Built a travel project",
    },
    description: {
      ru: "Считала экономику, запускала маркетинг, собирала продуктовую линейку и вела сами заезды. С помощью JTBD-интервью нашла правильную длительность и ценность поездок — это позволило достигать быстрых солдаутов.",
      en: "Owned P&L, marketing, product lineup, and trip operations. JTBD interviews helped me find the right trip length and value, which drove fast sellouts.",
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
