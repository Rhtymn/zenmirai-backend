import { Exclude, Transform } from 'class-transformer';
import UserModel from 'src/domain/users.domain';
import { capitalizeEachWord } from 'src/util/transformer';

export class UserProfile {
  id: number;

  @Transform(({ value }) => capitalizeEachWord(value))
  name: string;

  username: string;

  @Exclude()
  password: string;

  constructor(partial: Partial<UserModel>) {
    Object.assign(this, partial);
  }
}
