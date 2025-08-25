import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AuthModule } from './auth/auth.module.js';
import { PrismaModule } from './PrismaModule.js';
import { DealsModule } from './deals/deals.module.js';

@Module({
  imports: [AuthModule, PrismaModule, DealsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
