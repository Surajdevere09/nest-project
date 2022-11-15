import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChaiController } from './chai.controller';
import { ChaiService } from './chai.service';
import { chai } from './entities/chai.entity';

@Module({
  imports: [TypeOrmModule.forFeature([chai])],
  controllers: [ChaiController],
  providers: [ChaiService],
})
export class ChaiModule {}
