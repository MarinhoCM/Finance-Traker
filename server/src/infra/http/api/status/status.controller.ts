import { UpdateStatusType } from "@common/types";
import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from "@nestjs/common";
import { CreateStatusDto, SearchStatusDto } from "./dto";
import { StatusService } from "./status.service";
import { AuthGuard } from "@infra/http/auth/guards";

@Controller('status')
export class StatusController {
    constructor(
        private readonly status: StatusService
    ) { }

    @UseGuards(AuthGuard)
    @Get()
    async search(@Query() params: SearchStatusDto) {
        return await this.status.get(params)
    }
    
    @UseGuards(AuthGuard)
    @Patch(':id')
    async update(@Param('id') id: number, @Body() data: UpdateStatusType) {
        return await this.status.update(id, data)
    }
    
    @UseGuards(AuthGuard)
    @Delete(':id')
    async delete(@Param('id') id: number) {
        return await this.status.delete(id)
    }
    
    @UseGuards(AuthGuard)
    @Post()
    async create(@Body() data: CreateStatusDto) {
        return await this.status.create(data)
    }
}