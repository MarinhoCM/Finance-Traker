import { IUser } from "@common/interfaces";
import { CreateUserType } from "@common/types";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";

@Injectable()
export class UserRepository {
    constructor(
        private readonly prisma: PrismaService
    ) { }

    async create(data: CreateUserType) {
        return await this.prisma.user.create({
            data
        })
    }

    async getById(id: number): Promise<IUser | null> {
        return await this.prisma.user.findUnique({
            where: {
                id
            }
        })
    }

    async getByName(name: string): Promise<IUser | null> {
        return await this.prisma.user.findFirst({
            where: {
                name
            }
        })
    }

    async getAll(page: number, limit: number) {
        return await this.prisma.user.findMany({
            skip: page * limit,
            take: limit
        })
    }

}