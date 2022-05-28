import { Module } from '@nestjs/common';
import { ExchangeService } from './exchange.service';
import { ExchangeResolver } from './exchange.resolver';

@Module({
  providers: [ExchangeResolver, ExchangeService]
})
export class ExchangeModule {}
