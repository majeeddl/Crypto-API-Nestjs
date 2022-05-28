import { ObjectType, Field, Int } from '@nestjs/graphql';



@ObjectType()
export class Trade {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  test: number;
}
