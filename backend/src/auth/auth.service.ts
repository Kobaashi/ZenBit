import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { IUser } from '../shared/interface/user.interface.js';
import { PrismaClient } from '@prisma/client';
import { RegisterDto } from './dto/register.dto.js';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaClient, 
    private readonly jwtService: JwtService
  ) {}

  async findUserByEmail(email: string): Promise<IUser | null> {
    return this.prisma.user.findUnique({ where: { user_email: email } });
  }

  async register(registerDto: RegisterDto) {
    const { user_email, user_password, user_name } = registerDto;

    const existingUser = await this.prisma.user.findUnique({
      where: { user_email },
    });

    if (existingUser) {
      throw new BadRequestException('Користувач з таким email вже існує');
    }

    const hashedPassword = await bcrypt.hash(user_password, 10);

    const newUser = await this.prisma.user.create({
      data: {
        user_email,
        user_name,
        user_password: hashedPassword,
      },
    });

    return newUser;
  }

  async login(email: string, password: string) {
    if (!email) {
      throw new BadRequestException('Email не передано');
    }

    const user = await this.prisma.user.findUnique({
      where: { user_email: email },
    });

    if (!user) throw new UnauthorizedException('Неправильний email або пароль');

    const isPasswordValid = await bcrypt.compare(password, user.user_password);
    if (!isPasswordValid) throw new UnauthorizedException('Неправильний email або пароль');

    const payload = { sub: user.user_id, email: user.user_email };
    const token = await this.jwtService.signAsync(payload);

    return token;
  }


}
