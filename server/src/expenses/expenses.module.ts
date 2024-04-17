import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ExpensesController } from './expenses.controller';
import { ExpensesService } from './expenses.service';
import { Expense } from './entity/expenses.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([Expense]),

  ],
  controllers: [ExpensesController],
  providers: [ExpensesService]
})
export class ExpensesModule {}
