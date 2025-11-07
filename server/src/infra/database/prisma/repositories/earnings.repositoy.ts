import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";

@Injectable()
export class EarningsRepository {
   constructor(
      private readonly prisma: PrismaService
   ) { }


   async create(data: any) {
      return await this.prisma.earnings.create({
         data
      })
   }

   async update(id: number, upData: any) {
      return await this.prisma.earnings.update({
         where: {
            id
         },
         data: upData
      })
   }

   async delete(id: number) {
      return await this.prisma.earnings.delete({
         where: {
            id
         }
      })
   }

   async getById(id: number) {
      return await this.prisma.earnings.findUnique({
         where: {
            id
         }
      })
   }

   async getByDescription(description: string) {
      return await this.prisma.earnings.findFirst({
         where: {
            description
         }
      })
   }

   async getAllByTag(tagId: number) {
      return await this.prisma.earnings.findFirst({
         where: {
            tagId
         },
         include: {
            tag: {
               select: {
                  description: true
               }
            }
         }
      })
   }

   async getAll(page: number, limit: number): Promise<any[]> {
      return await this.prisma.earnings.findMany({
         skip: page * limit,
         take: limit,
         include: {
            tag: {
               select: {
                  description: true
               }
            }
         }
      })
   }
}