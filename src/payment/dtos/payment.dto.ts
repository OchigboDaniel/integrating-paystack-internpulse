import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class DetailsDto{

    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsNotEmpty()
    amount: string
}