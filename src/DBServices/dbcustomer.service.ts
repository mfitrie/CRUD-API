/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import * as dayjs from "dayjs";
import { CustomerDTO } from "src/DTO/customer.dto";
import { Customer } from "src/Entity/customer.entity";
import { Repository } from "typeorm";
import { DBWallet } from "./dbwallet.service";

@Injectable()
export class DBCustomer{
    constructor(
        @InjectRepository(Customer)
        private customerRepository: Repository<Customer>,
        private readonly dbWallet: DBWallet
    ){}

    findAllCustomer(){
        return this.customerRepository
        .query(`
            SELECT c.firstname, c.lastname, c.fulladdress, w.balance, w.customerid
            FROM customer as c
            JOIN wallet as w
            ON c.id = w.customerid
        `);
    }

    async createCustomer(payload: CustomerDTO): Promise<Customer>{
        const newCustomer = this.customerRepository.create({                
            firstname: payload.firstname,
            lastname: payload.lastname,
            fulladdress: payload.fulladdress,
        });

        const createdCustomer = await this.customerRepository.save(newCustomer);
        
        await this.dbWallet.createWallet({
            balance: 0,
            customerid: createdCustomer.id,
        });

        return createdCustomer;

    }

    updateCustomer(payload: CustomerDTO): Promise<Customer>{
        return this.customerRepository.save({
            id: payload.id,
            ...payload
        })
    }

    async deleteCustomer(customerid: string): Promise<Customer>{
        return this.customerRepository.save({
            id: customerid,
            deletedat: dayjs().toISOString(),
        })
    }

}