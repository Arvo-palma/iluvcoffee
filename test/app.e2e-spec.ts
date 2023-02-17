import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
// the describe() function is used to group related tests together
describe('AppController (e2e)', () => {
  // the let keyword is used to declare a variable
  let app: INestApplication;
  // the beforeEach() function is used to execute a function before each test
  beforeEach(async () => {
    // the await keyword is used to wait for a Promise to resolve
    const moduleFixture: TestingModule = await Test.createTestingModule({
      // the imports array is used to import other modules
      imports: [AppModule],
      // the controllers array is used to define the controllers of the module
    }).compile();
    // the createNestApplication() method is used to create an instance of the Nest application
    app = moduleFixture.createNestApplication();
    // the init() method is used to initialize the application
    await app.init();
  });
  // the describe() function is used to group related tests together
  it('/ (GET)', () => {
    // the return keyword is used to return a value from a function
    return (
      request(app.getHttpServer())
        // the get() method is used to make a GET request to the specified path
        .get('/')
        // the expect() method is used to define an expectation
        .expect(200)
        // the expect() method is used to define an expectation
        .expect('Hello World!')
      // the end() method is used to end the test
    );
  });
});
