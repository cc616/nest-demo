import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'admin' })
  readonly username: string;

  @ApiProperty({ example: 'admin' })
  readonly password: string;
}
