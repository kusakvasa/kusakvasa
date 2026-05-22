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
import { IconDownload, IconBrandTelegram, IconArrowLeft } from "@tabler/icons-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
        <Avatar size={64} />
        <div>
          <h1 className="text-xl font-bold">{ui.name[lang]}</h1>
          <p className="text-sm text-muted-foreground">{ui.role[lang]}</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm">{ui.practicumLabel[lang]}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          {practicum.map((chip) => (
            <Badge
              key={chip.id}
              variant="secondary"
              className="whitespace-normal h-auto py-2 text-xs leading-relaxed"
            >
              {chip[lang]}
            </Badge>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-sm">{ui.smenaLabel[lang]}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          {smena.map((chip) => (
            <Badge
              key={chip.id}
              variant="outline"
              className="whitespace-normal h-auto py-2 text-xs leading-relaxed"
            >
              {chip[lang]}
            </Badge>
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
