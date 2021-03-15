import { HttpException, HttpStatus } from '@nestjs/common';

export enum CustomErrorCode {
  ERROR = 'ERROR',
  VALIDATE_ERROR = 'VALIDATE_ERROR'
}

export class CustomException extends HttpException {

  private errorMessage: string;
  private errorCode: CustomErrorCode;

  constructor(errorMessage: string, errorCode: CustomErrorCode, statusCode: HttpStatus) {

    super(errorMessage, statusCode);

    this.errorMessage = errorMessage;
    this.errorCode = errorCode;
  }

  getErrorCode(): CustomErrorCode {
    return this.errorCode;
  }

  getErrorMessage(): string {
    return this.errorMessage;
  }
}