import { SeatType } from "src/enums/seat-type.enum";

export class TicketDto {
    code: string;
    departureDate: Date;
    arrivalDate: Date;
    seat: string;
    price: number;
    seatType: SeatType;
}
