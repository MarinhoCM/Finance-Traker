export class CreateRecurringType {
    type: string;
    recurring: string;
    range_days: number;
    active: boolean;
    earningsId?: number;
    expensesId?: number;
}