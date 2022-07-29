import { Module } from '@nestjs/common';
import { AirlineService } from './airline.service';
import { AirlineController } from './airline.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Airline } from './airline.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Airline])],
  providers: [AirlineService],
  controllers: [AirlineController]
})
export class AirlineModule {}
