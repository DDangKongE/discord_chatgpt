import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('chat-davinci')
  async chatDavinci003(@Query() query: any): Promise<string> {
    return await this.appService.chatDavinci003(query);
  }
}
