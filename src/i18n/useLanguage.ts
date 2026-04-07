import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  translations,
  type Language,
  type TranslationKey,
} from "./translations";

type LanguageState = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
};

export const useLanguage = create<LanguageState>()(
  persist(
    (set, get) => ({
      language: "pl",
      setLanguage: (language) => set({ language }),
      t: (key) => translations[get().language][key],
    }),
    { name: "language-storage" },
  ),
);
