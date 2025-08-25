import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { IDeals } from 'src/shared/interface/deals.interface.js';

@Injectable()
export class DealsService {

  constructor(private prisma: PrismaClient) {}

  async getAllDeals(): Promise<IDeals[]> {
    return this.prisma.deal.findMany()
  }
}
