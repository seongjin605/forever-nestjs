import { Injectable } from '@nestjs/common';
import { ReadUserDto } from './ReadUserDto';

@Injectable()
export class UserService {
  getUser(): ReadUserDto {
    return new ReadUserDto('jin.park', 23, 'male');
  }
}
