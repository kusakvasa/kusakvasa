import { headers } from "next/headers";
import ResumeApp from "@/components/ResumeApp";
import { resolveLangFromAcceptLanguage } from "@/lib/language";

export default async function Home() {
  const headersList = await headers();
  const initialLang = resolveLangFromAcceptLanguage(
    headersList.get("accept-language")
  );

  return <ResumeApp initialLang={initialLang} />;
}
