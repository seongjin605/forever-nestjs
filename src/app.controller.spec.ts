import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user/UserController';
import { UserService } from './user/UserService';
import { ReadUserDto } from './user/ReadUserDto';

describe('AppController', () => {
  let userController: UserController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    userController = app.get<UserController>(UserController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(
        userController.getUser(new ReadUserDto('jin.park', 23, 'male')),
      ).toBe({});
    });
  });
});
