import { TFiremittOptions } from '../types/firemitt-options.type';
/**
 * @category Helpers
 *
 * @description
 * Helper class for handling authentication processes using Firemitt.
 *
 * This class provides a static method to facilitate authentication by configuring and communicating with a Firemitt window.
 * It uses the `ConfigHelper` to initialize configuration and the `EventHelper` to manage event communications.
 *
 * @class FiremittHelper
 */
export declare class FiremittHelper {
    /**
     * @description
     * Initiates authentication using Firemitt options.
     *
     * This static method opens a new window with the Firemitt URL and sets up event listeners to handle the authentication process.
     * It listens for authentication success or failure events and resolves or rejects the promise accordingly.
     *
     * @static
     * @param {TFiremittOptions} options - The options required to configure and initiate the Firemitt authentication process.
     * @returns {Promise<string>} A promise that resolves with the authentication token on success, or rejects with an error on failure.
     */
    static auth(options: TFiremittOptions): Promise<string>;
}
