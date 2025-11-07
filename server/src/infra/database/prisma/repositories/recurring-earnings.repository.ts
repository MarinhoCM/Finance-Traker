import { IRecurringEarning } from "@common/interfaces/recurring.interface";
import { Injectable } from "@nestjs/common";
import { Recurrence } from "@prisma/client";
import { PrismaService } from "../prisma.service";

@Injectable()
export class RecurringEarningsRepository {
    constructor(
        private readonly prisma: PrismaService
    ) { }

    async create(data: IRecurringEarning) {
        return await this.prisma.recurring_earnings.create({
            data
        })
    }

    async update(id: number, upData: any) {
        return await this.prisma.recurring_earnings.update({
            where: {
                id
            },
            data: upData
        })
    }

    async delete(id: number) {
        return await this.prisma.recurring_earnings.update({
            where: {
                id
            },
            data: {
                active: false
            }
        })
    }

    async getById(id: number) {
        return await this.prisma.recurring_earnings.findUnique({
            where: {
                id
            }
        })
    }

    async getAllByRange(range: number, page: number, limit: number) {
        return await this.prisma.recurring_earnings.findMany({
            where: {
                range_days: range,
                active: true
            },
            skip: page * limit,
            take: limit
        })
    }

    async getAllByRecurrence(recurrence: Recurrence, page: number, limit: number) {
        return await this.prisma.recurring_earnings.findMany({
            where: {
                recurring: recurrence,
                active: true
            },
            skip: page * limit,
            take: limit
        })
    }

    async getAll(page: number, limit: number) {
        return await this.prisma.recurring_earnings.findMany({
            where: {
                active: true
            },
            include: {
                earning: {
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