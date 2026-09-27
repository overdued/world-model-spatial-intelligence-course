import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

/**
 * Locale helpers for data-driven UI.
 *
 * Data files in src/data/ keep their default fields in Chinese (the site's
 * defaultLocale is zh-Hans) and carry English overrides in `*En` fields
 * (e.g. `oneLiner` / `oneLinerEn`). Components call `pick(locale, obj,
 * 'oneLiner')` to select the right field: for the `en` locale the `*En`
 * field wins when present, otherwise the default field is used (fallback).
 */
export function useCurrentLocale() {
  return useDocusaurusContext().i18n.currentLocale;
}

export function pick(locale, obj, field) {
  if (locale !== 'zh-Hans') {
    const translated = obj[`${field}En`];
    if (translated != null) {
      return translated;
    }
  }
  return obj[field];
}
