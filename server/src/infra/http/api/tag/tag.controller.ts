import { UpdateTagType } from "@common/types";
import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from "@nestjs/common";
import { CreateTagDto, SearchTagDto } from "./dto";
import { TagService } from "./tag.service";
import { AuthGuard } from "@infra/http/auth/guards";

@Controller('tag')
export class TagController {
    constructor(
        private readonly tag: TagService
    ) { }

    @UseGuards(AuthGuard)
    @Get()
    async search(@Query() params: SearchTagDto) {
        return await this.tag.get(params)
    }
    
    @UseGuards(AuthGuard)
    @Patch(':id')
    async update(@Param('id') id: number, @Body() data: UpdateTagType) {
        return await this.tag.update(id, data)
    }
    
    @UseGuards(AuthGuard)
    @Delete(':id')
    async delete(@Param('id') id: number) {
        return await this.tag.delete(id)
    }
    
    @UseGuards(AuthGuard)
    @Post()
    async create(@Body() data: CreateTagDto) {
        return await this.tag.create(data)
    }
}