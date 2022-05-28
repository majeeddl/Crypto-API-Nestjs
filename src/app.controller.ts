import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { exchanges, bybit } from 'ccxt';

const exchangeId = 'bybit';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<any> {
    
    return {
    };
  }
}
