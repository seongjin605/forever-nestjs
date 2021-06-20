import { Module } from '@nestjs/common';
import { UserController } from './user/UserController';
import { UserService } from './user/UserService';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService]
})
export class AppModule {}
