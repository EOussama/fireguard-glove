import { BaseError } from './base.error';

export class InvalidFirebaseConfigError extends BaseError {
  constructor() {
    super('Invalid Firebase configuration');
  }
}