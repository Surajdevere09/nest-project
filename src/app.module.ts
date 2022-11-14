import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesController } from './coffees/coffees.controller';
import { ChaiModule } from './chai/chai.module';

@Module({
  imports: [ChaiModule],
  controllers: [AppController, CoffeesController],
  providers: [AppService],
})
export class AppModule {}
