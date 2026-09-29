import { computed, Injectable, signal } from '@angular/core';
import { AppCopy, Lang } from './i18n.models';
import { TRANSLATIONS } from './translations';

const STORAGE_KEY = 'astra-lang';

@Injectable({ providedIn: 'root' })
export class I18nService {
  readonly lang = signal<Lang>(this.readLang());
  readonly copy = computed(() => TRANSLATIONS[this.lang()]);

  constructor() {
    this.apply(this.lang());
  }

  toggle(): void {
    this.set(this.lang() === 'es' ? 'en' : 'es');
  }

  set(lang: Lang): void {
    this.lang.set(lang);
    localStorage.setItem(STORAGE_KEY, lang);
    this.apply(lang);
  }

  t(): AppCopy {
    return this.copy();
  }

  private apply(lang: Lang): void {
    document.documentElement.lang = lang;
    document.title = TRANSLATIONS[lang].title;
  }

  private readLang(): Lang {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'en' || stored === 'es' ? stored : 'es';
  }
}
