import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesController } from './coffees/coffees.controller';
import { ChaiModule } from './chai/chai.module';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    ChaiModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController, CoffeesController],
  providers: [AppService],
})
export class AppModule {}
