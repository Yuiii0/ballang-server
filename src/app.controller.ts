import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  //AppService를 알아서 넣어준다?
  constructor(private readonly appService: AppService) {
    //this.appService=appService;
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
