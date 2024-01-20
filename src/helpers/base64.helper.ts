import { TMessage } from '..';

export class Base64helper {

  static encode<T = any>(message: TMessage<T>): string {
    const data = JSON.stringify(message);
    return btoa(data);
  }

  static decode<T = any>(base64: string): TMessage<T> {
    const message = atob(base64);
    return JSON.parse(message);
  }
}