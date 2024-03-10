import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Payment  from './entity/payment.entity'; 
import { CreatePaymentDto } from './dto/createpaymentDto'; 
@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,
  ) {}

  async createPayment(createPaymentDto: CreatePaymentDto) {
    const payment = this.paymentRepository.create(createPaymentDto);
    return this.paymentRepository.save(payment);
  }

  async findAllPayments() {
    return this.paymentRepository.find();
  }

  async findPaymentById(id: number) {
    return this.paymentRepository.findOneBy({id});
  }

  async updatePayment(id: number, updatePaymentDto) {
    const payment = await this.findPaymentById(id);
    if (!payment) {
      // Handle error if payment not found
    }
    const updatedPayment = Object.assign(payment, updatePaymentDto);
    return this.paymentRepository.save(updatedPayment);
  }

  async deletePayment(id: number): Promise<void> {
    await this.paymentRepository.delete(id);
  }
}
