import { BaseError } from './base.error';

export class InvalidFirebaseConfig extends BaseError {
  constructor() {
    super('Invalid Firebase configuration');
  }
}