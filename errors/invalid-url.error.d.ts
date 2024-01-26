import { BaseError } from './base.error';
/**
 * @category Errors
 *
 * @description
 * Custom error class representing an error that occurs when an invalid URL is provided.
 * This error is thrown when a valid URL is required, but an invalid one is provided.
 */
export declare class InvalidURLError extends BaseError {
    /**
     * @description
     * Creates a new instance of the InvalidURLError class with a default error message.
     * The default error message indicates that an invalid URL was provided for a Fireguard instance.
     */
    constructor();
}
