import { UserNotFoundException } from './../exceptions/UserNotFoundException';
import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './UserService';
import { ReadUserDto } from './ReadUserDto';
import { User } from './annotation/UserDecorator';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  getUser(@Body() @User() readUserReq: ReadUserDto): ReadUserDto {
    const user: ReadUserDto = this.userService.getUser();
    if (!user) {
      throw new UserNotFoundException();
    }
    if (readUserReq.name && user.name && readUserReq.name === user.name) {
      console.log('User success.');
    }
    return user;
  }
}
