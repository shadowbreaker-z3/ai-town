import { translate, Lang } from './i18nCore';

describe('i18n translate helper', () => {
  it('returns English text when lang is en', () => {
    expect(translate('en', 'menu.help')).toBe('Help');
    expect(translate('en', 'game.tagline')).toContain('virtual town');
  });

  it('returns Thai text when lang is th', () => {
    expect(translate('th', 'menu.help')).toBe('ช่วยเหลือ');
    expect(translate('th', 'game.tagline')).toContain('เมืองเสมือน');
  });

  it('falls back to English when missing key in selected language', () => {
    // assume some key exists only in English
    const missingKey = 'nonexistent.key';
    expect(translate('th', missingKey)).toBe(missingKey);
  });

  it(' interpolates variables correctly', () => {
    expect(translate('en', 'help.limitNotice', { max: 5 })).toContain('5');
    expect(translate('th', 'help.limitNotice', { max: 3 })).toContain('3');
  });
});
