import { BaseError } from './base.error';

export class InvalidAppError extends BaseError {
  constructor() {
    super('Invalid Firebase app, failed initializing fire base with the given configuration');
  }
}