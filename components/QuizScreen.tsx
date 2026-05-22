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
    "bg-pop-yellow",
    "bg-pop-green",
    "bg-pop-orange",
    "bg-pop-blue",
    "bg-pop-pink",
    "bg-pop-red",
    "bg-pop-sky",
  ];

  return (
    <div className="flex flex-col gap-5 py-4">
      <Progress
        value={(step / total) * 100}
        className="[&_[data-slot=progress-indicator]]:bg-pop-yellow h-1.5"
      />

      <div>
        <h2 className="text-3xl font-extrabold leading-[1.05] tracking-tight">
          {question.title[lang]}
        </h2>
        <p className="text-xs text-muted-foreground mt-2">{ui.multi[lang]}</p>
      </div>

      <div className="flex flex-col gap-2.5">
        {question.options.map((opt, i) => {
          const isSelected = selected.includes(opt.key);
          const isNone = opt.key === "none";
          const OptionIcon = iconMap[opt.icon] ?? IconMoodConfuzed;
          const color = popColors[i % popColors.length];
          return (
            <button
              key={opt.key}
              onClick={() => toggle(opt.key)}
              className={cn(
                "text-left rounded-full px-5 py-3.5 transition-all",
                isNone
                  ? isSelected
                    ? "border-2 border-white/40 bg-white/5 text-foreground"
                    : "border-2 border-dashed border-white/15 bg-transparent text-muted-foreground"
                  : isSelected
                  ? `${color} text-black font-semibold`
                  : "border-2 border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20"
              )}
            >
              <div className="flex items-center gap-3">
                <OptionIcon
                  size={20}
                  className={cn(
                    "shrink-0",
                    isSelected && !isNone ? "text-black" : "text-muted-foreground"
                  )}
                />
                <div className="flex-1 min-w-0">
                  <div className={cn("text-base leading-snug", isSelected && !isNone ? "font-bold" : "font-semibold")}>
                    {opt.title[lang]}
                  </div>
                  {opt.hint[lang] && (
                    <div className={cn(
                      "text-xs mt-0.5 truncate",
                      isSelected && !isNone ? "text-black/70" : "text-muted-foreground"
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
          className="w-full rounded-full bg-white text-black hover:bg-white/90 font-semibold"
          size="lg"
        >
          {(nextLabel ?? ui.next)[lang]}
          <IconArrowRight size={16} />
        </Button>
        {onBack && (
          <Button onClick={onBack} variant="ghost" className="w-full rounded-full" size="lg">
            <IconArrowLeft size={16} />
            {ui.back[lang]}
          </Button>
        )}
      </div>
    </div>
  );
}
