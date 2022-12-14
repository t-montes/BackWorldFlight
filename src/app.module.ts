import { SeatTypeModule } from './enums/seat-type.module';
import { CountryModule } from './enums/country.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { AirportModule } from './airport/airport.module';
import { Airport } from './airport/airport.entity';
import { Airline } from './airline/airline.entity';
import { Ticket } from './ticket/ticket.entity';
import { AppController } from './app.controller';
import { AirlineModule } from './airline/airline.module';
import { TicketModule } from './ticket/ticket.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'world-flight',
      entities: [Airport,Airline,Ticket],
      dropSchema: true,
      synchronize: true,
      keepConnectionAlive: true,
      migrations: [ __dirname + '/migrations/**/*{.ts,.js}' ],
      migrationsRun: true,
      cli: { migrationsDir: 'src/migrations' }
    }),
    CountryModule,
    SeatTypeModule,
    AirportModule,
    AirlineModule,
    TicketModule,
  ],
  controllers: [AppController],
})
export class AppModule { }
