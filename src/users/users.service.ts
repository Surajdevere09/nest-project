import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.entity';
import { UserDto } from './dto/user.dto';
import { USER_REPOSITORY } from '../core/constants';
import { where } from 'sequelize';
import { UserUpdateDto } from './dto/userupdate.dto';

@Injectable()
export class UsersService {
  constructor(@Inject(USER_REPOSITORY) private userRepository: typeof User) {}

  async create(user: UserDto): Promise<User> {
    return await this.userRepository.create<User>(user);
  }
  async findAll(): Promise<User[]> {
    return this.userRepository.findAll<User>();
  }

  async findOneByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { email } });
  }

  async findOneById(id: string): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { id } });
  }
  // async updateuser(userDto: UserDto, id: string): Promise<any> {
  //   const data = await this.userRepository.update<User>(
  //     { ...userDto },
  //     { where: { id } },
  //   );
  //   return data;
  // }
  // async updateuser(id: number, user: UserUpdateDto): Promise<User> {
  //   await this.userRepository.update(id, user);
  //   const updatedTodo = await this.userRepository.findOne(id);
  //   if (updatedTodo) {
  //     return updatedTodo;
  //   }
  // }
  async delete(id) {
    return await this.userRepository.destroy({ where: { id } });
  }

  async update(id, data) {
    const [numberOfAffectedRows, [updatedPost]] =
      await this.userRepository.update(
        { ...data },
        { where: { id }, returning: true },
      );
    return { numberOfAffectedRows, updatedPost };
  }
}
