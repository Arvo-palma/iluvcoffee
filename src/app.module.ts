import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';

// the @Module() decorator is a function that accepts a single argument which is a metadata object
// the metadata object is used to provide additional information about the module
@Module({
  // the imports array is used to import other modules
  imports: [CoffeesModule],
  // the controllers array is used to define the controllers of the module
  controllers: [AppController],
  // the providers array is used to define the providers of the module
  providers: [AppService],
})
export class AppModule {}
