import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { Recurrence } from "@prisma/client";

@Injectable()
export class RecurringExpensesRepository {
    constructor(
        private readonly prisma: PrismaService
    ) { }

    async create(data: any) {
        return await this.prisma.recurring_expenses.create({
            data
        })
    }

    async update(id: number, upData: any) {
        return await this.prisma.recurring_expenses.update({
            where: {
                id
            },
            data: upData
        })
    }

    async delete(id: number) {
        return await this.prisma.recurring_expenses.update({
            where: {
                id
            },
            data: {
                active: false
            }
        })
    }

    async getById(id: number) {
        return await this.prisma.recurring_expenses.findUnique({
            where: {
                id
            }
        })
    }

    async getAllByRange(range: number, page: number, limit: number) {
        return await this.prisma.recurring_expenses.findMany({
            where: {
                range_days: range
            },
            skip: page * limit,
            take: limit
        })
    }

    async getAllByRecurrence(recurrence: Recurrence, page: number, limit: number) {
        return await this.prisma.recurring_expenses.findMany({
            where: {
                recurring: recurrence
            },
            skip: page * limit,
            take: limit
        })
    }

    async getAll(page: number, limit: number) {
        return await this.prisma.recurring_expenses.findMany({
            include: {
                expense: {
                    select: {
                        id: true,
                        description: true,
                        value: true
                    }
                }
            },
            skip: page * limit,
            take: limit
        })
    }
}