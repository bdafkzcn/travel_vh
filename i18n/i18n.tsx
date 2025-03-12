// lib/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from '@/locales/en.json';
import translationVI from '@/locales/vi.json';
import translationCN from '@/locales/zh-CN.json';
import translationTW from '@/locales/zh-TW.json';

const resources = {
  en: { translation: translationEN },
  vi: { translation: translationVI },
  'zh-CN': { translation: translationCN },
  'zh-TW': { translation: translationTW },
};

i18n
  .use(LanguageDetector) // tự động detect ngôn ngữ lưu trên localStorage
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'vi', // Nếu không tìm được ngôn ngữ, mặc định là tiếng Việt
    interpolation: {
      escapeValue: false, // React đã tự escape
    },
    detection: {
      order: ['localStorage', 'navigator'], // ưu tiên lấy từ localStorage, sau đó mới lấy từ trình duyệt
      caches: ['localStorage'], // lưu vào localStorage
    },
  });

export default i18n;
