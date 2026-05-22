"use client";

import { useLang } from "./LangContext";

export default function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="inline-flex rounded-full border border-gray-300 bg-white text-xs overflow-hidden">
      <button
        onClick={() => setLang("ru")}
        className={`px-3 py-1 transition-colors ${
          lang === "ru" ? "bg-gray-900 text-white" : "text-gray-600"
        }`}
      >
        RU
      </button>
      <button
        onClick={() => setLang("en")}
        className={`px-3 py-1 transition-colors ${
          lang === "en" ? "bg-gray-900 text-white" : "text-gray-600"
        }`}
      >
        EN
      </button>
    </div>
  );
}
