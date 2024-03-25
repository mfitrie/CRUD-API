/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, UsePipes } from '@nestjs/common';
import { AppService } from './app.service';
import { CustomerDTO } from './DTO/customer.dto';
import { ZodValidationPipe } from 'nestjs-zod';
import { WalletDTO } from './DTO/wallet.dto';

@Controller()
@UsePipes(ZodValidationPipe)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/api/customer")
  findAllCustomer(){
    return this.appService.findAllCustomer();
  }

  @Post("/api/customer")
  @HttpCode(HttpStatus.CREATED)
  createCustomer(
    @Body() payload: CustomerDTO
  ){
    return this.appService.createCustomer(payload);
  }

  @Patch("/api/customer")
  updateCustomer(
    @Body() payload: CustomerDTO
  ){
    return this.appService.updateCustomer(payload);
  }

  @Delete("/api/customer/:id")
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteCustomer(
    @Param("id") customerid: string
  ){
    this.appService.deleteCustomer(customerid);
    return null;
  }


  @Delete("/api/customer/harddelete/:id")
  @HttpCode(HttpStatus.NO_CONTENT)
  hardDeleteCustomer(
    @Param("id") customerid: string
  ){
    this.appService.hardDeleteCustomer(customerid);
    return null;
  }


  //--- Wallet
  @Get("/api/wallet")
  findAllWallet(){
    return this.appService.findAllWallet();
  }


  @Patch("/api/wallet")
  updateWallet(
    @Body() payload: WalletDTO
  ){
    return this.appService.updateWallet(payload);  
  }
  //--- Wallet

}
