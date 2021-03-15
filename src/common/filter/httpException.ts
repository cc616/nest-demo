import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { CustomException } from './customException';

const HttpStatusMap = {
  [HttpStatus.BAD_REQUEST]: 'BAD_REQUEST',
  [HttpStatus.FORBIDDEN]: 'FORBIDDEN',
  [HttpStatus.NOT_FOUND]: 'NOT_FOUND',
  [HttpStatus.UNAUTHORIZED]: 'UNAUTHORIZED',
  [HttpStatus.INTERNAL_SERVER_ERROR]: 'INTERNAL_SERVER_ERROR',
  [HttpStatus.BAD_GATEWAY]: 'BAD_GATEWAY',
}

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const errorResponse = exception instanceof CustomException ? {
      code: exception.getErrorCode(),
      message: exception.getErrorMessage(),
    } : {
      code: HttpStatusMap[exception.getStatus()] || 'INTERNAL_SERVER_ERROR',
      message: exception.message,
    };

    const status = exception instanceof HttpException ?
      exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

    response.status(status).json({
      ...errorResponse,
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
