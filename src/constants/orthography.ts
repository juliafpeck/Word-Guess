import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'a',
  'b',
  'ch',
  'd',
  'dj',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'r',
  's',
  'sh',
  't',
  'u',
  'v',
  'y',
  'z',
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
