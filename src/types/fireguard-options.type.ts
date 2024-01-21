import type { TTheme } from './theme.type';
import type { TFirebaseConfig } from './firebase-config.type';
import type { TFireguardConfig } from './fireguard-config.type';

/**
 * @description
 * Options for configuring Fireguard.
 * This type specifies the options that can be provided to customize the Fireguard. It extends the TFireguardConfig with optional properties.
 * 
 * @type {TFireguardOptions}
 * 
 * @property {string} name - The name of the Fireguard.
 * @property {TFirebaseConfig} firebase - The Firebase configuration.
 * @property {Partial<TTheme>} [theme] - Optional theme settings, partially applied.
 */
export type TFireguardOptions = {
  name: string,
  firebase: TFirebaseConfig
  theme?: Partial<TTheme>
} & Partial<TFireguardConfig>