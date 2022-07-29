import { SeatType } from "src/enums/seat-type.enum";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Ticket {
    @PrimaryColumn('uuid')
    code: string;

    @Column()
    departureDate: Date;
    
    @Column()
    arrivalDate: Date;

    @Column()
    seat: string;

    @Column()
    price: number;

    @Column({
        type: "enum",
        enum: SeatType,
    })
    seatType: SeatType;

}