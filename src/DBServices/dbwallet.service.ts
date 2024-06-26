/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { WalletDTO } from "src/DTO/wallet.dto";
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

    async createWallet(payload: WalletDTO): Promise<Wallet>{
        const newWallet = this.walletRepository.create({
            balance: payload.balance,
            customerid: payload.customerid,
        });

        return await this.walletRepository.save(newWallet);
    }

    // add or deduct wallet balance
    async updateWallet(payload: WalletDTO): Promise<Wallet[]>{
        await this.walletRepository
        .createQueryBuilder()
        .update()
        .set({
            balance: payload.balance
        })
        .where(`customerid = :customerid`, {
            customerid: payload.customerid
        })
        .execute()

        return await this.walletRepository.findBy({
            customerid: payload.customerid,
        })
    }

}