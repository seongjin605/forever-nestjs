import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const hello: string = 'Hello World!';
    console.log(hello);
    return hello;
  }
}
