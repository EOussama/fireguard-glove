import { TDim, TFireguardOptions, TPos } from '.';

export type TFiremittOptions = { url: string } & Partial<{
  pos: Partial<TPos>
  dim: Partial<TDim>
  config: Partial<TFireguardOptions>
}>