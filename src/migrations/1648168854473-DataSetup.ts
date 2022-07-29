import {MigrationInterface, QueryRunner} from "typeorm";

export class DataSetup1648168854473 implements MigrationInterface {
    migration = `
    DELETE FROM public.airport;

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
    `;

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(this.migration);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }
}
