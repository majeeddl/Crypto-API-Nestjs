import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TradeService } from './trade.service';
import { Trade } from './entities/trade.entity';
import { CreateTradeInput } from './dto/create-trade.input';
import { UpdateTradeInput } from './dto/update-trade.input';

@Resolver(() => Trade)
export class TradeResolver {
  constructor(private readonly tradeService: TradeService) {}


  @Query(() => [Trade], { name: 'tradeAll' })
  findAll() {
    console.log('test')
    return this.tradeService.findAll();
  }

  @Query(() => Trade, { name: 'trade' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.tradeService.findOne(id);
  }

  // @Mutation(() => Trade)
  // createTrade(@Args('createTradeInput') createTradeInput: CreateTradeInput) {
  //   return this.tradeService.create(createTradeInput);
  // }

  

  // @Mutation(() => Trade)
  // updateTrade(@Args('updateTradeInput') updateTradeInput: UpdateTradeInput) {
  //   return this.tradeService.update(updateTradeInput.id, updateTradeInput);
  // }

  // @Mutation(() => Trade)
  // removeTrade(@Args('id', { type: () => Int }) id: number) {
  //   return this.tradeService.remove(id);
  // }
}
