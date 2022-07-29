import { Controller, Get, Param, useInterceptors } from '@nestjs/common';
import { BusinessErrorsInterceptor } from '../interceptors/interceptor';
import { TicketDto } from './ticket.dto';
import { TicketService } from './ticket.service';

@Controller('ticket')

@useInterceptors(BusinessErrorsInterceptor)
export class TicketController {
    constructor(
        private readonly ticketService: TicketService,
    ) {}
    
    @Get()
    async findAll(): Promise<TicketDto[]> {
        return await this.ticketService.findAll();
    }

    @Get(':code')
    async findOne(@Param('code') code: string): Promise<TicketDto> {
        return await this.ticketService.findOne(code);
    }
}
