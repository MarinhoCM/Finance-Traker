import { responseMapper } from "@common/mapper";
import { expensesMapper } from "@common/mapper/common.mappers";
import { SearchExpenseType } from "@common/types";
import { CreateExpensesType } from "@common/types/create/create-expenses.type";
import { UpdateExpensesType } from "@common/types/update/update-expenses.type";
import { ExpensesRepository, StatusRepository } from "@infra/database/prisma/repositories";
import { Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class ExpensesService {
    constructor(
        private readonly repo: ExpensesRepository,
        private readonly status: StatusRepository
    ) { }

    async create(data: CreateExpensesType) {
        return await this.repo.create(data)
    }

    async update(id: number, upData: UpdateExpensesType) {
        return await this.repo.update(id, upData)
    }

    async delete(id: number) {
        return await this.repo.delete(id)
    }

    async get(params: SearchExpenseType) {
        let result: any;
        const { page, limit } = params

        if (params?.id) {
            result = await this.repo.getById(params?.id)
        } else if (params?.description) {
            result = await this.repo.getByDescription(params?.description)
        } else if (params?.status) {
            const status = await this.status.getByDescription(params.status)
            if (!status) throw new NotFoundException(`The status ${params.status} not founded.`)
            result = await this.repo.getAllByStatus(status.id)
        } else {
            const expenses = await this.repo.getAll(page, limit)
            result = expensesMapper(expenses)
        }

        if (!result) throw new NotFoundException(`No results found for query.`)

        return responseMapper(Array.isArray(result) ? result : [result], page, limit)
    }
}