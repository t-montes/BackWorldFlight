/*import { Airline } from "./../airline/airline.entity";
import { Ticket } from "./../ticket/ticket.entity";*/
import { Country } from "./../enums/country.enum";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";

@Entity()
export class Airport {
    @PrimaryColumn({
        type: "varchar",
        length: 3
    })
    code: string;

    @Column()
    name: string;

    @Column({
        type: "enum",
        enum: Country,
    })
    country: Country;
    
    @Column()
    city: string;

    @Column({
        nullable: true
    })
    address: string;
/*
    @ManyToMany(() => Airline, airline => airline.airports)
    @JoinColumn()
    airlines: Airline[];

    @OneToMany(() => Ticket, ticket => ticket.origin)
    ticketsDepartured: Ticket[];

    @OneToMany(() => Ticket, ticket => ticket.destination)
    ticketsArrived: Ticket[];
*/
}
