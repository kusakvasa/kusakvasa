import type { OptionKey } from "./content";

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

const defaultResultIds = [
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
    priority: 100,
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
    priority: 88,
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
      q2: ["A"],
      q3: ["A", "C"],
    },
    priority: 82,
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
      ru: "Унифицировала данные по десяткам профессий",
      en: "Unified data across dozens of professions",
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
    priority: 78,
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
      q3: ["D"],
    },
    priority: 94,
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
    priority: 96,
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
    priority: 92,
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
      q1: ["A", "D"],
      q2: ["B", "D"],
      q3: ["B", "C", "D"],
    },
    priority: 90,
  },
  {
    id: "founder-pnl",
    source: {
      ru: "Основательница @ Едем дальше",
      en: "Founder @ Edem Dalshe",
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
      ru: "Собрала проект от экономики до операций",
      en: "Ran a project from economics to operations",
    },
    description: {
      ru: "Как основательница тревел-коммьюнити считала экономику проекта, запускала маркетинг, собирала продуктовую линейку и вела сами заезды.",
      en: "As the founder of a travel community, owned P&L, marketing, product lineup, and trip operations.",
    },
    tags: {
      q1: ["A", "C", "D"],
      q2: ["B", "D"],
      q3: ["B", "C", "D"],
    },
    priority: 84,
  },
  {
    id: "jtbd-soldout",
    source: {
      ru: "Основательница @ Едем дальше",
      en: "Founder @ Edem Dalshe",
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
      q1: ["A", "C"],
      q2: ["A", "B"],
      q3: ["B", "C"],
    },
    priority: 72,
  },
  {
    id: "ai-book",
    source: {
      ru: "Менеджер проектов @ Аркадий Сандлер",
      en: "Project Manager @ Arkady Sandler",
    },
    period: {
      ru: "2021 — 2023",
      en: "2021 — 2023",
    },
    label: {
      ru: "AI-контент",
      en: "AI content",
    },
    title: {
      ru: "Довела сложный контент до готового продукта",
      en: "Turned complex content into a finished product",
    },
    description: {
      ru: "Прошла путь от большого Excel-файла до книги по искусственному интеллекту тиражом 1000 экземпляров.",
      en: "Took an artificial intelligence book from a large Excel file to a finished 1,000-copy print run.",
    },
    tags: {
      q1: ["A", "B"],
      q2: ["B", "C"],
      q3: ["B"],
    },
    priority: 70,
  },
  {
    id: "voice-assistant-research",
    source: {
      ru: "Менеджер проектов @ Аркадий Сандлер",
      en: "Project Manager @ Arkady Sandler",
    },
    period: {
      ru: "2021 — 2023",
      en: "2021 — 2023",
    },
    label: {
      ru: "исследование",
      en: "research",
    },
    title: {
      ru: "Организовала исследование на 1000+ участников",
      en: "Ran research with 1,000+ participants",
    },
    description: {
      ru: "Собрала трёхэтапное исследование о голосовых ассистентах и довела его до B2B-руководства.",
      en: "Organized a three-stage study on voice assistants and turned it into a B2B guide.",
    },
    tags: {
      q1: ["A", "B", "D"],
      q2: ["A", "D"],
      q3: ["A", "B", "D"],
    },
    priority: 68,
  },
];

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
    return defaultResultIds
      .map((id) => resultBullets.find((bullet) => bullet.id === id))
      .filter((bullet): bullet is ResultBullet => Boolean(bullet));
  }

  const ranked = resultBullets
    .map((bullet) => ({
      bullet,
      score: scoreBullet(bullet, selected),
    }))
    .filter(({ score, bullet }) => score > bullet.priority / 100)
    .sort((a, b) => b.score - a.score || b.bullet.priority - a.bullet.priority)
    .map(({ bullet }) => bullet);

  const fallback = defaultResultIds
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

export function selectPdfPath(): string {
  return "/resumes/resume_default.pdf";
}
