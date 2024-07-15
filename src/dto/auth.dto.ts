import {
  IsNotEmpty,
  IsStrongPassword,
  MinLength,
  NotContains,
  Validate,
} from 'class-validator';
import { NoLeadingWhiteSpace, NoTrailingWhiteSpace } from 'src/util/validator';

export class RegisterRequest {
  @Validate(NoTrailingWhiteSpace, {
    message: 'name should not have trailing white space',
  })
  @Validate(NoLeadingWhiteSpace, {
    message: 'name should not have leading white space',
  })
  @IsNotEmpty()
  name: string;

  @NotContains(' ', { message: 'username should not contain any whitespace' })
  @IsNotEmpty()
  @MinLength(6)
  username: string;

  @NotContains(' ', { message: 'password should not contain any whitespace' })
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
