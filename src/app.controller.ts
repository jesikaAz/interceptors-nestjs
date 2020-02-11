import { Controller, Get, UseInterceptors, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { MesureDurationInterceptor } from './mesure-duration.interceptor';
import { LogClientsInterceptor } from './log-clients.interceptor';
import { EnrichResponseInterceptor } from './enrich-response.interceptor';

@Controller('api/v1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello/:name')
  @UseInterceptors(MesureDurationInterceptor, LogClientsInterceptor, EnrichResponseInterceptor)
  getHello(@Param('name') name: string): string {
    return this.appService.getHello();
  }
}
