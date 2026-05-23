"use client";

import {
  IconChartBar, IconRocket, IconSettings, IconUsers, IconMoodConfuzed,
  IconBrain, IconPackage, IconRefresh, IconSchool,
  IconBuildingFactory2, IconBuilding, IconSitemap, IconTrendingUp,
  IconArrowRight, IconArrowLeft,
  type Icon,
} from "@tabler/icons-react";
import { ui, Question, OptionKey } from "@/lib/content";
import { useLang } from "./LangContext";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const iconMap: Record<string, Icon> = {
  IconChartBar, IconRocket, IconSettings, IconUsers, IconMoodConfuzed,
  IconBrain, IconPackage, IconRefresh, IconSchool,
  IconBuildingFactory2, IconBuilding, IconSitemap, IconTrendingUp,
};

interface QuizScreenProps {
  question: Question;
  selected: OptionKey[];
  onChange: (selected: OptionKey[]) => void;
  onNext: () => void;
  onBack?: () => void;
  nextLabel?: { ru: string; en: string };
  step: number;
  total: number;
}

export default function QuizScreen({
  question, selected, onChange, onNext, onBack, nextLabel, step, total,
}: QuizScreenProps) {
  const { lang } = useLang();

  function toggle(key: OptionKey) {
    if (key === "none") {
      onChange(selected.includes("none") ? [] : ["none"]);
      return;
    }
    const withoutNone = selected.filter((k) => k !== "none");
    if (withoutNone.includes(key)) {
      onChange(withoutNone.filter((k) => k !== key));
    } else {
      onChange([...withoutNone, key]);
    }
  }

  const popColors = [
    "answer-color-orange",
    "answer-color-yellow",
    "answer-color-blue",
    "answer-color-pink",
  ];

  const optionShapes = [
    "answer-piece--scoop",
    "answer-piece--capsule",
    "answer-piece--ramp",
    "answer-piece--loop",
    "answer-piece--ticket",
  ];

  return (
    <div className="flex flex-col gap-5 py-4">
      <div className="quiz-meter">
        <div className="quiz-meter-label">
          <span>{step}</span>
          <span>/</span>
          <span>{total}</span>
        </div>
        <Progress
          value={(step / total) * 100}
          className="quiz-meter-track [&_[data-slot=progress-indicator]]:bg-pop-yellow [&_[data-slot=progress-track]]:bg-white/10"
        />
      </div>

      <div>
        <h2 className="text-[2rem] font-extrabold leading-[0.98] tracking-normal">
          {question.title[lang]}
        </h2>
        <p className="quiz-helper mt-3 text-xs font-bold">{ui.multi[lang]}</p>
      </div>

      <div className="answer-stack flex flex-col gap-2.5">
        {question.options.map((opt, i) => {
          const isSelected = selected.includes(opt.key);
          const isNone = opt.key === "none";
          const OptionIcon = iconMap[opt.icon] ?? IconMoodConfuzed;
          const color = popColors[i % popColors.length];
          const isBlue = color === "answer-color-blue";
          const textTone = isBlue ? "text-white" : "text-black";
          const hintTone = isBlue ? "text-white/75" : "text-black/65";
          return (
            <button
              key={opt.key}
              aria-pressed={isSelected}
              onClick={() => toggle(opt.key)}
              className={cn(
                "answer-piece text-left transition-all",
                optionShapes[i % optionShapes.length],
                isNone
                  ? isSelected
                    ? "answer-piece--none answer-piece--selected text-foreground"
                    : "answer-piece--none text-muted-foreground"
                  : isSelected
                  ? `${color} answer-piece--selected ${textTone} font-semibold`
                  : `${color} ${textTone}`
              )}
            >
              <div className="flex items-center gap-3">
                <OptionIcon
                  size={20}
                  className={cn(
                    "answer-icon shrink-0",
                    isNone ? "text-current" : textTone
                  )}
                />
                <div className="flex-1 min-w-0">
                  <div className="text-base font-extrabold leading-snug">
                    {opt.title[lang]}
                  </div>
                  {opt.hint[lang] && (
                    <div className={cn(
                      "mt-0.5 truncate text-xs font-semibold",
                      isNone ? "text-current/70" : hintTone
                    )}>
                      {opt.hint[lang]}
                    </div>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="flex flex-col gap-2">
        <Button
          onClick={onNext}
          disabled={selected.length === 0}
          className="game-cta w-full font-extrabold text-black"
          size="lg"
        >
          {(nextLabel ?? ui.next)[lang]}
          <IconArrowRight size={16} />
        </Button>
        {onBack && (
          <Button onClick={onBack} variant="ghost" className="game-back w-full" size="lg">
            <IconArrowLeft size={16} />
            {ui.back[lang]}
          </Button>
        )}
      </div>
    </div>
  );
}
