import { Injectable } from '@nestjs/common';
import { CreateTradeInput } from './dto/create-trade.input';
import { UpdateTradeInput } from './dto/update-trade.input';

@Injectable()
export class TradeService {
  create(createTradeInput: CreateTradeInput) {
    return 'This action adds a new trade';
  }

  findAll() {
    return [];
  }

  findOne(id: number) {
    return { };
  }

  update(id: number, updateTradeInput: UpdateTradeInput) {
    return `This action updates a #${id} trade`;
  }

  remove(id: number) {
    return `This action removes a #${id} trade`;
  }
}
