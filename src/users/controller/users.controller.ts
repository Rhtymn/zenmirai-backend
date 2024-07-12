import { Controller, Get } from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { Response, ResponseOK } from 'src/dto/response.dto';
import { UserProfile } from 'src/dto/users.dto';
import { User } from 'src/decorators/user.decorator';
import UserModel from 'src/domain/users.domain';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/profile')
  async getProfile(@User() user: UserModel): Promise<Response<UserProfile>> {
    const profile = new UserProfile(
      await this.usersService.getProfile(user.id),
    );

    return ResponseOK(profile);
  }
}
