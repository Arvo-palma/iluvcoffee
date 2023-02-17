import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// the describe() function is used to group related tests together
describe('AppController', () => {
  // the let keyword is used to declare a variable
  let appController: AppController;
  // the beforeEach() function is used to execute a function before each test
  beforeEach(async () => {
    // the await keyword is used to wait for a Promise to resolve
    const app: TestingModule = await Test.createTestingModule({
      // the imports array is used to import other modules
      controllers: [AppController],
      // the controllers array is used to define the controllers of the module
      providers: [AppService],
      // the providers array is used to define the providers of the module
    }).compile();
    // the get() method is used to retrieve an instance of a provider from the testing module
    appController = app.get<AppController>(AppController);
  });
  // the describe() function is used to group related tests together
  describe('root', () => {
    // the it() function is used to define a test
    it('should return "Hello World!"', () => {
      // the expect() function is used to define an expectation
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
