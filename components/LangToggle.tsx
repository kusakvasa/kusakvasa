"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useLang } from "./LangContext";
import type { Lang } from "@/lib/content";

export default function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <ToggleGroup
      value={[lang]}
      onValueChange={(vals) => {
        if (vals.length > 0) setLang(vals[vals.length - 1] as Lang);
      }}
      className="lang-toggle"
      spacing={0}
      variant="outline"
      size="sm"
    >
      <ToggleGroupItem value="ru" className="lang-toggle-item">RU</ToggleGroupItem>
      <ToggleGroupItem value="en" className="lang-toggle-item">EN</ToggleGroupItem>
    </ToggleGroup>
  );
}
