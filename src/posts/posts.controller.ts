import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Posts } from './interfaces/post.interface';
import { PostsService } from './posts.service';
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll(): string {
    return 'this action  returns all posts';
  }
  @Get(':id')
  findOne(@Param('id') id: string): string {
    return 'This action returns one post';
  }

  @Post()
  //type safety by DTO
  create(@Body() body: Posts) {
    return 'working';
  }
}
