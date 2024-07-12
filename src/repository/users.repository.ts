import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { UsersColumns } from 'src/constants/query';
import DatabaseService from 'src/database/database.service';
import UserModel from 'src/domain/users.domain';

@Injectable()
class UsersRepository {
  constructor(private readonly databaseService: DatabaseService) {}

  async getById(id: number): Promise<UserModel | undefined> {
    const q = `SELECT ${UsersColumns} FROM users 
                WHERE id=$1 AND deleted_at IS NULL`;
    const res = await this.databaseService.runQuery(q, [id]);

    const user = res.rows[0];
    if (!user) {
      return undefined;
    }
    return plainToInstance(UserModel, user);
  }

  async getByUsername(username: string): Promise<UserModel | undefined> {
    const q = `SELECT ${UsersColumns} FROM users
                WHERE username=$1`;
    const res = await this.databaseService.runQuery(q, [username]);

    const user = res.rows[0];
    if (!user) {
      return undefined;
    }
    return plainToInstance(UserModel, user);
  }

  async save(u: UserModel): Promise<UserModel> {
    const q = `INSERT INTO users(name, username, password)
                VALUES($1, $2, $3) RETURNING ${UsersColumns}`;
    const res = await this.databaseService.runQuery(q, [
      u.name,
      u.username,
      u.password,
    ]);

    return plainToInstance(UserModel, res.rows[0]);
  }
}

export default UsersRepository;
