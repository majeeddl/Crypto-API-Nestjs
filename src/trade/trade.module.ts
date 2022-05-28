import { Module } from '@nestjs/common';
import { TradeService } from './trade.service';
import { TradeResolver } from './trade.resolver';

@Module({
  providers: [TradeResolver, TradeService]
})
export class TradeModule {}
