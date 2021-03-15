import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'string' })
  readonly username: string;

  @ApiProperty({ example: 'string' })
  readonly password: string;
}
