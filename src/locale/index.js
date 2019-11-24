/* global __DEV__ */

import ruLabels from './ru/labels';

export default {
  lng: 'ru',
  debug: !!__DEV__,
  resources: {
    ru: {
      translation: {
        ...ruLabels,
      },
    },
  },
  fallbackLng: 'ru',
  interpolation: {
    escapeValue: false,
    format(value, format) {
      if (format === 'uppercase') {
        return value.toUpperCase();
      }
      if (format === 'firstCapital') {
        return value.substr(0, 1).toUpperCase() + value.substr(1).toLowerCase();
      }
      return value;
    },
  },
};
