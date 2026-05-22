"use client";

import { ui } from "@/lib/content";
import { useLang } from "./LangContext";
import Avatar from "./Avatar";

export default function WelcomeScreen({ onStart }: { onStart: () => void }) {
  const { lang } = useLang();
  return (
    <div className="flex flex-col items-center text-center gap-5 py-8">
      <Avatar size={96} />
      <div>
        <h1 className="text-2xl font-bold">{ui.name[lang]}</h1>
        <p className="text-gray-600 mt-1">{ui.role[lang]}</p>
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        {ui.welcomeTags.map((tag, i) => (
          <span
            key={i}
            className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700"
          >
            {tag[lang]}
          </span>
        ))}
      </div>
      <p className="text-gray-700 max-w-xs">{ui.welcomeText[lang]}</p>
      <div className="flex flex-col items-center gap-2 w-full">
        <button
          onClick={onStart}
          className="w-full bg-gray-900 text-white rounded-full py-3 px-6 font-medium hover:bg-gray-800 transition-colors"
        >
          {ui.cta[lang]}
        </button>
        <p className="text-xs text-gray-500">{ui.ctaHint[lang]}</p>
      </div>
    </div>
  );
}
