"use client";

import { IconDownload, IconBrandTelegram, IconArrowLeft } from "@tabler/icons-react";
import { ui, OptionKey, TELEGRAM_URL } from "@/lib/content";
import { practicumChips, smenaChips, filterChips, selectPdfPath } from "@/lib/chipMapping";
import { useLang } from "./LangContext";
import Avatar from "./Avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ResultScreenProps {
  q1: OptionKey[];
  q2: OptionKey[];
  q3: OptionKey[];
  onBack: () => void;
}

export default function ResultScreen({ q1, q2, q3, onBack }: ResultScreenProps) {
  const { lang } = useLang();
  const practicum = filterChips(practicumChips, q1);
  const smena = filterChips(smenaChips, q1);
  const pdfPath = selectPdfPath(q2, q3);

  const practicumColors = ["bg-pop-yellow", "bg-pop-green", "bg-pop-orange", "bg-pop-pink"];
  const smenaColors = ["bg-pop-blue", "bg-pop-sky", "bg-pop-red"];
  const chipShapes = [
    "result-chip--scoop",
    "result-chip--ramp",
    "result-chip--loop",
    "result-chip--ticket",
  ];

  return (
    <div className="flex flex-col gap-6 py-4">
      <div className="result-identity flex items-center gap-3">
        <Avatar size={52} />
        <div>
          <h1 className="text-xl font-extrabold leading-tight tracking-normal">
            {ui.name[lang]}
          </h1>
          <p className="text-xs text-muted-foreground">{ui.role[lang]}</p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="section-ribbon text-xs font-bold uppercase text-black">
          {ui.practicumLabel[lang]}
        </h2>
        <div className="flex flex-col gap-2">
          {practicum.map((chip, i) => (
            <div
              key={chip.id}
              className={cn(
                "result-chip text-sm font-extrabold leading-snug text-black",
                practicumColors[i % practicumColors.length],
                chipShapes[i % chipShapes.length]
              )}
            >
              {chip[lang]}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="section-ribbon section-ribbon--blue text-xs font-bold uppercase text-black">
          {ui.smenaLabel[lang]}
        </h2>
        <div className="flex flex-col gap-2">
          {smena.map((chip, i) => (
            <div
              key={chip.id}
              className={cn(
                "result-chip text-sm font-extrabold leading-snug text-black",
                smenaColors[i % smenaColors.length],
                chipShapes[(i + 1) % chipShapes.length]
              )}
            >
              {chip[lang]}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2 pt-2">
        <a
          href={pdfPath}
          download="Варвара_Федорова_резюме.pdf"
          className={cn(
            buttonVariants({ size: "lg" }),
            "game-cta w-full gap-2 font-extrabold text-black"
          )}
        >
          <IconDownload size={16} />
          {ui.downloadPdf[lang]}
        </a>
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "game-outline w-full gap-2"
          )}
        >
          <IconBrandTelegram size={16} />
          {ui.contactTg[lang]}
        </a>
        <Button onClick={onBack} variant="ghost" size="lg" className="game-back w-full">
          <IconArrowLeft size={16} />
          {ui.back[lang]}
        </Button>
      </div>
    </div>
  );
}
