module.exports = class StatusError {
    constructor({ message, status, statusCode }) {
      this.message = message;
      this.status = status;
      this.statusCode = statusCode;
    }
  }