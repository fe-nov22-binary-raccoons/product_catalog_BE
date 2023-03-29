export class ApiError extends Error {
  constructor(public status: number, message: string, public errors = {}) {
    super(message);
  }

  static BadRequest(message: string, errors: object): ApiError {
    return new ApiError(400, message, errors);
  }

  static Unauthorized(): ApiError {
    return new ApiError(401, 'User is not authorized');
  }

  static NotFound(): ApiError {
    return new ApiError(404, 'Not found');
  }

  static Unexpected(): ApiError {
    return new ApiError(500, 'Unexpected errors');
  }
}
