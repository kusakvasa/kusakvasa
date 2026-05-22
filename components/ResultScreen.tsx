"use client";

import { IconDownload, IconBrandTelegram, IconArrowLeft } from "@tabler/icons-react";
import { ui, OptionKey, TELEGRAM_URL } from "@/lib/content";
import { practicumChips, smenaChips, filterChips, selectPdfPath } from "@/lib/chipMapping";
import { useLang } from "./LangContext";
import Avatar from "./Avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

  return (
    <div className="flex flex-col gap-5 py-4">
      <div className="flex items-center gap-4">
        <Avatar size={56} />
        <div>
          <h1 className="font-display italic text-xl font-bold leading-tight">
            {ui.name[lang]}
          </h1>
          <p className="text-xs text-muted-foreground">{ui.role[lang]}</p>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {ui.practicumLabel[lang]}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          {practicum.map((chip) => (
            <div
              key={chip.id}
              className="rounded-md border border-border bg-muted/40 px-3 py-2 text-sm leading-relaxed"
            >
              {chip[lang]}
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {ui.smenaLabel[lang]}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          {smena.map((chip) => (
            <div
              key={chip.id}
              className="rounded-md border border-border bg-muted/40 px-3 py-2 text-sm leading-relaxed"
            >
              {chip[lang]}
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="flex flex-col gap-2">
        <a
          href={pdfPath}
          download="Варвара_Федорова_резюме.pdf"
          className={cn(buttonVariants({ size: "lg" }), "w-full gap-2")}
        >
          <IconDownload size={16} />
          {ui.downloadPdf[lang]}
        </a>
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full gap-2")}
        >
          <IconBrandTelegram size={16} />
          {ui.contactTg[lang]}
        </a>
        <Button onClick={onBack} variant="ghost" size="lg" className="w-full">
          <IconArrowLeft size={16} />
          {ui.back[lang]}
        </Button>
      </div>
    </div>
  );
}
