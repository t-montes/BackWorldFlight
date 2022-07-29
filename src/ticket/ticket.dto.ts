import { SeatType } from "src/enums/seat-type.enum";

export class TicketDto {
    code: string;
    deperaturDate: Date;
    arrivalDate: Date;
    seat: string;
    price: number;
    seatType: SeatType;
}
