import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTradeInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
