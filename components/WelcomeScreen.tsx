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
    <div className="flex flex-col items-center text-center gap-6 py-6">
      <Avatar size={88} />
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-4xl font-extrabold leading-[0.95] tracking-tight">
          {ui.name[lang]}
        </h1>
        <p className="text-muted-foreground text-sm">{ui.role[lang]}</p>
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        {ui.welcomeTags.map((tag, i) => {
          const colors = [
            "bg-pop-yellow text-black",
            "bg-pop-green text-black",
            "bg-pop-pink text-black",
            "bg-pop-sky text-black",
          ];
          return (
            <Badge
              key={i}
              className={`${colors[i % colors.length]} border-0 rounded-full px-3 py-1 text-xs font-semibold`}
            >
              {tag[lang]}
            </Badge>
          );
        })}
      </div>
      <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
        {ui.welcomeText[lang]}
      </p>
      <div className="flex flex-col items-center gap-2 w-full">
        <Button
          onClick={onStart}
          className="w-full rounded-full bg-white text-black hover:bg-white/90 font-semibold"
          size="lg"
        >
          {ui.cta[lang]}
          <IconArrowRight size={16} />
        </Button>
        <p className="text-xs text-muted-foreground">{ui.ctaHint[lang]}</p>
      </div>
    </div>
  );
}
