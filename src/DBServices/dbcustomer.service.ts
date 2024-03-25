/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import * as dayjs from "dayjs";
import { CustomerDTO } from "src/DTO/customer.dto";
import { Customer } from "src/Entity/customer.entity";
import { Repository } from "typeorm";

@Injectable()
export class DBCustomer{
    constructor(
        @InjectRepository(Customer)
        private customerRepository: Repository<Customer>
    ){}

    findAllCustomer(){
        return this.customerRepository.find();
    }

    createCustomer(payload: CustomerDTO): Promise<Customer>{
        const newCustomer = this.customerRepository.create({
            firstname: payload.firstname,
            lastname: payload.lastname,
            fulladdress: payload.fulladdress,
        });

        return this.customerRepository.save(newCustomer);
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