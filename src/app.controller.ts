/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, UsePipes } from '@nestjs/common';
import { AppService } from './app.service';
import { CustomerDTO } from './DTO/customer.dto';
import { ZodValidationPipe } from 'nestjs-zod';

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

  // @Post("/api/wallet")
  // createWallet(
  //   @Body() payload: WalletDTO){
  //   return this.appService.createWallet(payload);
  // }
}
