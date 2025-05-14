import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Checkscore NestJS Dev Assessment - by Farhan Sodiq!';
  }
}
