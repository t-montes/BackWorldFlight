import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Airline } from './airline.entity';
import { BusinessLogicException, BusinessError } from './../shared/errors/business-errors';

@Injectable()
export class AirlineService {
    constructor(
        @InjectRepository(Airline)
        private readonly airlineRepository: Repository<Airline>,
    ) {}

    async findAll(): Promise<Airline[]> {
        return await this.airlineRepository.find();
    }

    async findOne(code: string): Promise<Airline> {
        const airline:Airline = await this.airlineRepository.findOne(code);
        if (!airline) throw new BusinessLogicException('Airline not found', BusinessError.NOT_FOUND);
        else return airline;
    }

    async create(airline: Airline): Promise<Airline> {
        this.verifyAirline(airline);
        return this.airlineRepository.save(airline);
    }

    // Verifies if the airline is valid
    private verifyAirline(airline: Airline): void {
        if (!airline.name) throw new BusinessLogicException('Airline name is required', BusinessError.PRECONDITION_FAILED);
        if (!airline.description) throw new BusinessLogicException('Airline description is required', BusinessError.PRECONDITION_FAILED);
        if (!airline.yearFounded) throw new BusinessLogicException('Airline year of foundation is required', BusinessError.PRECONDITION_FAILED);
    }
}
