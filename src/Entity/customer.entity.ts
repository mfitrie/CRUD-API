/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Customer{
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("varchar")
    firstname: string;

    @Column("varchar")
    lastname: string;

    @Column("varchar")
    fulladdress: string;
    
    @Column("timestamptz")
    createdat: string;

    @Column("timestamptz")
    updatedat: string;

    @Column("timestamptz")
    deletedat: string;

    // @OneToOne(() => Wallet, {
    //     cascade: true,
    //     onDelete: "CASCADE",
    // })
    // @JoinColumn()
    // wallet: Wallet;
}