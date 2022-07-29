import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Airport } from './airport.entity';
import { BusinessLogicException, BusinessError } from './../shared/errors/business-errors';

@Injectable()
export class AirportService {
    constructor(
        @InjectRepository(Airport)
        private readonly airportRepository: Repository<Airport>,
    ) {}

    async findAll(): Promise<Airport[]> {
        return await this.airportRepository.find();
    }

    async findOne(code: string): Promise<Airport> {
        const airport:Airport = await this.airportRepository.findOne(code);
        if (!airport) throw new BusinessLogicException('Airport not found', BusinessError.NOT_FOUND);
        else return airport;
    }

    async create(airport: Airport): Promise<Airport> {
        this.verifyAirport(airport);
        return this.airportRepository.save(airport);
    }

    async update(code: string, airport: Airport): Promise<Airport> {
        this.verifyAirport(airport);
        const airportToUpdate:Airport = await this.airportRepository.findOne(code);
        if (!airportToUpdate)  throw new BusinessLogicException('Airport not found', BusinessError.NOT_FOUND);
        else {
            airportToUpdate.code = airport.code;
            airportToUpdate.name = airport.name;
            airportToUpdate.country = airport.country;
            airportToUpdate.city = airport.city;
            airportToUpdate.address = airport.address;
            return this.airportRepository.save(airportToUpdate);
        }
    }

    async delete(code: string): Promise<Airport> {
        const airportToDelete:Airport = await this.airportRepository.findOne(code);
        if (!airportToDelete)  throw new BusinessLogicException('Airport not found', BusinessError.NOT_FOUND);
        else {
            return this.airportRepository.remove(airportToDelete);
        }
    }

    // Verifies if the airport is valid
    private verifyAirport(airport: Airport): void {
        if (!airport.code) throw new BusinessLogicException('Airport code is required', BusinessError.PRECONDITION_FAILED);
        if (airport.code.length !== 3) throw new BusinessLogicException('Airport code must have 3 characters', BusinessError.PRECONDITION_FAILED);
        if (!airport.name) throw new BusinessLogicException('Airport name is required', BusinessError.PRECONDITION_FAILED);
        if (!airport.country) throw new BusinessLogicException('Airport country is required', BusinessError.PRECONDITION_FAILED);
        if (!airport.city) throw new BusinessLogicException('Airport city is required', BusinessError.PRECONDITION_FAILED);
        // adress is not required
    }
}
