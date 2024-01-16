import type { TTheme } from './theme.type';
import type { TConfig } from './config.type';
import type { TFirebaseConfig } from './firebase-config.type';

export type TOptions = {
  name: string,
  firebase: TFirebaseConfig
  theme?: Partial<TTheme>
} & Partial<TConfig>