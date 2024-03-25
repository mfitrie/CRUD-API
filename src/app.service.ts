/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { DBCustomer } from './DBServices/dbcustomer.service';
import { CustomerDTO } from './DTO/customer.dto';
import { DBWallet } from './DBServices/dbwallet.service';

@Injectable()
export class AppService {
  constructor(
    private readonly dbCustomer: DBCustomer,
    private readonly dbWallet: DBWallet,
  ){}

  getHello(): string {
    return 'Hello World!';
  }

  async findAllCustomer(){
    return await this.dbCustomer.findAllCustomer();
  }

  async createCustomer(payload: CustomerDTO){
    return await this.dbCustomer.createCustomer(payload);
  }

  async updateCustomer(payload: CustomerDTO){
    return await this.dbCustomer.updateCustomer(payload);
  }

  async deleteCustomer(customerid: string){
    return await this.dbCustomer.deleteCustomer(customerid);
  }


  // async createWallet(payload: WalletDTO){
  //   return await this.dbWallet.createWallet(payload);
  // }

}
