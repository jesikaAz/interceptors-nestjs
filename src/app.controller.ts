import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { MesureDurationInterceptor } from './mesure-duration.interceptor';
import { LogClientsInterceptor } from './log-clients.interceptor';

@Controller('api/v1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseInterceptors(MesureDurationInterceptor, LogClientsInterceptor)
  getHello(): string {
    return this.appService.getHello();
  }
}
