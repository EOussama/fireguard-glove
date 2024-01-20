import { TDim, TFireguardOptions, TPos } from '.';

/**
 * @description
 * Options for configuring Firemitt.
 * This type outlines the optional and partial settings that can be applied to customize the Firemitt.
 * 
 * @type {TFiremittOptions}
 * 
 * @property {string} url - The URL associated with the Firemitt.
 * @property {Partial<TPos>} [pos] - Optional, partial position configuration.
 * @property {Partial<TDim>} [dim] - Optional, partial dimension configuration.
 * @property {Partial<TFireguardOptions>} [config] - Optional, partial Fireguard configuration.
 */
export type TFiremittOptions = { url: string } & Partial<{
  pos: Partial<TPos>
  dim: Partial<TDim>
  config: Partial<TFireguardOptions>
}>