import type { EventType } from '../enums/event.enum';

export class EventHelper {
  private static target: Window;

  static init(target: Window): boolean {
    this.target = target;
    return Boolean(this.target);
  }

  static send<T = any>(type: EventType, data?: T): typeof EventHelper {
    const payload = { ...data };
    const response = { type, payload };

    this.target.postMessage(response, '*');
    return this;
  }

  static on<T = any>(type: EventType, func: (data?: T) => any): typeof EventHelper {
    const handler = (e: MessageEvent) => {
      if (e.isTrusted) {
        if (e.data.type === type) {
          func(e.data.payload);
          window.removeEventListener('message', handler);
        }
      }
    }

    window.addEventListener('message', handler);
    return this;
  }
}