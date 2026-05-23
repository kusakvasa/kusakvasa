import type { Lang } from "@/lib/content";

const SUPPORTED_LANGS = new Set<Lang>(["ru", "en"]);

export function resolveLangFromAcceptLanguage(header: string | null): Lang {
  if (!header) return "ru";

  const ranked = header
    .split(",")
    .map((part, index) => {
      const [rawTag, ...params] = part.trim().split(";");
      const lang = rawTag.toLowerCase().split("-")[0] as Lang;
      const qParam = params.find((param) => param.trim().startsWith("q="));
      const quality = qParam ? Number(qParam.trim().slice(2)) : 1;

      return {
        index,
        lang,
        quality: Number.isFinite(quality) ? quality : 0,
      };
    })
    .filter(({ lang }) => SUPPORTED_LANGS.has(lang))
    .sort((a, b) => b.quality - a.quality || a.index - b.index);

  if (ranked[0]) return ranked[0].lang;

  return "en";
}
