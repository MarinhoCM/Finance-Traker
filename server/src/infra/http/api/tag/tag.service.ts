import { responseMapper } from "@common/mapper";
import { CreateTagType } from "@common/types/create/create-tag.type";
import { SearchTagType } from "@common/types/search/search-tag.type";
import { TagRepository } from "@infra/database/prisma/repositories";
import { Injectable } from "@nestjs/common";

@Injectable()
export class TagService {
    constructor(
        private readonly repo: TagRepository
    ) { }

    async create(data: CreateTagType) {
        return await this.repo.create(data)
    }

    async update(id: number, data: any) {
        return await this.repo.update(id, data)
    }

    async delete(id: number) {
        return await this.repo.delete(id)
    }

    async get(params: SearchTagType) {
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