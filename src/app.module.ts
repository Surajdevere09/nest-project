import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesController } from './coffees/coffees.controller';
import { ChaiModule } from './chai/chai.module';
import { PostsModule } from './posts/posts.module';
import { DatabaseModule } from './core/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { MulterModule } from '@nestjs/platform-express';
import { GatewayModule } from './gateway/gateway.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ChaiModule,
    PostsModule,
    DatabaseModule,
    UsersModule,
    MulterModule.register({ dest: './uploads' }),
    GatewayModule,
  ],
  controllers: [AppController, CoffeesController],
  providers: [AppService],
})
export class AppModule {}
