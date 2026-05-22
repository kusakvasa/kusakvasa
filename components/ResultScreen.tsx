"use client";

import { ui, OptionKey, TELEGRAM_URL } from "@/lib/content";
import {
  practicumChips,
  smenaChips,
  filterChips,
  selectPdfPath,
} from "@/lib/chipMapping";
import { useLang } from "./LangContext";
import Avatar from "./Avatar";

interface ResultScreenProps {
  q1: OptionKey[];
  q2: OptionKey[];
  q3: OptionKey[];
  onBack: () => void;
}

export default function ResultScreen({
  q1,
  q2,
  q3,
  onBack,
}: ResultScreenProps) {
  const { lang } = useLang();
  const practicum = filterChips(practicumChips, q1);
  const smena = filterChips(smenaChips, q1);
  const pdfPath = selectPdfPath(q2, q3);

  return (
    <div className="flex flex-col gap-6 py-4">
      <div className="flex items-center gap-4">
        <Avatar size={64} />
        <div>
          <h1 className="text-xl font-bold">{ui.name[lang]}</h1>
          <p className="text-sm text-gray-600">{ui.role[lang]}</p>
        </div>
      </div>

      <section>
        <h2 className="text-sm font-semibold text-violet-800 mb-2">
          {ui.practicumLabel[lang]}
        </h2>
        <div className="flex flex-col gap-2">
          {practicum.map((chip) => (
            <div
              key={chip.id}
              className="bg-violet-50 text-violet-900 rounded-xl px-3 py-2 text-sm"
            >
              {chip[lang]}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-sm font-semibold text-emerald-800 mb-2">
          {ui.smenaLabel[lang]}
        </h2>
        <div className="flex flex-col gap-2">
          {smena.map((chip) => (
            <div
              key={chip.id}
              className="bg-emerald-50 text-emerald-900 rounded-xl px-3 py-2 text-sm"
            >
              {chip[lang]}
            </div>
          ))}
        </div>
      </section>

      <div className="flex flex-col gap-2">
        <a
          href={pdfPath}
          download="Варвара_Федорова_резюме.pdf"
          className="w-full bg-gray-900 text-white rounded-full py-3 px-6 font-medium hover:bg-gray-800 transition-colors text-center"
        >
          {ui.downloadPdf[lang]}
        </a>
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-sky-50 text-sky-700 rounded-full py-3 px-6 font-medium hover:bg-sky-100 transition-colors text-center"
        >
          {ui.contactTg[lang]}
        </a>
        <button
          onClick={onBack}
          className="w-full rounded-full py-2 px-6 text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          {ui.back[lang]}
        </button>
      </div>
    </div>
  );
}
