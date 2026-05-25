"use client";

import { IconDownload, IconBrandTelegram, IconArrowLeft } from "@tabler/icons-react";
import Image from "next/image";
import { ui, OptionKey, TELEGRAM_URL } from "@/lib/content";
import {
  alsoExperienceCards,
  classifyResumeVariant,
  isAllNone,
  resolveDescription,
  selectPdfPath,
  selectResultBullets,
  type ResultBullet,
} from "@/lib/chipMapping";
import { useLang } from "./LangContext";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ResultScreenProps {
  q1: OptionKey[];
  q2: OptionKey[];
  q3: OptionKey[];
  onBack: () => void;
}

interface ExperienceGroup {
  key: string;
  source: ResultBullet["source"];
  period: ResultBullet["period"];
  bullets: ResultBullet[];
}

function groupByExperience(bullets: ResultBullet[]): ExperienceGroup[] {
  const order: string[] = [];
  const map = new Map<string, ExperienceGroup>();
  for (const bullet of bullets) {
    const key = bullet.source.ru;
    const existing = map.get(key);
    if (existing) {
      existing.bullets.push(bullet);
    } else {
      const group: ExperienceGroup = {
        key,
        source: bullet.source,
        period: bullet.period,
        bullets: [bullet],
      };
      map.set(key, group);
      order.push(key);
    }
  }
  return order.map((key) => map.get(key)!);
}

export default function ResultScreen({ q1, q2, q3, onBack }: ResultScreenProps) {
  const { lang } = useLang();
  const allNone = isAllNone(q1, q2, q3);
  const bullets = allNone ? [] : selectResultBullets(q1, q2, q3);
  const groups = groupByExperience(bullets);
  const variant = classifyResumeVariant(q1, q2, q3);
  const pdfPath = selectPdfPath(lang, variant);
  const downloadName =
    lang === "en" ? "Varvara_Fedorova_CV.pdf" : "Варвара_Фёдорова_резюме.pdf";

  return (
    <div className="flex flex-col gap-6 py-4">
      <div className="result-identity flex items-center gap-3">
        <div className="result-avatar-stage">
          <span className="result-motion result-motion--orbit" aria-hidden="true" />
          <span className="result-motion result-motion--dot result-motion--dot-orange" aria-hidden="true" />
          <span className="result-motion result-motion--dot result-motion--dot-lime" aria-hidden="true" />
          <span className="result-motion result-motion--dot result-motion--dot-pink" aria-hidden="true" />
          <span className="result-motion result-motion--dot result-motion--dot-blue" aria-hidden="true" />
          <span className="result-motion result-motion--dot result-motion--dot-mini" aria-hidden="true" />
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

      {allNone ? (
        <div className="flex flex-col gap-5">
          <p className="text-sm leading-relaxed text-foreground/90">
            {ui.noneSummary[lang]}
          </p>
          <section className="flex flex-col gap-2.5">
            <header className="result-experience-heading">
              <h2>{ui.alsoExperience[lang]}</h2>
            </header>
            <div className="flex flex-col gap-2.5">
              {alsoExperienceCards.map((card) => (
                <article key={card.id} className="result-chip">
                  <div className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                    {card.period[lang]}
                  </div>
                  <h3>{card.title[lang]}</h3>
                  <p>{card.description[lang]}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          {groups.map((group) => (
            <section key={group.key} className="flex flex-col gap-2.5">
              <header className="result-experience-heading">
                <h2>{group.source[lang]}</h2>
                <p>{group.period[lang]}</p>
              </header>
              <div className="flex flex-col gap-2.5">
                {group.bullets.map((bullet) => (
                  <article key={bullet.id} className="result-chip">
                    <h3>{bullet.title[lang]}</h3>
                    <p>{resolveDescription(bullet, variant)[lang]}</p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}

      <div className="action-stack flex flex-col gap-2 pt-2">
        <a
          href={pdfPath}
          download={downloadName}
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
