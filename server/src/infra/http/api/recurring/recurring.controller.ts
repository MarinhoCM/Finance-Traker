import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from "@nestjs/common";
import { CreateRecurringDto, RemoveRecurringDto, SearchRecurringDto, UpdateRecurringDto } from "./dto";
import { RecurringService } from "./recurring.service";
import { AuthGuard } from "@infra/http/auth/guards";

@Controller('recurring')
export class RecurringController {
    constructor(
        private readonly recurring: RecurringService
    ) { }

    @UseGuards(AuthGuard)
    @Post()
    async associate(@Body() data: CreateRecurringDto) {
        return await this.recurring.associate(data)
    }
    
    @UseGuards(AuthGuard)
    @Patch(':id')
    async update(@Param('id') id: number, @Body() upData: UpdateRecurringDto) {
        return await this.recurring.update(id, upData)
    }
    
    @UseGuards(AuthGuard)
    @Delete(':id')
    async remove(@Param('id') id: number, @Query() params: RemoveRecurringDto) {
        return await this.recurring.remove(id, params.type)
    }
    
    @UseGuards(AuthGuard)
    @Get()
    async search(@Query() params: SearchRecurringDto) {
        return await this.recurring.get(params)
    }
}