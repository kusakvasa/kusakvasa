"use client";

import { IconArrowRight } from "@tabler/icons-react";
import { ui } from "@/lib/content";
import { useLang } from "./LangContext";
import Avatar from "./Avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function WelcomeScreen({ onStart }: { onStart: () => void }) {
  const { lang } = useLang();
  return (
    <div className="flex flex-col items-center text-center gap-6 py-8">
      <Avatar size={96} />
      <div className="flex flex-col items-center gap-1">
        <h1 className="font-display italic text-4xl font-bold leading-tight tracking-tight">
          {ui.name[lang]}
        </h1>
        <p className="text-muted-foreground text-sm">{ui.role[lang]}</p>
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        {ui.welcomeTags.map((tag, i) => (
          <Badge key={i} variant="outline" className="text-xs font-normal">
            {tag[lang]}
          </Badge>
        ))}
      </div>
      <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
        {ui.welcomeText[lang]}
      </p>
      <div className="flex flex-col items-center gap-2 w-full">
        <Button onClick={onStart} className="w-full" size="lg">
          {ui.cta[lang]}
          <IconArrowRight size={16} />
        </Button>
        <p className="text-xs text-muted-foreground">{ui.ctaHint[lang]}</p>
      </div>
    </div>
  );
}
