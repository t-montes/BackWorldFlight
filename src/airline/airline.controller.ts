import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors, UseGuards } from '@nestjs/common';
import { BusinessErrorsInterceptor } from '../interceptors/interceptor';
import { AirlineDto } from './airline.dto';
import { AirlineService } from './airline.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('airline')
export class AirlineController {
    constructor(
        private readonly airlineService: AirlineService,
    ) {}

    @Get()
    async findAll(): Promise<AirlineDto[]> {
        return await this.airlineService.findAll();
    }

    @Get(':code')
    async findOne(@Param('code') code: string): Promise<AirlineDto> {
        return await this.airlineService.findOne(code);
    }
}
