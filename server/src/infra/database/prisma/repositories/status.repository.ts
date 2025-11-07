import { UpdateStatusType } from "@common/types";
import { CreateStatusType } from "@common/types/create/create-status.type";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";

@Injectable()
export class StatusRepository {
    constructor(
        private readonly prisma: PrismaService
    ) { }

    async create(data: CreateStatusType) {
        return await this.prisma.status.create({
            data
        })
    }

    async update(id: number, upData: UpdateStatusType) {
        return await this.prisma.status.update({
            where: {
                id
            },
            data: upData
        })
    }

    async delete(id: number) {
        return await this.prisma.status.update({
            where: {
                id
            },
            data: {
                active: false
            }
        })
    }

    async getById(id: number) {
        return await this.prisma.status.findUnique({
            where: {
                id
            }
        })
    }

    async getByDescription(description: string) {
        return await this.prisma.status.findFirst({
            where: {
                description,
                active: true
            }
        })
    }

    async getAll(page: number, limit: number) {
        return await this.prisma.status.findMany({
            skip: page * limit,
            take: limit,
            where: {
                active: true
            }
        })
    }
}