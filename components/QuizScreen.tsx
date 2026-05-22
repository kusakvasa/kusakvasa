"use client";

import { ui, Question, OptionKey } from "@/lib/content";
import { useLang } from "./LangContext";

interface QuizScreenProps {
  question: Question;
  selected: OptionKey[];
  onChange: (selected: OptionKey[]) => void;
  onNext: () => void;
  onBack?: () => void;
  nextLabel?: { ru: string; en: string };
  step: number;
  total: number;
}

export default function QuizScreen({
  question,
  selected,
  onChange,
  onNext,
  onBack,
  nextLabel,
  step,
  total,
}: QuizScreenProps) {
  const { lang } = useLang();

  function toggle(key: OptionKey) {
    if (key === "none") {
      onChange(selected.includes("none") ? [] : ["none"]);
      return;
    }
    const withoutNone = selected.filter((k) => k !== "none");
    if (withoutNone.includes(key)) {
      onChange(withoutNone.filter((k) => k !== key));
    } else {
      onChange([...withoutNone, key]);
    }
  }

  const canProceed = selected.length > 0;

  return (
    <div className="flex flex-col gap-5 py-4">
      <div className="w-full bg-gray-200 rounded-full h-1">
        <div
          className="bg-gray-900 h-1 rounded-full transition-all"
          style={{ width: `${(step / total) * 100}%` }}
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold">{question.title[lang]}</h2>
        <p className="text-sm text-gray-500 mt-1">{ui.multi[lang]}</p>
      </div>

      <div className="flex flex-col gap-2">
        {question.options.map((opt) => {
          const isSelected = selected.includes(opt.key);
          const isNone = opt.key === "none";
          return (
            <button
              key={opt.key}
              onClick={() => toggle(opt.key)}
              className={`text-left rounded-xl px-4 py-3 border-2 transition-all ${
                isNone
                  ? isSelected
                    ? "border-gray-500 bg-gray-100"
                    : "border-dashed border-gray-300 bg-gray-50 text-gray-500"
                  : isSelected
                  ? "border-violet-600 bg-violet-50"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="text-xl">{opt.emoji}</span>
                <div className="flex-1">
                  <div className="font-semibold text-sm">
                    {opt.title[lang]}
                  </div>
                  {opt.hint[lang] && (
                    <div className="text-xs text-gray-500 mt-0.5">
                      {opt.hint[lang]}
                    </div>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="flex flex-col gap-2">
        <button
          onClick={onNext}
          disabled={!canProceed}
          className="w-full bg-gray-900 text-white rounded-full py-3 px-6 font-medium hover:bg-gray-800 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          {(nextLabel ?? ui.next)[lang]}
        </button>
        {onBack && (
          <button
            onClick={onBack}
            className="w-full rounded-full py-2 px-6 text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            {ui.back[lang]}
          </button>
        )}
      </div>
    </div>
  );
}
