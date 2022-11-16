import { Module } from '@nestjs/common';

import { ChaiController } from './chai.controller';
import { ChaiService } from './chai.service';

@Module({
  imports: [],
  controllers: [ChaiController],
  providers: [ChaiService],
})
export class ChaiModule {}
