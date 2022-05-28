import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Exchange {
  @Field({ nullable: false, description: 'name of exchange' })
  name: string;

  @Field({ nullable: true, description: 'description of exchange' })
  description: string;
}
