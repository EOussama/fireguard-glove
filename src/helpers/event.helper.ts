import { Base64helper } from '.';

import { TMessage } from '..';
import type { EventType } from '../enums/event.enum';

export class EventHelper {
  private static target: Window;

  static init(target: Window): boolean {
    this.target = target;
    return Boolean(this.target);
  }

  static send<T = any>(type: EventType, data?: T): typeof EventHelper {
    const payload = { ...data };
    const response: TMessage = { type, payload };
    const message = Base64helper.encode<TMessage>(response);

    this.target.postMessage(message, '*');
    return this;
  }

  static on<T = any>(type: EventType, func: (data?: T) => any): typeof EventHelper {
    const handler = (e: MessageEvent) => {
      if (e.isTrusted) {
        const message = Base64helper.decode(e.data);

        if (message.type === type) {
          func(message.payload);
          window.removeEventListener('message', handler);
        }
      }
    }

    window.addEventListener('message', handler);
    return this;
  }
}