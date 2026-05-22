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

  return (
    <div className="flex flex-col gap-5 py-4">
      <Progress
        value={(step / total) * 100}
        className="[&_[data-slot=progress-indicator]]:bg-vivid"
      />

      <div>
        <h2 className="font-display italic text-2xl font-bold leading-snug">
          {question.title[lang]}
        </h2>
        <p className="text-xs text-muted-foreground mt-1">{ui.multi[lang]}</p>
      </div>

      <div className="flex flex-col gap-2">
        {question.options.map((opt) => {
          const isSelected = selected.includes(opt.key);
          const isNone = opt.key === "none";
          const OptionIcon = iconMap[opt.icon] ?? IconMoodConfuzed;
          return (
            <button
              key={opt.key}
              onClick={() => toggle(opt.key)}
              className={cn(
                "text-left rounded-lg px-4 py-3 border-2 transition-all",
                isNone
                  ? isSelected
                    ? "border-border bg-secondary"
                    : "border-dashed border-border bg-muted/40 text-muted-foreground"
                  : isSelected
                  ? "border-vivid bg-vivid/10"
                  : "border-border bg-card hover:border-foreground/30"
              )}
            >
              <div className="flex items-start gap-3">
                <OptionIcon
                  size={18}
                  className={cn(
                    "mt-0.5 shrink-0",
                    isSelected && !isNone ? "text-foreground" : "text-muted-foreground"
                  )}
                />
                <div className="flex-1">
                  <div className="font-medium text-sm">{opt.title[lang]}</div>
                  {opt.hint[lang] && (
                    <div className="text-xs text-muted-foreground mt-0.5">
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
          className="w-full"
          size="lg"
        >
          {(nextLabel ?? ui.next)[lang]}
          <IconArrowRight size={16} />
        </Button>
        {onBack && (
          <Button onClick={onBack} variant="ghost" className="w-full" size="lg">
            <IconArrowLeft size={16} />
            {ui.back[lang]}
          </Button>
        )}
      </div>
    </div>
  );
}
