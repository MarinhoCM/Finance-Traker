import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsString, ValidateIf } from "class-validator";

export class CreateEarningsDto {
    @IsString()
    description: string;

    @IsNumber()
    value: number;

    @IsNumber()
    userId: number;

    @IsNumber()
    tagId: number;
}

export class SearchEarningsDto {
    @IsOptional()
    @Type(o => Number)
    @IsNumber()
    id?: number;

    @ValidateIf(o => o.id === undefined)
    @IsOptional()
    @IsString()
    description?: string;

    @ValidateIf(o => o.id === undefined)
    @IsString()
    @IsOptional()
    tag?: string;

    @ValidateIf(o => o.id === undefined)
    @IsNumber()
    page: number = 0

    @ValidateIf(o => o.id === undefined)
    @IsNumber()
    limit: number = 50
}

export class UpdateEarningsDto {
    @IsOptional()
    @IsString()
    description: string;

    @IsOptional()
    @IsNumber()
    value: number;

    @IsOptional()
    @IsNumber()
    tagId: number;
}