import { Injectable } from '@nestjs/common';
import { bybit ,Exchange } from 'ccxt';
import { CreateExchangeInput } from './dto/create-exchange.input';
import { UpdateExchangeInput } from './dto/update-exchange.input';

@Injectable()
export class ExchangeService {
  exchange: Exchange;

  /**
   *
   */
  constructor() {
    
    this.exchange = new bybit({
      apiKey: 'X1OgT46GUEnxxUdPBT',
      secret: '86CQrr3EexkDy3gv8lrLmNrMsrioTyP3ehpH',
      enableRateLimit: true,
      // options: {
      //   defaultType: 'futures',
      //   adjustForTimeDifference: true,
      // },
    });
    
  }
  create(createExchangeInput: CreateExchangeInput) {
    return 'This action adds a new exchange';
  }

  findAll() {
    return `This action returns all exchange`;
  }

  findOne(id: number) {
    return `This action returns a #${id} exchange`;
  }

  update(id: number, updateExchangeInput: UpdateExchangeInput) {
    return `This action updates a #${id} exchange`;
  }

  remove(id: number) {
    return `This action removes a #${id} exchange`;
  }

  async getData(symbol:string) {

    const data = await this.exchange.fetchOHLCV ('ADA/USDT','1h',100);
    console.log(data)
    return data;
  }
}
