import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  Request,
} from '@nestjs/common';
import { Users } from './interfaces/users.interface';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { UserDto } from './dto/user.dto';
import { UserUpdateDto } from './dto/userupdate.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOneById(id);
  }

  @Post()
  //type safety by DTO
  create(@Body() body: Users) {
    //Users is entity
    return this.usersService.create(body);
  }
  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() userDto: UserUpdateDto,
  // ): Promise<User> {
  //   return this.usersService.updateuser(userDto, id);
  // }
  // @Put(':id')
  // async updatePost(@Param('id') id: number, @Body() user: UserUpdateDto) {
  //   return this.usersService.update(id, user);
  // }
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() user: UserUpdateDto,
  ): Promise<User> {
    // get the number of row affected and the updated post
    const { numberOfAffectedRows, updatedPost } =
      await this.usersService.update(id, user);

    // if the number of row affected is zero, it means the post doesn't exist in our db
    if (numberOfAffectedRows === 0) {
      throw new NotFoundException("This Post doesn't exist");
    }

    // return the updated post
    return updatedPost;
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<number> {
    return await this.usersService.delete(id);
  }
}
