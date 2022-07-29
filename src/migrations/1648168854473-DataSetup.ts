import {MigrationInterface, QueryRunner} from "typeorm";

export class DataSetup1648168854473 implements MigrationInterface {
    migration = `
    -- Clearing existing data
    DELETE FROM public.airport;
    
    -- Inserting Airports
    INSERT INTO public.airport
        (
            code, 
            name, 
            country, 
            city, 
            address
        )
        VALUES
        (
            'SVO', 
            'Sheremetyevo International Airport', 
            'RUSSIA', 
            'Moscow', 
            'Sheremetyevo'
        );
    
    INSERT INTO public.airport
        (
            code, 
            name, 
            country, 
            city, 
            address
        )
        VALUES
        (
            'DME', 
            'Domodedovo International Airport', 
            'RUSSIA', 
            'Moscow', 
            'Domodedovo'
        );
    
    -- Inserting Tickets
    INSERT INTO public.ticket
        (
            id,
            departure_date,
            arrival_date,
            seat,
            price,
            seatType
        )
        VALUES
        (
            "df0f6de4-0f66-11ed-861d-0242ac120002",
            '2018-01-01',
            '2018-01-05',
            'A1',
            100,
            'MIDDLE'
        );
    
    -- Inserting Passengers
    INSERT INTO public.passenger
        (
            id,
            name,
            email,
            phone,
            age
        )
        VALUES
        (
            "00a57a34-0f67-11ed-861d-0242ac120002",
            'John',
            'john@gmail.com',
            '+79998887766',
            20
        );
    `;

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(this.migration);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }
}
