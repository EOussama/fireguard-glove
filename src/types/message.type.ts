import { EventType } from '..';

/**
 * @category Firemitt
 *
 * @description
 * Represents a generic message structure.
 * This type is used for defining a message format with a specific type and payload. It is generic and can accommodate different payload types.
 * 
 * @type {TMessage<T>}
 * 
 * @template T - The type of the payload.
 * 
 * @property {EventType} type - The type of the event or message.
 * @property {T} payload - The payload of the message, which can be of any type.
 */
export type TMessage<T = any> = {
  type: EventType,
  payload: T
}