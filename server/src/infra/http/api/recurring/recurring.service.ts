import { RecurringTypeEnum } from "@common/enum";
import { responseMapper } from "@common/mapper";
import { recurringEarningsMapper, recurringExpansesMapper } from "@common/mapper/common.mappers";
import { SearchRecurringType } from "@common/types";
import { CreateRecurringType } from "@common/types/create/create-recurring.type";
import { RecurringEarningsRepository } from "@infra/database/prisma/repositories";
import { RecurringExpensesRepository } from "@infra/database/prisma/repositories/recurring-expenses.repository";
import { Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class RecurringService {
    constructor(
        private readonly expenses: RecurringExpensesRepository,
        private readonly earnings: RecurringEarningsRepository
    ) { }

    async associate(data: CreateRecurringType) {
        if (RecurringTypeEnum.EARNING == data.type) {
            const earningModel = recurringEarningsMapper(data as any)
            return await this.earnings.create(earningModel)
        } else {
            const expenseModel = recurringExpansesMapper(data as any)
            return await this.expenses.create(expenseModel)
        }
    }

    async update(id: number, upData: any) {
        const { type, ...data } = upData

        if (RecurringTypeEnum.EARNING == type) {
            return await this.earnings.update(id, data)
        } else {
            return await this.expenses.update(id, data)
        }
    }

    async remove(id: number, type: RecurringTypeEnum) {
        if (RecurringTypeEnum.EARNING == type) {
            return await this.earnings.delete(id)
        } else {
            return await this.expenses.delete(id)
        }
    }

    async get(params: SearchRecurringType) {
        let result: any;
        const { page, limit, type } = params

        if (type === RecurringTypeEnum.EARNING) {
            if (params?.id) result = await this.earnings.getById(params.id)
            else if (params?.range_days) result = await this.earnings.getAllByRange(params.range_days, page, limit)
            else if (params?.recurring) result = await this.earnings.getAllByRecurrence(params.recurring, page, limit)
            else result = await this.earnings.getAll(page, limit)
        } else {
            if (params?.id) result = await this.expenses.getById(params.id)
            else if (params?.range_days) result = await this.expenses.getAllByRange(params.range_days, page, limit)
            else if (params?.recurring) result = await this.expenses.getAllByRecurrence(params.recurring, page, limit)
            else result = await this.expenses.getAll(page, limit)
        }

        if (!result) throw new NotFoundException(`No results found for query.`)

        return responseMapper(Array.isArray(result) ? result : [result], page, limit)
    }

}