import { CreateTradeInput } from './create-trade.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTradeInput extends PartialType(CreateTradeInput) {
  @Field(() => Int)
  id: number;
}
