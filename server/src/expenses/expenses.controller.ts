import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { ExpensesService } from './expenses.service';

@Controller('expenses')
export class ExpenseController {
  constructor(private readonly expenseService: ExpensesService) {}

  @Get()
  async findAll() {
    return await this.expenseService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number) {
    return await this.expenseService.findById(id);
  }

  @Post()
  async create(@Body() expenseData){
    return await this.expenseService.create(expenseData);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() expenseData){
    return await this.expenseService.update(id, expenseData);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    await this.expenseService.delete(id);
  }
}
