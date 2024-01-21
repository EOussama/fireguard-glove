/**
 * @description
 * Represents a token structure with additional properties.
 * This type is primarily used for authentication purposes, containing a token response and possibly other object properties.
 * 
 * @type {TToken}
 * 
 * @property {Object} _tokenResponse - An object containing the OAuth ID token.
 * @property {string} _tokenResponse.oauthIdToken - The OAuth ID token.
 */
export type TToken = { _tokenResponse: { oauthIdToken: string } } & Object