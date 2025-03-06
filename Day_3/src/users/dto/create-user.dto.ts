import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;
  @IsNumber()
  @IsNotEmpty()
  age: number;
}
