import { UpdateTagType } from "@common/types";
import { CreateTagType } from "@common/types/create/create-tag.type";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";

@Injectable()
export class TagRepository {
    constructor(
        private readonly prisma: PrismaService
    ) { }


    async create(data: CreateTagType) {
        return await this.prisma.tag.create({
            data
        })
    }

    async update(id: number, upData: UpdateTagType) {
        return await this.prisma.tag.update({
            where: {
                id
            },
            data: upData
        })
    }

    async delete(id: number) {
        return await this.prisma.tag.update({
            where: {
                id
            },
            data: {
                active: false
            }
        })
    }

    async getById(id: number) {
        return await this.prisma.tag.findUnique({
            where: {
                id
            }
        })
    }

    async getByDescription(description: any) {
        return await this.prisma.tag.findFirst({
            where: {
                description
            }
        })
    }

    async getAll(page: number, limit: number) {
        return await this.prisma.tag.findMany({
            skip: page * limit,
            take: limit,
            where: {
                active: true
            }
        })
    }
}