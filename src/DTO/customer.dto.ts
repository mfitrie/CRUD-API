/* eslint-disable prettier/prettier */
import { createZodDto } from "nestjs-zod";
import { z } from "nestjs-zod/z";

const CustomerSchema = z.object({
    id: z.string().nullish(),
    firstname: z.string(),
    lastname: z.string(),
    fulladdress: z.string(),
});

export class CustomerDTO extends createZodDto(CustomerSchema){}