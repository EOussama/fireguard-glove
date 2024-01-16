import { BaseError } from './base.error';

export class InvalidProviderError extends BaseError {
  constructor(providerName: string) {
    super(`Invalid provider, "${providerName}" is not a valid provider name`);
  }
}