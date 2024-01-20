import type { TTheme } from './theme.type';
import type { TFirebaseConfig } from './firebase-config.type';
import type { TFireguardConfig } from './fireguard-config.type';

export type TFireguardOptions = {
  name: string,
  firebase: TFirebaseConfig
  theme?: Partial<TTheme>
} & Partial<TFireguardConfig>