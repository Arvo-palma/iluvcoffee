import { Injectable } from '@nestjs/common';
// the @Injectable() decorator is a function that accepts a single argument which is a metadata object
@Injectable()
// the service class is responsible for providing the business logic of the application
export class AppService {
  // the getHello() method is responsible for returning the string 'Hello World!'
  getHello(): string {
    // the getHello() method returns the string 'Hello World!'
    return 'Hello World!';
  }
}
