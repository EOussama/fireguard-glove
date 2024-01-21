/**
 * @category Errors
 *
 * @description
 * Custom error class that extends the built-in Error class.
 * It is used as a base class for creating custom error types in your application.
 */
export class BaseError extends Error {

  /**
   * @description
   * Creates a new instance of the BaseError class with the specified error message.
   *
   * @param message The error message describing the reason for the error.
   */
  constructor(message: string) {
    super(message);
  }

  /**
   * @description
   * Returns a string representation of the error message, prefixed with "[ERROR]".
   *
   * @returns A formatted error message.
   */
  toString() {
    return `[ERROR] ${this.message}.`;
  }
}