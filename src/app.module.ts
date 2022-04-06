import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { UserController } from './user/UserController';
import { UserService } from './user/UserService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { LoggerProxy } from './log/LoggerProxy';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_SCHEMA,
      entities: [],
      synchronize: true
    })
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerProxy).forRoutes(UserController);
  }
}
