import { RecurrenceEnum, RecurringTypeEnum } from "@common/enum";

export type SearchRecurringType = {
    id?: number;
    type: RecurringTypeEnum;
    range_days?: number;
    recurring?: RecurrenceEnum;
    page: number;
    limit: number;
}