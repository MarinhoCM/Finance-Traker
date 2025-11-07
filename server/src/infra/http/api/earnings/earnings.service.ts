import { responseMapper } from "@common/mapper";
import { earningsMapper } from "@common/mapper/common.mappers";
import { SearchEarningsType } from "@common/types/search/search-earnings.type";
import { EarningsRepository, TagRepository } from "@infra/database/prisma/repositories";
import { Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class EarningsService {
    constructor(
        private readonly repo: EarningsRepository,
        private readonly tag: TagRepository
    ) { }

    async create(data: any) {
        return await this.repo.create(data)
    }

    async update(id: number, upData: any) {
        return await this.repo.update(id, upData)
    }

    async delete(id: number) {
        return await this.repo.delete(id)
    }

    async get(params: SearchEarningsType) {

        let result: any;
        const { page, limit } = params

        if (params?.id) {
            result = await this.repo.getById(params?.id)
        } else if (params?.description) {
            result = await this.repo.getByDescription(params?.description)
        } else if (params?.tag) {
            const tag = await this.tag.getByDescription(params.tag)
            if (!tag) throw new NotFoundException(`The tag ${params.tag} not founded.`)
            result = await this.repo.getAllByTag(tag.id)
        } else {
            const earnings = await this.repo.getAll(page, limit)
            result = earningsMapper(earnings)
        }

        if (!result) throw new NotFoundException(`No results found for query.`)

        return responseMapper(Array.isArray(result) ? result : [result], page, limit)
    }
}