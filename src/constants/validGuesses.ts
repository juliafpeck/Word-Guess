import { CONFIG } from './config'

export const VALIDGUESSES = [
  'paras',
  'preto',
  'fista',
  'tadre',
  'ainda',
  'akeya',
  'akeyo',
  'alhad',
  'alora',
  'andar',
  'apoyo',
  'araba',
  'banir',
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
