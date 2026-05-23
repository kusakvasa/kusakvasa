"use client";

import { IconDownload, IconBrandTelegram, IconArrowLeft } from "@tabler/icons-react";
import Image from "next/image";
import { ui, OptionKey, TELEGRAM_URL } from "@/lib/content";
import { selectPdfPath, selectResultBullets } from "@/lib/chipMapping";
import { useLang } from "./LangContext";
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
  const bullets = selectResultBullets(q1, q2, q3);
  const pdfPath = selectPdfPath();

  return (
    <div className="flex flex-col gap-6 py-4">
      <div className="result-identity flex items-center gap-3">
        <div className="result-avatar-stage">
          <span className="result-motion result-motion--orbit" aria-hidden="true" />
          <span className="result-motion result-motion--dot result-motion--dot-orange" aria-hidden="true" />
          <span className="result-motion result-motion--dot result-motion--dot-lime" aria-hidden="true" />
          <span className="result-motion result-motion--cursor" aria-hidden="true" />
          <Image
            src="/varya-photo.jpeg"
            alt={ui.photoAlt[lang]}
            width={128}
            height={128}
            className="result-photo"
          />
        </div>
        <div>
          <h1 className="text-xl font-extrabold leading-tight tracking-normal">
            {ui.name[lang]}
          </h1>
          <p className="text-xs text-muted-foreground">{ui.role[lang]}</p>
        </div>
      </div>

      <div className="flex flex-col gap-2.5">
        {bullets.map((bullet) => (
          <article key={bullet.id} className="result-chip">
            <div className="result-chip-label">{bullet.label[lang]}</div>
            <div className="result-chip-source">{bullet.source[lang]}</div>
            <div className="result-chip-period">{bullet.period[lang]}</div>
            <h3>{bullet.title[lang]}</h3>
            <p>{bullet.description[lang]}</p>
          </article>
        ))}
      </div>

      <div className="action-stack flex flex-col gap-2 pt-2">
        <a
          href={pdfPath}
          download="Варвара_Федорова_резюме.pdf"
          className={cn(
            buttonVariants({ size: "lg" }),
            "game-cta action-button gap-2 font-extrabold text-black"
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
            "game-outline action-button gap-2"
          )}
        >
          <IconBrandTelegram size={16} />
          {ui.contactTg[lang]}
        </a>
        <Button onClick={onBack} variant="ghost" size="lg" className="game-back action-button">
          <IconArrowLeft size={16} />
          {ui.back[lang]}
        </Button>
      </div>
    </div>
  );
}
