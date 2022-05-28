import { Field, Int,Float, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class Data {
  @Field(() => Int)
  datetime: number;

  @Field(() => Float)
  open: number;

  @Field(() => Float)
  high: number;

  @Field(() => Float)
  low: number;

  @Field(() => Float)
  close: number;

  @Field(() => Float)
  volume: number;
}