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

  return (
    <div className="flex flex-col gap-6 py-4">
      <div className="flex items-center gap-3">
        <Avatar size={52} />
        <div>
          <h1 className="text-xl font-extrabold leading-tight tracking-tight">
            {ui.name[lang]}
          </h1>
          <p className="text-xs text-muted-foreground">{ui.role[lang]}</p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
          {ui.practicumLabel[lang]}
        </h2>
        <div className="flex flex-col gap-2">
          {practicum.map((chip, i) => (
            <div
              key={chip.id}
              className={cn(
                "rounded-3xl px-4 py-3 text-sm font-medium leading-snug text-black",
                practicumColors[i % practicumColors.length]
              )}
            >
              {chip[lang]}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
          {ui.smenaLabel[lang]}
        </h2>
        <div className="flex flex-col gap-2">
          {smena.map((chip, i) => (
            <div
              key={chip.id}
              className={cn(
                "rounded-3xl px-4 py-3 text-sm font-medium leading-snug text-black",
                smenaColors[i % smenaColors.length]
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
            "w-full gap-2 rounded-full bg-white text-black hover:bg-white/90 font-semibold"
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
            "w-full gap-2 rounded-full border-white/20 bg-transparent hover:bg-white/5"
          )}
        >
          <IconBrandTelegram size={16} />
          {ui.contactTg[lang]}
        </a>
        <Button onClick={onBack} variant="ghost" size="lg" className="w-full rounded-full">
          <IconArrowLeft size={16} />
          {ui.back[lang]}
        </Button>
      </div>
    </div>
  );
}
