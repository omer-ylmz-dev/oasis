import DefaultContent from './variants/DefaultContent'
import QuoteContent from './variants/QuoteContent'

export const TextSection = {
  default: DefaultContent,
  quote: QuoteContent,
} as const

export type TextSectionVariant = keyof typeof TextSection

export default TextSection