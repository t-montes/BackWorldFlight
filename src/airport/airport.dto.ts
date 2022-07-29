import { Country } from './../enums/country.enum';

export class AirportDto {
    code: string;
    name: string;
    country: Country;
    city: string;
    address: string;
}
