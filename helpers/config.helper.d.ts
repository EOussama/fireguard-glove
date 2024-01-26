import { TFiremittConfig, TFiremittOptions } from '..';
/**
 * @category Helpers
 *
 * @description
 * Helper class for configuring Firemitt and Fireguard settings.
 *
 * This class provides static methods to construct and validate configuration objects for Firemitt and Fireguard.
 * It handles dimensions, positions, URLs, and Fireguard specific configurations including theme and Firebase settings.
 *
 * @class ConfigHelper
 */
export declare class ConfigHelper {
    /**
     * @description
     * Creates a `TDim` object representing dimensions, ensuring valid numeric values.
     *
     * @static
     * @param {TUnsafe<number>} width - Potentially undefined or null width value.
     * @param {TUnsafe<number>} height - Potentially undefined or null height value.
     * @returns {TDim} The dimensions object with width and height.
     */
    private static getDim;
    /**
     * @description
     * Generates a `TPos` object representing the position, using default values if necessary.
     *
     * @static
     * @param {TUnsafe<number>} x - Potentially undefined or null x-coordinate.
     * @param {TUnsafe<number>} y - Potentially undefined or null y-coordinate.
     * @param {number} width - The width of the element, used to calculate default x-coordinate.
     * @returns {TPos} The position object with x and y coordinates.
     */
    private static getPos;
    /**
     * @description
     * Validates and returns a URL string, throwing an error if invalid.
     *
     * @static
     * @param {TUnsafe<string>} url - The potentially undefined or null URL.
     * @returns {string} The validated URL string.
     * @throws {InvalidURLError} If the URL is invalid.
     */
    private static getURL;
    /**
     * @description
     * Creates a `TFireguardConfig` object from partial options, with fallbacks for theme and Firebase configurations.
     *
     * @static
     * @param {TUnsafe<Partial<TFireguardOptions>>} config - The potentially undefined or null Fireguard configuration options.
     * @param {Partial<TTheme>} [fallbackTheme] - Optional fallback theme settings.
     * @returns {TFireguardConfig} The constructed Fireguard configuration object.
     * @throws {InvalidAppNameError} If the application name is invalid.
     * @throws {InvalidFirebaseConfigError} If the Firebase configuration is invalid.
     */
    private static getFireguardConfig;
    /**
     * @description
     * Initializes and returns a `TFiremittConfig` object based on the provided Firemitt options.
     *
     * @static
     * @param {TFiremittOptions} options - The Firemitt options to initialize the configuration.
     * @returns {TFiremittConfig} The initialized Firemitt configuration object.
     */
    static init(options: TFiremittOptions): TFiremittConfig;
    /**
     * @description
     * Constructs a string representing window features (flags) for window.open based on the given Firemitt configuration.
     *
     * @static
     * @param {TFiremittConfig} config - The Firemitt configuration object.
     * @returns {string} A string of window feature flags for use in window.open.
     */
    static getFlags(config: TFiremittConfig): string;
}
