import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { ExpensesController } from './expenses.controller';
import { ExpensesService } from './expenses.service';

@Module({
  imports: [DatabaseModule],
  providers: [ExpensesService],
  controllers: [ExpensesController]
})
export class ExpensesModule { }
