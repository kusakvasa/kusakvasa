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
  name: { ru: "Варвара Фёдорова", en: "Varvara Fedorova" },
  role: { ru: "Менеджер продукта", en: "Product Manager" },
  welcomeText: {
    ru: "Нажмите кнопку — получите резюме, которое отвечает именно на ваши вопросы",
    en: "Tap the button — get a resume that answers your exact questions",
  },
  cta: { ru: "Найти своё резюме", en: "Find my resume" },
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
      ru: "Что вам важно в PM прямо сейчас?",
      en: "What do you need from a PM right now?",
    },
    options: [
      {
        key: "A",
        icon: "IconChartBar",
        title: { ru: "Аналитика и метрики", en: "Analytics & metrics" },
        hint: { ru: "данные, дашборды, SQL", en: "data, dashboards, SQL" },
      },
      {
        key: "B",
        icon: "IconRocket",
        title: { ru: "Запуск и рост продукта", en: "Product launch & growth" },
        hint: {
          ru: "выводить фичи, считать unit-экономику",
          en: "shipping features, unit economics",
        },
      },
      {
        key: "C",
        icon: "IconSettings",
        title: { ru: "Эффективность процессов", en: "Process efficiency" },
        hint: {
          ru: "автоматизация, снижение ручного труда",
          en: "automation, less manual work",
        },
      },
      {
        key: "D",
        icon: "IconUsers",
        title: { ru: "Команда и люди", en: "Team & people" },
        hint: {
          ru: "онбординг, обучение, рост команды",
          en: "onboarding, training, team growth",
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
      ru: "Какие навыки важны для вашей задачи?",
      en: "Which skills matter most for your role?",
    },
    options: [
      {
        key: "A",
        icon: "IconBrain",
        title: { ru: "Системное мышление", en: "Systems thinking" },
        hint: {
          ru: "понимание архитектуры, а не только инструментов",
          en: "architecture, not just tools",
        },
      },
      {
        key: "B",
        icon: "IconPackage",
        title: {
          ru: "Запуск и доставка фич",
          en: "Shipping & delivery",
        },
        hint: {
          ru: "от идеи до прода, быстро и без потерь",
          en: "idea to prod, fast and clean",
        },
      },
      {
        key: "C",
        icon: "IconRefresh",
        title: {
          ru: "Эффективность и автоматизация",
          en: "Efficiency & automation",
        },
        hint: {
          ru: "убрать ручной труд, выстроить процессы",
          en: "kill manual work, build processes",
        },
      },
      {
        key: "D",
        icon: "IconSchool",
        title: { ru: "Рост команды", en: "Team growth" },
        hint: {
          ru: "онбординг, обучение, передача знаний",
          en: "onboarding, training, knowledge sharing",
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
      ru: "С какой командой вы работаете?",
      en: "What kind of team are you building for?",
    },
    options: [
      {
        key: "A",
        icon: "IconBuildingFactory2",
        title: { ru: "Стартап / быстрый рост", en: "Startup / fast growth" },
        hint: {
          ru: "скорость важнее процессов",
          en: "speed over process",
        },
      },
      {
        key: "B",
        icon: "IconBuilding",
        title: { ru: "Корпорация", en: "Corporation" },
        hint: {
          ru: "процессы, стейкхолдеры, согласования",
          en: "processes, stakeholders, approvals",
        },
      },
      {
        key: "C",
        icon: "IconSitemap",
        title: {
          ru: "Кросс-функциональная команда",
          en: "Cross-functional team",
        },
        hint: {
          ru: "дизайн, разработка, аналитика вместе",
          en: "design, dev, analytics together",
        },
      },
      {
        key: "D",
        icon: "IconTrendingUp",
        title: {
          ru: "Есть аналитики в команде",
          en: "Has analysts on the team",
        },
        hint: {
          ru: "важно говорить с ними на одном языке",
          en: "need to speak their language",
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
