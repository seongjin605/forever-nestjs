import { UserNotFoundException } from './../exceptions/UserNotFoundException';
import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { UserService } from './UserService';
import { ReadUserDto } from './ReadUserDto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  getUser(@Body() readUserDto: ReadUserDto): ReadUserDto {
    const user: ReadUserDto = this.userService.getUser();
    console.log('user:', user);
    if (!user) {
      throw new UserNotFoundException();
    }
    return user;
  }
}
