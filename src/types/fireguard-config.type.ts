import type { TTheme } from './theme.type';
import type { TFirebaseConfig } from './firebase-config.type';

/**
 * @category Fireguard
 *
 * @description
 * Configuration settings for Fireguard.
 * This type includes essential configuration details necessary for initializing and customizing the Fireguard.
 * 
 * @type {TFireguardConfig}
 * 
 * @property {string} name - The name of the Fireguard.
 * @property {string} logo - The URL or path to the Fireguard's logo.
 * @property {TTheme} theme - The theme settings for the Fireguard.
 * @property {TFirebaseConfig} firebase - The Firebase configuration settings for the Fireguard.
 */
export type TFireguardConfig = {
  name: string
  logo: string
  theme: TTheme,
  firebase: TFirebaseConfig
}