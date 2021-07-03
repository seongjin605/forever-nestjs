import { ReadUserDto } from './ReadUserDto';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const User = createParamDecorator((data: unknown, ctx: ExecutionContext): ReadUserDto => {
  const request = ctx.switchToHttp().getRequest();
  console.log('body:', request.body);
  return request.body;
});
