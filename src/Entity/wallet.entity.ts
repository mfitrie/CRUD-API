/* eslint-disable prettier/prettier */
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Customer } from "./customer.entity";

@Entity()
export class Wallet{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("numeric")
    balance: number;

    @Column("uuid")
    customerid: string;

    @OneToOne(() => Customer)
    customer: Customer;

    @Column("timestamptz")
    createdat: string;

    @Column("timestamptz")
    updatedat: string;

    @Column("timestamptz")
    deletedat: string;

    // @OneToOne(() => Customer)
    // @JoinColumn()
    // customer: Customer;
    
}