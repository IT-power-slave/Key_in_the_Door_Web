const supportedLanguages = ['pl', 'en'];

function getUserLanguage() {
  const browserLang = navigator.language || navigator.userLanguage;
  const normalized = browserLang ? browserLang.toLowerCase() : 'pl';

  if (normalized.startsWith('pl')) return 'pl';
  return 'en';
}

function getPreferredLanguage() {
  return getUserLanguage();
}

export { supportedLanguages, getPreferredLanguage };
