import { IsString } from 'class-validator';

export class CreateCoffeeDto {
  @IsString({ message: 'Name is required' })
  readonly name: string;
  @IsString({ message: 'Brand is required' })
  readonly brand: string;
  @IsString({ each: true, message: 'Flavors must be an array of strings' })
  readonly flavors: string[];
}
