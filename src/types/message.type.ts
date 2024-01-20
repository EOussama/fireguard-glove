import { EventType } from '..';

export type TMessage<T = any> = {
  type: EventType,
  payload: T
}