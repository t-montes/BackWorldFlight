import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors, UseGuards } from '@nestjs/common';
import { BusinessErrorsInterceptor } from '../interceptors/interceptor';
import { AirportDto } from './airport.dto';
import { AirportService } from './airport.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('airports')
@UseGuards(JwtAuthGuard)
@UseInterceptors(BusinessErrorsInterceptor)
export class AirportController {
    constructor(
        private readonly airportService: AirportService,
    ) {}

    @Get()
    async findAll(): Promise<AirportDto[]> {
        return await this.airportService.findAll();
    }

    @Get(':code')
    async findOne(@Param('code') code: string): Promise<AirportDto> {
        return await this.airportService.findOne(code);
    }

    @Post()
    @HttpCode(200)
    async create(@Body() airport: AirportDto): Promise<AirportDto> {
        return await this.airportService.create(airport);
    }

    @Put(':code')
    async update(@Param('code') code: string, @Body() airport: AirportDto): Promise<AirportDto> {
        return await this.airportService.update(code, airport);
    }

    @Delete(':code')
    @HttpCode(204)
    async delete(@Param('code') code: string): Promise<void> {
        await this.airportService.delete(code);
    }
}
