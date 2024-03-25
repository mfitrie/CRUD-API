/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Customer } from "./customer.entity";

@Entity()
export class Wallet{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("numeric")
    balance: string;

    @Column("uuid")
    customerid: string;
    
    @Column("timestamptz")
    createdat: string;

    @Column("timestamptz")
    updatedat: string;

    @Column("timestamptz")
    deletedat: string;

    @OneToOne(() => Customer, {
        cascade: true,
        onDelete: 'CASCADE',
    })
    @JoinColumn()
    customer: Customer;
    
}