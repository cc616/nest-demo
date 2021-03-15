import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'username' })
  @IsString({ message: 'username format error' })
  @IsNotEmpty({
    message: 'username not empty',
    context: {
      errorCode: 'PARAMS_REQUIRED',
    },
  })
  readonly username: string;

  @ApiProperty({ example: 18 })
  readonly age: number;

  @ApiProperty({ example: 1 })
  readonly sex: number;

  @ApiProperty({ example: 'address' })
  readonly address: string;
}

export class UserDto {
  @ApiProperty({ example: 1 })
  readonly id: number;

  @ApiProperty({ example: 'username' })
  readonly username: string;

  @ApiProperty({ example: 18 })
  readonly age: number;

  @ApiProperty({ example: 1 })
  readonly sex: number;

  @ApiProperty({ example: 'address' })
  readonly address: string;
}
