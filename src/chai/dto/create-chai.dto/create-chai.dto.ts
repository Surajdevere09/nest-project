import { IsString, IsNumber } from 'class-validator';
export class CreateChaiDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly brand: string;

  @IsString({ each: true })
  readonly flavors: string[];
}
