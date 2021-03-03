import { Controller, Post, UseGuards, Get, Request, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiForbiddenResponse, ApiNotFoundResponse, ApiUnauthorizedResponse, ApiBearerAuth } from '@nestjs/swagger';
import { LocalAuthGuard } from './local-auth.guard';
import { JwtAuthGuard } from './jwt-auth.guard';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'user login' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Body() _: LoginDto, @Request() req) {
    return this.authService.login(req.user);
  }

  @ApiOperation({ summary: 'user profile' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
