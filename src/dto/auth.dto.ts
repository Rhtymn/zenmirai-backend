import {
  IsNotEmpty,
  IsStrongPassword,
  MinLength,
  NotContains,
} from 'class-validator';

export class RegisterRequest {
  @IsNotEmpty()
  name: string;

  @NotContains(' ', { message: 'username should not contain any whitespace' })
  @IsNotEmpty()
  @MinLength(6)
  username: string;

  @IsStrongPassword(
    {
      minUppercase: 1,
      minSymbols: 1,
      minNumbers: 1,
    },
    {
      message: 'password should contains uppercase letter, symbol, and numbers',
    },
  )
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}

export class LoginRequest {
  @NotContains(' ', { message: 'username should not contain any whitespace' })
  @IsNotEmpty()
  @MinLength(6)
  username: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
