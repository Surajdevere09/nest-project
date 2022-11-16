import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Users } from './interfaces/users.interface';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOneByEmail(id);
  }

  @Post()
  //type safety by DTO
  create(@Body() body: Users) {
    return this.usersService.create(body);
  }
}
