import { responseMapper } from "@common/mapper";
import { SearchStatusType } from "@common/types/search/search-status.type";
import { StatusRepository } from "@infra/database/prisma/repositories";
import { Injectable } from "@nestjs/common";

@Injectable()
export class StatusService {
    constructor(
        private readonly repo: StatusRepository
    ) { }

    async create(data: any) {
        return await this.repo.create({
            description: data.description
        })
    }

    async update(id: number, data: any) {
        return await this.repo.update(id, data)
    }

    async delete(id: number) {
        return await this.repo.delete(id)
    }

    async get(params: SearchStatusType) {
        let result: any;
        const { page, limit } = params

        if (params?.id) {
            result = await this.repo.getById(params?.id)
        } else if (params?.description) {
            result = await this.repo.getByDescription(params?.description)
        } else {
            result = await this.repo.getAll(page, limit)
        }

        return responseMapper(Array.isArray(result) ? result : [result], page, limit)
    }
}