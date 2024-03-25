/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Wallet } from "src/Entity/wallet.entity";
import { Repository } from "typeorm";

@Injectable()
export class DBWallet{
    constructor(
        @InjectRepository(Wallet)
        private walletRepository: Repository<Wallet>
    ){}

    findAllWallet(){
        return this.walletRepository.find();
    }

}