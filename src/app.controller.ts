import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
// the @Controller() decorator is a function that accepts a single argument which is a metadata object
// the metadata object is used to provide additional information about the controller
@Controller()
// the controller class is responsible for handling incoming requests and returning responses to the client
// the controller class is decorated with the @Controller() decorator
export class AppController {
  // the constructor is a special method that is executed when an instance of the class is created
  constructor(private readonly appService: AppService) {}
  // the @Get() decorator is a function that accepts a single argument which is a metadata object
  @Get()
  // the getHello() method is responsible for handling the incoming request
  getHello(): string {
    // the getHello() method returns the result of calling the getHello() method of the appService
    return this.appService.getHello();
  }
}
