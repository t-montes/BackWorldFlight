import { SeatTypeModule } from './enums/seat-type.module';
import { CountryModule } from './enums/country.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { AirportModule } from './airport/airport.module';
import { Airport } from './airport/airport.entity';
import { AppController } from './app.controller';

@Module({
  imports: [
    UserModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host:
        (process.env.DATABASE_URL &&
          process.env.DATABASE_URL.replace('postgres://', '')
            .split(':')[1]
            .split('@')[1]) ||
        process.env.DATABASE_URL ||
        process.env.DB_HOST ||
        'localhost',
      port: 5432,
      username:
        (process.env.DATABASE_URL &&
          process.env.DATABASE_URL.replace('postgres://', '')
            .split(':')[0]) ||
        process.env.DB_USER ||
        'postgres',
      password:
        (process.env.DATABASE_URL &&
          process.env.DATABASE_URL.replace('postgres://', '')
            .split(':')[1]
            .split('@')[0]) ||
        process.env.DB_PASSWORD ||
        'postgres',
      database:
        (process.env.DATABASE_URL &&
          process.env.DATABASE_URL
            .split('/')[3]) ||
        process.env.DB_NAME ||
        'world-flight',
      entities: [Airport,],
      dropSchema: true,
      synchronize: true,
      keepConnectionAlive: true,
      migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
      migrationsRun: true,
      cli: {
        migrationsDir: 'src/migrations',
      },
      extra: {
        //ssl: {
        //  rejectUnauthorized: false
        //}
      },
    }),
    CountryModule,
    SeatTypeModule,
    AirportModule,
  ],
  controllers: [AppController],
})
export class AppModule { }
