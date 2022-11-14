import { CreateChaiDto } from '../create-chai.dto/create-chai.dto';
import { PartialType } from '@nestjs/mapped-types';
export class UpdateChaiDto extends PartialType(CreateChaiDto) {}
