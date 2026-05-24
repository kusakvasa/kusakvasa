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
      ru: "Перевела ручной сбор данных в дашборды",
      en: "Moved manual data collection into dashboards",
    },
    description: {
      ru: "Убрала Google-таблицы из ежедневной рутины, собрала 4 дашборда с аналитиками и разработчиками и освободила 250+ часов кураторов в месяц.",
      en: "Replaced daily Google Sheets work with 4 dashboards built with analysts and developers, freeing 250+ curator hours per month.",
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
      ru: "Разложила работу Карьерного центра на понятные метрики, чтобы команда видела связь между продуктом, воронкой и трудоустройством выпускников.",
      en: "Mapped Career Center work into clear metrics so the team could connect product work, funnel movement, and graduate employment outcomes.",
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
      ru: "Проверила сегментацию цифрами",
      en: "Validated segmentation with data",
    },
    description: {
      ru: "Через регрессионную модель показала, что старая сегментация не помогает принимать решения, и перенаправила аналитический ресурс на более полезные задачи.",
      en: "Used a regression model to show that the old segmentation did not support decisions, then redirected analytics time to higher-value work.",
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
      ru: "Унифицировала данные по 90+ курсам",
      en: "Unified data across 90+ courses",
    },
    description: {
      ru: "Собрала единые правила подсчёта метрик, опросники качества и отчётность по трудоустройству, чтобы убрать лишние касания и сравнивать программы честно.",
      en: "Created shared metric rules, LX surveys, and employment reporting to remove extra touchpoints and compare programs cleanly.",
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
      ru: "Провела команду через новые инструменты",
      en: "Helped a team adopt new tools",
    },
    description: {
      ru: "Переводила команду из 30 человек на новые аналитические процессы, чтобы изменение прижилось в работе, а не осталось в презентации.",
      en: "Moved a 30-person team into new analytics workflows so the change became part of everyday work instead of staying in a deck.",
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
      ru: "Нашла новую модель и позиционирование продукта",
      en: "Found a new product model and positioning",
    },
    description: {
      ru: "Провела качественное и количественное исследование аудитории, собрала новую сегментацию и помогла перезапустить продуктовую линейку.",
      en: "Ran qualitative and quantitative audience research, built a new segmentation, and helped relaunch the product lineup.",
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
      ru: "Новая сегментация и продуктовая линейка помогли распродать 100% поездок ближайшего сезона на три месяца раньше обычного.",
      en: "The new segmentation and product lineup helped sell out 100% of the upcoming season three months earlier than usual.",
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
      ru: "Запустила спецпроект с лидами и партнёрами",
      en: "Launched a special project with leads and partners",
    },
    description: {
      ru: "Сделала аудиоспектакль для Архстояния, привела 400+ тёплых лидов и закрыла финансирование через краудфандинг и 5 корпоративных партнёрств.",
      en: "Produced an audio experience for Archstoyanie, brought in 400+ warm leads, and secured funding through crowdfunding and 5 corporate partnerships.",
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
      ru: "Проверяла продукт через интервью и продажи",
      en: "Validated product decisions through interviews and sales",
    },
    description: {
      ru: "Интервью с клиентами помогали выбирать длительность и локации поездок; отдельные заезды распродавались за сутки.",
      en: "JTBD interviews helped choose trip duration and locations; some trips sold out within a day.",
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
      ru: "Собрала программу 3-дневного интенсива в ТОЛКе (Т-Банк)",
      en: "Built the program for a 3-day TOLK intensive (T-Bank)",
    },
    description: {
      ru: "Программный менеджер основной программы крупнейшего ивента по финансовой грамотности в РФ (100k+ участников). 4 индивидуальных формата под медийных спикеров, координация 12 часов прямого эфира.",
      en: "Program manager of the main program at Russia's largest financial literacy event (100k+ participants). 4 custom formats for media speakers, coordinated 12 hours of live broadcast.",
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
