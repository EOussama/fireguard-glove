import { EventType } from '..';
import { EventHelper } from '.';
import { TFiremittOptions } from '../types/firemitt-options.type';

export class FiremittHelper {
  static auth(options: TFiremittOptions): Promise<string> {
    const width = options?.dim?.width ?? 450;
    const height = options?.dim?.height ?? 260;

    const top = options?.pos?.y ?? 50;
    const left = options?.pos?.x ?? (window.screen.width / 2 - width / 2);

    const url = options?.url ?? '';
    const conf = `width=${width},height=${height},left=${left},top=${top}`;

    const win = window.open(url, '_blank', conf) as Window;

    return new Promise((resolve, reject) => {
      if (EventHelper.init(win)) {
        EventHelper.on(EventType.Loaded, () => {
          EventHelper.send(EventType.Config, options.config)
            .on(EventType.AuthSucceded, ({ token }) => resolve(token))
            .on(EventType.AuthFailed, ({ error }) => reject(error));
        });
      }
    });
  }
}