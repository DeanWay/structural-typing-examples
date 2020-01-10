import { en } from './en'
import { ja } from './ja'


type TranslationShape = typeof en
type Languages = 'en' | 'ja'
type Translations = { [L in Languages]: TranslationShape };

export const translations: Translations = {
  en,
  ja,
}

type tFunc = <T extends keyof TranslationShape>(key: T) => TranslationShape[T]

interface i18nType {
  t: tFunc
}
const I18n = (lang: Languages = 'en'): i18nType => ({
  t: key => translations[lang][key],
})
export default I18n
