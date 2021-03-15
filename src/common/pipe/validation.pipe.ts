import { ArgumentMetadata, Injectable, PipeTransform, HttpStatus } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { CustomException, CustomErrorCode } from '../filter/customException'

@Injectable()
export class ValidationPipe implements PipeTransform {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      // 如果没有传入验证规则，则不验证，直接返回数据
      return value;
    }
    // 将对象转换为 Class 来验证
    const object = plainToClass(metatype, value);
    const errors = await validate(object);
    if (errors.length > 0) {
      const firstError = errors[0];
      const constraints = firstError.constraints;
      const contexts = firstError.contexts;

      const messages = Object.values(constraints);
      const keys = Object.keys(constraints);

      const message = messages[0];
      const errorCode = contexts[keys[0]]?.errorCode || CustomErrorCode.VALIDATE_ERROR;

      throw new CustomException(message, errorCode, HttpStatus.BAD_REQUEST);
    }
    return value;
  }

  private toValidate(metatype: any): boolean {
    const types: any[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
