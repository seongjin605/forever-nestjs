import { UserNotFoundException } from './../exceptions/UserNotFoundException';
import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './UserService';
import { ReadUserDto } from './ReadUserDto';
import { User } from './UserDecorator';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  getUser(@Body() @User() readUserReq: ReadUserDto): ReadUserDto {
    console.log('readUserReq:', readUserReq.name);
    const user: ReadUserDto = this.userService.getUser();
    console.log('user:', user);
    if (!user) {
      throw new UserNotFoundException();
    }
    if (readUserReq.name && user.name && readUserReq.name === user.name) {
      console.log('User success.');
    }
    return user;
  }
}
