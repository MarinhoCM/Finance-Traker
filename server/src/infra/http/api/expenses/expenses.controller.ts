import { AuthGuard } from "@infra/http/auth/guards";
import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from "@nestjs/common";
import { CreateExpensesDto, SearchExpenseDto, UpdateExpensesDto } from "./dto";
import { ExpensesService } from "./expenses.service";

@Controller('expenses')
export class ExpensesController {
    constructor(
        private readonly expenses: ExpensesService
    ) { }

    @UseGuards(AuthGuard)
    @Post()
    async create(@Body() data: CreateExpensesDto) {
        return await this.expenses.create(data)
    }

    @UseGuards(AuthGuard)
    @Patch(':id')
    async update(@Param('id') id: number, @Body() upData: UpdateExpensesDto) {
        return await this.expenses.update(id, upData)
    }

    @UseGuards(AuthGuard)
    @Delete(':id')
    async delete(@Param('id') id: number) {
        return await this.expenses.delete(id)
    }

    @UseGuards(AuthGuard)
    @Get()
    async search(@Query() params: SearchExpenseDto) {
        return await this.expenses.get(params)
    }
}