import { Module } from "@nestjs/common";
import { EarningsModule } from "./earnings/earnings.module";
import { ExpensesModule } from "./expenses/expenses.module";
import { RecurringModule } from "./recurring/recurring.module";
import { StatusModule } from "./status/status.module";
import { TagModule } from "./tag/tag.module";

@Module({
    imports: [
        EarningsModule,
        ExpensesModule,
        RecurringModule,
        StatusModule,
        TagModule
    ]
})
export class ApiModule { }