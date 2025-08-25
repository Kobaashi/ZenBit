import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class RegisterDto {
  @IsEmail()
  user_email: string;

  @IsNotEmpty()
  @MinLength(6)
  user_password: string;

  user_name?: string;
}
