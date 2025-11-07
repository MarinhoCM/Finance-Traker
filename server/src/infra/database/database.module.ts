import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import {
  EarningsRepository,
  ExpensesRepository,
  RecurringEarningsRepository,
  RecurringExpensesRepository,
  StatusRepository,
  TagRepository,
  UserRepository
} from './prisma/repositories';

@Module({
  providers: [
    UserRepository,
    TagRepository,
    ExpensesRepository,
    StatusRepository,
    EarningsRepository,
    RecurringEarningsRepository,
    RecurringExpensesRepository,
    PrismaService
  ],
  exports: [
    UserRepository,
    TagRepository,
    StatusRepository,
    ExpensesRepository,
    RecurringEarningsRepository,
    RecurringExpensesRepository,
    EarningsRepository
  ],
})
export class DatabaseModule { }
