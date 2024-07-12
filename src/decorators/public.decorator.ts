import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'public';

export const Public = (...args: string[]) => SetMetadata(IS_PUBLIC_KEY, true);
