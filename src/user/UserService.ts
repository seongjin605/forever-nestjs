import { Injectable } from '@nestjs/common';
import { UserDto } from './UserDto';

@Injectable()
export class UserService {
  getUser(): string {
    return 'Micheal';
  }
}
