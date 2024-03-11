import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Login is required' })
  @IsString({ message: 'Login must be of type string' })
  login: string;

  @IsNotEmpty({ message: 'Password is required' })
  @IsString({ message: 'Password must be of type string' })
  password: string;
}
