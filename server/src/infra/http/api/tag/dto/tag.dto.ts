import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsString, ValidateIf } from "class-validator";

export class CreateTagDto {
    @IsString()
    description: string;
}

export class SearchTagDto {
    @IsOptional()
    @Type(o => Number)
    @IsNumber()
    id?: number;

    @ValidateIf(o => o.id === undefined)
    @IsOptional()
    @IsString()
    description?: string;

    @ValidateIf(o => o.id === undefined)
    @IsNumber()
    page: number = 0

    @ValidateIf(o => o.id === undefined)
    @IsNumber()
    limit: number = 50
}

