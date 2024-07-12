import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { LoginRequest, RegisterRequest } from 'src/dto/auth.dto';
import { Response, ResponseOK } from 'src/dto/response.dto';
import { AuthToken } from 'src/domain/auth.domain';
import UserModel from 'src/domain/users.domain';
import { plainToInstance } from 'class-transformer';
import { Public } from 'src/decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  @Public()
  async register(
    @Body() registerRequest: RegisterRequest,
  ): Promise<Response<null>> {
    await this.authService.register(
      plainToInstance(UserModel, registerRequest),
    );
    return ResponseOK();
  }

  @Post('/login')
  @Public()
  @HttpCode(HttpStatus.OK)
  async login(
    @Body() loginRequest: LoginRequest,
  ): Promise<Response<AuthToken>> {
    const authToken = await this.authService.login(
      plainToInstance(UserModel, loginRequest),
    );

    return ResponseOK(authToken);
  }
}
