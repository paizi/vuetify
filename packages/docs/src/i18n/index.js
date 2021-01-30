// Imports
import VueI18n from 'vue-i18n'

// Messages
import en from '@/i18n/messages/en.json'

export function createI18n () {
  // const loadedLocales = ['en']
  return VueI18n.createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: { en },
  })
}
