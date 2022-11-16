import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { postsProviders } from './posts.providers';
import { PostsService } from './posts.service';

@Module({
  controllers: [PostsController],
  providers: [PostsService, ...postsProviders],
})
export class PostsModule {}
