import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const hello: string = 'Hello!';
    console.log(hello);
    return hello;
  }

  sayHello(): string {
    const hello: string = 'Say Hello!';
    console.log('sayHello():', hello);
    return hello;
  }
}
