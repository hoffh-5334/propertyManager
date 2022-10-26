import hasProperty from './hasProperty.js';

class ErrorWithCause extends Error {
  constructor(message, options) {
    if (options === void 0) {
      options = {};
    }

    super(message);
    this.cause = options.cause;

    if (this.cause && hasProperty(this.cause, 'isNetworkError')) {
      this.isNetworkError = this.cause.isNetworkError;
    }
  }

}

export default ErrorWithCause;