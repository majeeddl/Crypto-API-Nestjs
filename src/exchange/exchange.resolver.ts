import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ExchangeService } from './exchange.service';
import { Exchange } from './entities/exchange.entity';
import { CreateExchangeInput } from './dto/create-exchange.input';
import { UpdateExchangeInput } from './dto/update-exchange.input';
import { Data } from './entities/data.entity';

@Resolver(() => Exchange)
export class ExchangeResolver {
  constructor(private readonly exchangeService: ExchangeService) {}

  @Mutation(() => Exchange)
  createExchange(
    @Args('createExchangeInput') createExchangeInput: CreateExchangeInput,
  ) {
    return this.exchangeService.create(createExchangeInput);
  }

  @Query(() => [Exchange], { name: 'exchange' })
  findAll() {
    return this.exchangeService.findAll();
  }

  @Query(() => Exchange, { name: 'exchange' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.exchangeService.findOne(id);
  }

  @Mutation(() => Exchange)
  updateExchange(
    @Args('updateExchangeInput') updateExchangeInput: UpdateExchangeInput,
  ) {
    return this.exchangeService.update(
      updateExchangeInput.id,
      updateExchangeInput,
    );
  }

  @Mutation(() => Exchange)
  removeExchange(@Args('id', { type: () => Int }) id: number) {
    return this.exchangeService.remove(id);
  }

  @Query(() => [Data], { name: 'fetchData' })
  fetchData() {
    return this.exchangeService.getData('BTC/USDT');
  }
}