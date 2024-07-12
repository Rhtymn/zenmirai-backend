import { BadRequestException, Injectable } from '@nestjs/common';
import UserModel from 'src/domain/users.domain';
import UsersRepository from 'src/repository/users.repository';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { AuthToken, JWTPayload } from 'src/domain/auth.domain';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly jwtService: JwtService,
  ) {}

  async register(u: UserModel) {
    const user = await this.usersRepository.getByUsername(u.username);
    if (user) {
      throw new BadRequestException('username already registered');
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(u.password, salt);
    u.password = hashedPassword;

    this.usersRepository.save(u);
  }

  async login(u: UserModel): Promise<AuthToken> {
    const user = await this.usersRepository.getByUsername(u.username);
    if (!user) {
      throw new BadRequestException('invalid username or password');
    }

    const isValidPassword = await bcrypt.compare(u.password, user.password);
    if (!isValidPassword) {
      throw new BadRequestException('invalid username or password');
    }

    const payload: JWTPayload = {
      id: user.id,
    };

    const token = await this.jwtService.signAsync(payload);

    return new AuthToken(token);
  }
}
