/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './Entity/customer.entity';
import { Wallet } from './Entity/wallet.entity';
import { DBCustomer } from './DBServices/dbcustomer.service';
import { DBWallet } from './DBServices/dbwallet.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: "postgres",
        url: configService.get<string>('POSTGRES_URL'),
        entities: [
          Customer,
          Wallet
        ],
        synchronize: false,
      })
    }),
    TypeOrmModule.forFeature([
      Customer,
      Wallet
    ])
  ],
  controllers: [AppController],
  providers: [
    AppService,
    DBCustomer,
    DBWallet,
  ],
})
export class AppModule {}
