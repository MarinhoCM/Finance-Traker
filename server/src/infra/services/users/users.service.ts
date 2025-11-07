import { IUser } from "@common/interfaces";
import { responseMapper } from "@common/mapper/response.mapper";
import { CreateUserType } from "@common/types";
import { SearchUser } from "@common/types/search/search-user.type";
import { UserRepository } from "@infra/database/prisma/repositories/user.repository";
import { Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class UsersService {
    constructor(
        private readonly repo: UserRepository
    ) { }

    async create(data: CreateUserType): Promise<IUser> {
        return await this.repo.create(data)
    }

    async get(search: SearchUser) {
        const { page, limit } = search;

        let result: any;

        if (search?.id) {
            result = await this.repo.getById(search?.id)
        } else if (search?.name) {
            result = await this.repo.getByName(search?.name)
        } else {
            result = await this.repo.getAll(page, limit)
        }

        if (!result) throw new NotFoundException(`No results found for query.`)

        return responseMapper(Array.from(result), page, limit)
    }

    async getUserByName(name: string){
        return await this.repo.getByName(name)
    }

}