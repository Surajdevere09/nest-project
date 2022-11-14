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
import { UpdateChaiDto } from './dto/update-chai.dto/update-chai.dto';

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
  findOne(@Param('id') id: number) {
    return this.chaiService.findOne('' + id);
  }
  @Post()
  //type safety by DTO
  create(@Body() createChaiDto: CreateChaiDto) {
    console.log(createChaiDto instanceof CreateChaiDto);
    return this.chaiService.create(createChaiDto);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChaiDto: UpdateChaiDto) {
    return this.chaiService.update(id, updateChaiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chaiService.remove(id);
  }
}
