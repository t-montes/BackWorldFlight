import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BusinessError, BusinessLogicException } from './../shared/errors/business-errors';
import { Ticket } from './ticket.entity';

@Injectable()
export class TicketService {
    constructor(
        @InjectRepository(Ticket)
        private readonly ticketRepository: Repository<Ticket>,
    ) {}

    async findAll(): Promise<Ticket[]> {
        return await this.ticketRepository.find();
    }

    async findOne(code: string): Promise<Ticket> {
        const ticket:Ticket = await this.ticketRepository.findOne(code);

        if (!ticket) throw new BusinessLogicException('Ticket not found', BusinessError.NOT_FOUND);
        else return ticket;
    }
}
