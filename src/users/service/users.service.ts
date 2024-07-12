import { Injectable } from '@nestjs/common';
import UserModel from 'src/domain/users.domain';
import UsersRepository from 'src/repository/users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async getProfile(id: number): Promise<UserModel> {
    return await this.usersRepository.getById(id);
  }
}
