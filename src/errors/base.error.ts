export class BaseError extends Error {
  constructor(message: string) {
    super(message);
  }

  toString() {
    return `[ERROR] ${this.message}.`;
  }
}