import { Injectable } from '@nestjs/common';
import * as WebSocket from 'ws';

@Injectable()
export class AppService {
  private ws = new WebSocket('wss://stream.bybit.com/realtime');

  constructor() {
    this.ws.on('open', () => {
      this.ws.send(Math.random());
    });

    this.ws.on('message', function (message) {
      console.log(message);
    });
  }
  getHello(): string {
    return 'Hello World!';
  }

  send(data: any) {
    this.ws.send(data);
  }

  onMessage(handler: Function) {}
}
