import { Module } from '@nestjs/common';
import { AirlineService } from './airline.service';
import { AirlineController } from './airline.controller';

@Module({
  providers: [AirlineService],
  controllers: [AirlineController]
})
export class AirlineModule {}
