export type Lang = "ru" | "en";

export type OptionKey = "A" | "B" | "C" | "D" | "none";

export interface QuestionOption {
  key: OptionKey;
  icon: string;
  title: { ru: string; en: string };
  hint: { ru: string; en: string };
}

export interface Question {
  id: "q1" | "q2" | "q3";
  title: { ru: string; en: string };
  options: QuestionOption[];
}

export const ui = {
  name: { ru: "Варя Фёдорова", en: "Varvara Fedorova" },
  role: { ru: "Менеджер проектов", en: "Project Manager" },
  photoAlt: { ru: "Портрет Вари Фёдоровой", en: "Portrait of Varya Fedorova" },
  welcomeText: {
    ru: "Нажмите кнопку — получите резюме, которое отвечает на ваши запросы",
    en: "Tap the button — get a resume that answers your exact questions",
  },
  cta: { ru: "Найти своё резюме", en: "Find my resume" },
  skipCta: {
    ru: "Не хочу искать, хочу сразу резюме",
    en: "Skip the search, show the resume",
  },
  ctaHint: { ru: "займёт ~1 минуту", en: "takes ~1 minute" },
  multi: { ru: "можно выбрать несколько", en: "multiple choice" },
  next: { ru: "Далее", en: "Next" },
  back: { ru: "Назад", en: "Back" },
  toResult: { ru: "Смотреть результат", en: "See result" },
  noneLabel: { ru: "Ничего из этого", en: "None of the above" },
  noneHint: { ru: "посмотрим что дальше", en: "let's see what's next" },
  downloadPdf: { ru: "Скачать резюме (PDF)", en: "Download resume (PDF)" },
  contactTg: { ru: "Написать в Telegram", en: "Contact on Telegram" },
  practicumLabel: { ru: "Яндекс.Практикум", en: "Yandex Practicum" },
  smenaLabel: { ru: "Станция Смена", en: "Station Smena" },
  practicumTitle: {
    ru: "Менеджер проектов @ Яндекс Практикум",
    en: "Project Manager @ Yandex Practicum",
  },
  practicumDates: {
    ru: "май 2023 — настоящее время",
    en: "May 2023 — Present",
  },
  smenaTitle: {
    ru: "B2C Менеджер продукта @ Станция Смена",
    en: "B2C Product Manager @ Station Smena",
  },
  smenaDates: {
    ru: "ноябрь 2024 - март 2026",
    en: "November 2024 - March 2026",
  },
  welcomeTags: [
    { ru: "data-driven (how else)", en: "data-driven (how else)" },
    { ru: "оптимизация процессов", en: "process optimization" },
    { ru: "развитие продукта", en: "product growth" },
    { ru: "нишевый юмор", en: "niche humor" },
  ],
};

export const questions: Question[] = [
  {
    id: "q1",
    title: {
      ru: "Что нужно сделать в первые месяцы?",
      en: "What needs to happen in the first months?",
    },
    options: [
      {
        key: "A",
        icon: "IconRocket",
        title: { ru: "Запустить новое", en: "Launch something new" },
        hint: {
          ru: "проект, продукт, рынок, инициативу",
          en: "project, product, market, initiative",
        },
      },
      {
        key: "B",
        icon: "IconSettings",
        title: { ru: "Навести порядок в процессе", en: "Bring order to a process" },
        hint: {
          ru: "разложить хаос, убрать узкие места",
          en: "untangle chaos, remove bottlenecks",
        },
      },
      {
        key: "C",
        icon: "IconRefresh",
        title: { ru: "Повысить эффективность", en: "Improve efficiency" },
        hint: {
          ru: "сократить ручной труд, опрозрачить метрики",
          en: "reduce manual work, improve metrics",
        },
      },
      {
        key: "D",
        icon: "IconUsers",
        title: { ru: "Наладить взаимодействие", en: "Set up collaboration" },
        hint: {
          ru: "согласовать роли, ритм и ожидания",
          en: "align roles, cadence, and expectations",
        },
      },
      {
        key: "none",
        icon: "IconMoodConfuzed",
        title: { ru: "Ничего из этого", en: "None of the above" },
        hint: { ru: "посмотрим что дальше", en: "let's see what's next" },
      },
    ],
  },
  {
    id: "q2",
    title: {
      ru: "Где сейчас главная проблема?",
      en: "Where is the main friction right now?",
    },
    options: [
      {
        key: "A",
        icon: "IconChartBar",
        title: { ru: "Непрозрачные данные", en: "Unclear data" },
        hint: {
          ru: "нет метрик, дашбордов, единой картины",
          en: "no metrics, dashboards, shared picture",
        },
      },
      {
        key: "B",
        icon: "IconPackage",
        title: {
          ru: "Идеи застревают до запуска",
          en: "Ideas get stuck before launch",
        },
        hint: {
          ru: "много стримов, рисков, зависимостей",
          en: "many streams, risks, dependencies",
        },
      },
      {
        key: "C",
        icon: "IconRefresh",
        title: {
          ru: "Слишком много ручного труда",
          en: "Too much manual work",
        },
        hint: {
          ru: "процесс медленный и плохо масштабируется",
          en: "the process is slow and hard to scale",
        },
      },
      {
        key: "D",
        icon: "IconSitemap",
        title: { ru: "Сложно синхронизировать людей", en: "Hard to sync people" },
        hint: {
          ru: "много команд, согласований, интересов",
          en: "many teams, approvals, interests",
        },
      },
      {
        key: "none",
        icon: "IconMoodConfuzed",
        title: { ru: "Ничего из этого", en: "None of the above" },
        hint: { ru: "", en: "" },
      },
    ],
  },
  {
    id: "q3",
    title: {
      ru: "Какой результат нужен?",
      en: "What result do you need?",
    },
    options: [
      {
        key: "A",
        icon: "IconChartBar",
        title: { ru: "Появилась ясная картина в цифрах", en: "The numbers are clear" },
        hint: {
          ru: "метрики, мониторинг, понятный статус",
          en: "metrics, monitoring, clear status",
        },
      },
      {
        key: "B",
        icon: "IconRocket",
        title: { ru: "Проект вышел в срок и без развала", en: "The project shipped on time" },
        hint: {
          ru: "от идеи до запуска, с контролем рисков",
          en: "idea to launch, risks under control",
        },
      },
      {
        key: "C",
        icon: "IconTrendingUp",
        title: {
          ru: "Есть измеримый бизнес-эффект",
          en: "There is measurable business impact",
        },
        hint: {
          ru: "ROI, P&L, экономия времени или ресурсов",
          en: "ROI, P&L, saved time or resources",
        },
      },
      {
        key: "D",
        icon: "IconUsers",
        title: {
          ru: "Команде проще работать",
          en: "The team can work more smoothly",
        },
        hint: {
          ru: "меньше блокеров, лучше онбординг и ритм",
          en: "fewer blockers, better onboarding and rhythm",
        },
      },
      {
        key: "none",
        icon: "IconMoodConfuzed",
        title: { ru: "Ничего из этого", en: "None of the above" },
        hint: { ru: "", en: "" },
      },
    ],
  },
];

export const TELEGRAM_URL = "https://t.me/vverlassen";
