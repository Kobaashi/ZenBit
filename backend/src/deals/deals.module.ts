import { Module } from '@nestjs/common';
import { DealsController } from './deals.controller.js';
import { DealsService } from './deals.service.js';
import { PrismaModule } from '../PrismaModule.js';

@Module({
  imports: [PrismaModule],
  controllers: [DealsController],
  providers: [DealsService],
})
export class DealsModule {}
