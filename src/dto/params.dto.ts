import { IsNumberString } from 'class-validator';

export class IDParams {
  @IsNumberString()
  id: number;
}
