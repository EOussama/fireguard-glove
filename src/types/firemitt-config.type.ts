import { TDim, TFireguardConfig, TPos } from '.';

/**
 * @description
 * Configuration settings for Firemitt.
 * This type includes necessary configuration details for initializing and setting up the Firemitt.
 * 
 * @type {TFiremittConfig}
 * 
 * @property {TPos} pos - The position configuration.
 * @property {TDim} dim - The dimension configuration.
 * @property {string} url - The URL associated with the Firemitt.
 * @property {TFireguardConfig} fireguard - The Fireguard configuration settings.
 */
export type TFiremittConfig = {
  pos: TPos,
  dim: TDim,
  url: string,
  fireguard: TFireguardConfig
}