/* eslint-disable prettier/prettier */
import { createZodDto } from "nestjs-zod";
import { z } from "nestjs-zod/z";

const WalletSchema = z.object({
    balance: z.number(),
    customerid: z.string(),
});

export class WalletDTO extends createZodDto(WalletSchema){}