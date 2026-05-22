"use client";

import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import { ui } from "@/lib/content";
import { useLang } from "./LangContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface WelcomeScreenProps {
  onStart: () => void;
  onSkip: () => void;
}

export default function WelcomeScreen({ onStart, onSkip }: WelcomeScreenProps) {
  const { lang } = useLang();
  const tagStyles = [
    "bg-pop-yellow welcome-tag--pill",
    "bg-pop-green welcome-tag--slug",
    "bg-pop-pink welcome-tag--pebble",
    "bg-pop-sky welcome-tag--ticket",
  ];

  return (
    <div className="flex flex-col items-center gap-6 py-5 text-center">
      <div className="welcome-avatar-stage">
        <span className="welcome-avatar-slice bg-pop-orange" aria-hidden="true" />
        <span className="welcome-avatar-slice welcome-avatar-slice--sky bg-pop-sky" aria-hidden="true" />
        <Image
          src="/varya-photo.jpeg"
          alt={ui.photoAlt[lang]}
          width={640}
          height={640}
          className="welcome-photo"
          priority
        />
      </div>
      <div className="flex flex-col items-center gap-2">
        <h1 className="max-w-[360px] text-[2.6rem] font-extrabold leading-[0.92] tracking-normal">
          {ui.name[lang]}
        </h1>
        <p className="role-chip text-sm font-bold">{ui.role[lang]}</p>
      </div>
      <div className="welcome-tag-board">
        {ui.welcomeTags.map((tag, i) => {
          return (
            <Badge
              key={i}
              className={`${tagStyles[i % tagStyles.length]} welcome-tag border-0 text-black`}
            >
              {tag[lang]}
            </Badge>
          );
        })}
      </div>
      <p className="max-w-[320px] text-sm font-medium leading-relaxed text-muted-foreground">
        {ui.welcomeText[lang]}
      </p>
      <div className="flex flex-col items-center gap-2 w-full">
        <Button
          onClick={onStart}
          className="game-cta w-full font-extrabold text-black"
          size="lg"
        >
          {ui.cta[lang]}
          <IconArrowRight size={16} />
        </Button>
        <Button
          onClick={onSkip}
          variant="ghost"
          className="welcome-skip w-full text-center font-bold"
          size="lg"
        >
          {ui.skipCta[lang]}
        </Button>
        <p className="text-xs text-muted-foreground">{ui.ctaHint[lang]}</p>
      </div>
    </div>
  );
}
