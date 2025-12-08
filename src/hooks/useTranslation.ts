"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export function useTranslation() {
    const { language } = useLanguage();
    return translations[language];
}
