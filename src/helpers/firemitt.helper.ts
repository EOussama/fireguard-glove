import { EventType } from '..';
import { ConfigHelper, EventHelper } from '.';
import { TFiremittOptions } from '../types/firemitt-options.type';

export class FiremittHelper {
  static auth(options: TFiremittOptions): Promise<string> {
    const config = ConfigHelper.init(options);
    const flags = ConfigHelper.getFlags(config);
    const win = window.open(config.url, '_blank', flags) as Window;

    return new Promise((resolve, reject) => {
      if (EventHelper.init(win)) {
        EventHelper.on(EventType.Loaded, () => {
          EventHelper.send(EventType.Config, config.fireguard)
            .on(EventType.AuthSucceded, ({ token }) => resolve(token))
            .on(EventType.AuthFailed, ({ error }) => reject(error));
        });
      }
    });
  }
}