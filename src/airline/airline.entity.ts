import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Airline {
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    yearFounded: number;    
}
