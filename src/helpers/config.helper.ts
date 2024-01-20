import {
  TPos,
  TDim,
  TTheme,
  TUnsafe,
  TFiremittConfig,
  TFiremittOptions,
  TFireguardConfig,
  TFireguardOptions,
  InvalidURLError,
  InvalidAppNameError,
  InvalidFirebaseConfigError
} from '..';

export class ConfigHelper {

  private static getDim(width: TUnsafe<number>, height: TUnsafe<number>): TDim {
    const w = parseFloat((width ?? 450).toString());
    const h = parseFloat((height ?? 260).toString());

    return { width: w, height: h };
  }

  private static getPos(x: TUnsafe<number>, y: TUnsafe<number>, width: number): TPos {
    const top = parseFloat((y ?? 50).toString());
    const left = parseFloat((x ?? (window.screen.width / 2 - width / 2)).toString());

    return { x: left, y: top };
  }

  private static getURL(url: TUnsafe<string>): string {
    try {
      const fireguardURL = new URL(url ?? '');

      if (fireguardURL.protocol !== 'http:' && fireguardURL.protocol !== 'https:') {
        throw Error();
      }

      return fireguardURL.toString();
    } catch (_) {
      throw new InvalidURLError();
    }
  }

  private static getFireguardConfig(config: TUnsafe<Partial<TFireguardOptions>>, fallbackTheme?: Partial<TTheme>): TFireguardConfig {
    const name = config?.name ?? '';
    const logo = config?.logo ?? '';

    const theme = {
      text: config?.theme?.text || fallbackTheme?.text || '#1a3544',
      primary: config?.theme?.primary || fallbackTheme?.primary || '#ffe536',
      secondary: config?.theme?.secondary || fallbackTheme?.secondary || '#1a3544'
    };

    const firebase = config?.firebase ?? {
      apiKey: config?.firebase?.apiKey ?? '',
      appId: config?.firebase?.appId ?? '',
      projectId: config?.firebase?.projectId ?? '',
      authDomain: config?.firebase?.authDomain ?? '',
      measurementId: config?.firebase?.measurementId ?? '',
      storageBucket: config?.firebase?.storageBucket ?? '',
      messagingSenderId: config?.firebase?.messagingSenderId ?? ''
    };

    if (name.length === 0) throw new InvalidAppNameError();
    if (Object.keys(firebase).length === 0) throw new InvalidFirebaseConfigError();

    return { name, logo, theme, firebase };
  }

  static init(options: TFiremittOptions): TFiremittConfig {
    const url = this.getURL(options.url);
    const dim = this.getDim(options?.dim?.width, options?.dim?.height);
    const pos = this.getPos(options?.pos?.x, options?.pos?.y, dim.width);
    const config = this.getFireguardConfig(options?.config);

    return { url, dim, pos, fireguard: config }
  }

  static getFlags(config: TFiremittConfig): string {
    const flags = [
      `width=${config.dim.width}`,
      `height=${config.dim.height}`,
      `left=${config.pos.x}`,
      `top=${config.pos.y}`
    ];

    return flags.join(',');
  }
}