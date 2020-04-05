class ErrorResponse extends Error {
  constructor(message, statusCode) {
    super(message); // we do this because Error class has its own error.message property and we are going to pass our message to that property
    this.statusCode = statusCode;
  }
}

module.exports = ErrorResponse;
