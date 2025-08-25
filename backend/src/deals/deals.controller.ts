import { Controller, Get } from '@nestjs/common';
import { DealsService } from './deals.service.js';

@Controller('deals')
export class DealsController {

  constructor(private readonly dealsService: DealsService) {}

  @Get()
  async getAllDeals() {
    return this.dealsService.getAllDeals()
  }
}
