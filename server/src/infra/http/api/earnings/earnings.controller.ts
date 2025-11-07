import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from "@nestjs/common";
import { CreateEarningsDto, SearchEarningsDto, UpdateEarningsDto } from "./dto";
import { EarningsService } from "./earnings.service";
import { AuthGuard } from "@infra/http/auth/guards";

@Controller('earnings')
export class EarningsController {
    constructor(
        private readonly earnings: EarningsService
    ) { }

    @UseGuards(AuthGuard)
    @Post()
    async create(@Body() data: CreateEarningsDto) {
        return await this.earnings.create(data)
    }
    
    @UseGuards(AuthGuard)
    @Patch(':id')
    async update(@Param('id') id: number, @Body() upData: UpdateEarningsDto) {
        return await this.earnings.update(id, upData)
    }
    
    @UseGuards(AuthGuard)
    @Delete(':id')
    async delete(@Param('id') id: number) {
        return await this.earnings.delete(id)
    }
    
    @UseGuards(AuthGuard)
    @Get()
    async search(@Query() params: SearchEarningsDto) {
        return await this.earnings.get(params)
    }
}