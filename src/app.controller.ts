import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { exchanges, bybit } from 'ccxt';

const exchangeId = 'bybit';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<any> {
    const exchange = new bybit({
      apiKey: 'X1OgT46GUEnxxUdPBT',
      secret: '86CQrr3EexkDy3gv8lrLmNrMsrioTyP3ehpH',
      enableRateLimit: true,
      options: {
        defaultType: 'futures',
        adjustForTimeDifference: true,
      },
    });

    const data = await exchange.fetchUsedBalance();
    return {
      data,
    };
  }
}
