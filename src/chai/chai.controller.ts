import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ChaiService } from './chai.service';
import { CreateChaiDto } from './dto/create-chai.dto/create-chai.dto';

@Controller('chai')
export class ChaiController {
  constructor(private readonly chaiService: ChaiService) {}
  //pagination request
  @Get()
  findAll(@Query() paginationQuery) {
    // const { limit, offset } = paginationQuery;
    return this.chaiService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chaiService.findOne(id);
  }
  @Post()
  //type safety by DTO
  create(@Body() CreateChaiDto: CreateChaiDto) {
    return this.chaiService.create(CreateChaiDto);
  }
  @Patch()
  update(@Param('id') id: string, @Body() body) {
    return this.chaiService.update(id, body);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chaiService.remove(id);
  }
}
