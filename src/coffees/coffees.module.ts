import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
// comand to generate a module: nest g mo <name of module>
@Module({
  // the @Module() decorator is a function that accepts a single argument which is a metadata object
  // the metadata object is used to provide additional information about the module

  // the exports array is used to export the providers of the module
  exports: [],
  // the imports array is used to import other modules
  imports: [],
  // the controllers array is used to define the controllers of the module
  controllers: [CoffeesController],
  // the providers array is used to define the providers of the module
  providers: [CoffeesService],
})
export class CoffeesModule {}
