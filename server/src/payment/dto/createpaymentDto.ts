import { IsNumber, IsEnum } from 'class-validator';
import { PaymentMethod } from '../paymentMethod.enum'; // Assuming you have defined the PaymentMethod enum

export class CreatePaymentDto {
    @IsNumber()
    amount: number;

    @IsEnum(PaymentMethod)
    paymentMethod: PaymentMethod;
}