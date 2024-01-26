import { BaseError } from './base.error';
/**
 * @category Errors
 *
 * @description
 * Custom error class representing an error that occurs when an invalid provider name is provided.
 * This error is thrown when an operation expects a valid provider name, but an invalid one is provided.
 */
export declare class InvalidProviderError extends BaseError {
    /**
     * @description
     * Creates a ne0w instance of the InvalidProviderError class with a specific error message.
     *
     * @param providerName The invalid provider name that caused the error.
     */
    constructor(providerName: string);
}
