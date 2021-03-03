import { Controller, Post, UseGuards, Get, Request, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiForbiddenResponse } from '@nestjs/swagger';
import { LocalAuthGuard } from './local-auth.guard';
import { JwtAuthGuard } from './jwt-auth.guard';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'user login' })
  @ApiForbiddenResponse({description: 'Forbidden'})
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Body() _: LoginDto, @Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
