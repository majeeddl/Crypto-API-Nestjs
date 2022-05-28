import { Test, TestingModule } from '@nestjs/testing';
import { TradeResolver } from './trade.resolver';
import { TradeService } from './trade.service';

describe('TradeResolver', () => {
  let resolver: TradeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TradeResolver, TradeService],
    }).compile();

    resolver = module.get<TradeResolver>(TradeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
