import { BaseError } from './base.error';

export class InvalidURLError extends BaseError {
  constructor() {
    super('Invalid URL name, please specify a valid URL for a Fireguard instance');
  }
}