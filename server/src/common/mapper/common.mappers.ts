import { RecurringTypeEnum } from "@common/enum"
import { IExpenseResponse } from "@common/interfaces"
import { CreateRecurringType } from "@common/types/create/create-recurring.type"
import { Recurrence } from "@prisma/client"

export const expensesMapper = (data: IExpenseResponse[]) => {
    return data.map(expense => {
        return {
            id: expense.id,
            description: expense.description,
            value: expense.value,
            deadline: expense.deadline,
            created_at: expense.created_at,
            updated_at: expense.updated_at,
            status: expense?.status?.description,
            tag: expense?.tag?.description
        }
    })
}

export const earningsMapper = (data: IExpenseResponse[]) => {
    return data.map(expense => {
        return {
            id: expense.id,
            description: expense.description,
            value: expense.value,
            created_at: expense.created_at,
            updated_at: expense.updated_at,
            tag: expense?.tag?.description
        }
    })
}

export const recurringEarningsMapper = <T extends RecurringTypeEnum>(
    data: Omit<CreateRecurringType, "expensesId"> & { earningsId: number }
) => {
    return {
        earningsId: data.earningsId,
        range_days: data.range_days,
        recurring: data.recurring as Recurrence
    }
}

export const recurringExpansesMapper = <T extends RecurringTypeEnum>(
    data: Omit<CreateRecurringType, "earningsId"> & { expensesId: number }
) => {
    return {
        expensesId: data.expensesId,
        range_days: data.range_days,
        recurring: data.recurring as Recurrence
    }
}