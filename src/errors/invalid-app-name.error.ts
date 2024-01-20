import { BaseError } from './base.error';

export class InvalidAppNameError extends BaseError {
  constructor() {
    super('Invalid app name, please specify a name for your app');
  }
}