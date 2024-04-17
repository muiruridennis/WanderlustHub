import { Injectable, HttpException, HttpStatus, } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Expense } from './entity/expenses.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ExpensesService {
    constructor(
        @InjectRepository(Expense)
        private readonly expenseRepository: Repository<Expense>,
    ) { }

    async findAll() {
        return await this.expenseRepository.find();
    }

    async findById(id: number) {
        const expense = await this.expenseRepository.findOneBy({ id })
        if (expense) {
            return expense;
        }
        throw new HttpException(
            `Expense with  id ${id} does not exist`,
            HttpStatus.NOT_FOUND
        );
    }

    async create(expenseData) {
        const expense = this.expenseRepository.create(expenseData);
        return await this.expenseRepository.save(expense);
    }

    async update(id: number, expenseData) {
        await this.expenseRepository.update(id, expenseData);
        return await this.findById(id);
    }

    async delete(id: number) {
        await this.expenseRepository.delete(id);
    }
}
