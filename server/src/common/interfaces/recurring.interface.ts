import { Recurrence } from "@prisma/client";

export interface IRecurringEarning {
    earningsId: number;
    range_days: number;
    recurring: Recurrence;
}

export interface IRecurringExpanse {
    expensesId: number;
    range_days: number;
    recurring: Recurrence;
}
