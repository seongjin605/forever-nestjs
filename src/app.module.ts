import { Module } from '@nestjs/common';
import { UserController } from './user/UserController';
import { UserService } from './user/UserService';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'test',
      entities: [],
      synchronize: true
    })
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class AppModule {}
