import { ApiModelProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiModelProperty({ example: 'account' })
  readonly account: string;

  @ApiModelProperty({ example: 18 })
  readonly age: number;

  @ApiModelProperty({ example: 'ADMIN' })
  readonly role: string;
}
