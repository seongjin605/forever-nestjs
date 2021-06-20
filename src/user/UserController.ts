import { Controller, Get } from '@nestjs/common';
import { UserService } from './UserService';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUser(): string {
    return this.userService.getUser();
  }
}
