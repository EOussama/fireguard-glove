import type { TTheme } from './theme.type'
import type { TFirebaseConfig } from './firebase-config.type'

export type TConfig = {
  name: string
  logo: string
  theme: TTheme,
  firebase: TFirebaseConfig
}