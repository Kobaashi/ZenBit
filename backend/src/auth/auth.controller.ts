import { Controller, Get, Param, Post, Body, Res, Request, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { RegisterDto } from './dto/register.dto.js';
import type { Response } from 'express';

@Controller('auth')
export class AuthController {

  // private jwt_secret = process.env.JWT_SECRET

  constructor(private readonly authService: AuthService) {}

  @Get(':email')
  async findUserByEmail(@Param('email') email: string) {
      return this.authService.findUserByEmail(email);
  }

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    try {
      const user = await this.authService.register(registerDto);
      return {
        message: 'Реєстрація успішна',
        userId: user.user_id,
      };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Post('login')
  async login(
    @Body() body: { user_email: string; user_password: string },
    @Res({ passthrough: true }) response: Response
  ) {
    const token = await this.authService.login(body.user_email, body.user_password);
    
    response.cookie('jwt', token, {
      httpOnly: false, 
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000,
      path: '/',
    });

    return { message: 'Login successful', token };
  }

  @Post('logout')
  logout(@Res({ passthrough: true }) response: Response) {
    response.clearCookie('jwt', {
      httpOnly: false,
      sameSite: 'strict',
      secure: false,  
      path: '/'
    });
    return { message: 'Вихід виконано успішно' };
  }

  @Get('user-token')
  async getUserToken(@Request() req) {
    const token = req.cookies?.jwt;
    return { token: token || null }; 
  }

}
