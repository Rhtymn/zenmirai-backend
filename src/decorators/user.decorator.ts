import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import UserModel from 'src/domain/users.domain';

export const User = createParamDecorator(
  (_, context: ExecutionContext): UserModel => {
    const request = context.switchToHttp().getRequest();
    return request.user;
  },
);
