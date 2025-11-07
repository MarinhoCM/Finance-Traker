import { IExpenseResponse } from "@common/interfaces";
import { CreateExpensesType } from "@common/types/create/create-expenses.type";
import { UpdateExpensesType } from "@common/types/update/update-expenses.type";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";

@Injectable()
export class ExpensesRepository {
    constructor(
        private readonly prisma: PrismaService
    ) { }

    async create(data: CreateExpensesType) {
        return await this.prisma.expenses.create({
            data
        })
    }

    async update(id: number, upData: UpdateExpensesType) {
        return await this.prisma.expenses.update({
            where: {
                id
            },
            data: upData
        })
    }

    async delete(id: number) {
        return await this.prisma.expenses.delete({
            where: {
                id
            }
        })
    }

    async getById(id: number) {
        return await this.prisma.expenses.findUnique({
            where: {
                id
            },
            include: {
                status: {
                    select: {
                        description: true
                    }
                },
                tag: {
                    select: {
                        description: true
                    }
                }
            }
        })
    }

    async getAllByStatus(statusId: number) {
        return await this.prisma.expenses.findMany({
            where: {
                statusId
            }
        })
    }

    async getByDescription(description: string) {
        return await this.prisma.expenses.findFirst({
            where: {
                description
            }
        })
    }

    async getAll(page: number, limit: number): Promise<IExpenseResponse[]> {
        return await this.prisma.expenses.findMany({
            skip: page * limit,
            take: limit,
            include: {
                status: {
                    select: {
                        description: true
                    }
                },
                tag: {
                    select: {
                        description: true
                    }
                }
            }
        })
    }
}