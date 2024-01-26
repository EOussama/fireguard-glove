import type { EventType } from '../enums/event.enum';
/**
 * @category Helpers
 *
 * @description
 * Helper class for managing custom events across different windows or iframes.
 *
 * This class provides static methods to initialize the event system, send encoded messages, and listen for specific event types.
 * It uses the `Base64helper` class for encoding and decoding messages.
 *
 * @class EventHelper
 */
export declare class EventHelper {
    private static target;
    /**
     * @description
     * Initializes the EventHelper with a target window.
     *
     * This method sets the target window where the messages will be posted to.
     *
     * @static
     * @param {Window} target - The target window to which messages will be sent.
     * @returns {boolean} Returns true if the target is successfully set, otherwise false.
     */
    static init(target: Window): boolean;
    /**
     * @description
     * Sends a message to the target window.
     *
     * This method encodes a message of the specified event type and data, then posts it to the target window.
     *
     * @static
     * @template T - The type of data being sent.
     * @param {EventType} type - The type of event.
     * @param {T} [data] - Optional data to be included in the event message.
     * @returns {typeof EventHelper} Returns the EventHelper class for method chaining.
     */
    static send<T = any>(type: EventType, data?: T): typeof EventHelper;
    /**
     * @description
     * Sets up an event listener for a specific event type.
     *
     * This method listens for messages of the specified event type and executes the provided function when such an event occurs.
     *
     * @static
     * @template T - The expected type of data in the event message.
     * @param {EventType} type - The type of event to listen for.
     * @param {(data?: T) => any} func - The function to execute when the event is received. It receives the event data as an argument.
     * @returns {typeof EventHelper} Returns the EventHelper class for method chaining.
     */
    static on<T = any>(type: EventType, func: (data?: T) => any): typeof EventHelper;
}
