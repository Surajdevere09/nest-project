import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { chai } from './entities/chai.entity';

@Injectable()
export class ChaiService {
  private chai: chai[] = [
    {
      id: 1,
      name: 'Ginger Tea',
      brand: 'Red Label',
      flavors: ['chocolate', 'vanila'],
    },
  ];
  findAll() {
    return this.chai;
  }
  findOne(id: string) {
    const chai = this.chai.find((item) => item.id === +id);
    if (!chai) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return chai;
  }
  create(createChaiDto: any) {
    this.chai.push(createChaiDto);
  }
  update(id: string, updateChaiDto: any) {
    const existingChai = this.findOne(id);
    if (existingChai) {
      //update the existing entity
    }
  }
  remove(id: string) {
    const chaiIndex = this.chai.findIndex((item) => item.id === +id);
    if (chaiIndex >= 0) {
      this.chai.splice(chaiIndex, 1);
    }
  }
}
