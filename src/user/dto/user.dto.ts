import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({ example: 'username' })
  readonly username: string;

  @ApiProperty({ example: 18 })
  readonly age: number;

  @ApiProperty({ example: 1 })
  readonly sex: number;

  @ApiProperty({ example: 'address' })
  readonly address: string;
}
