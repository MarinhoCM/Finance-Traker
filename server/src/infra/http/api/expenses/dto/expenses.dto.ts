import { Type } from "class-transformer";
import { IsDateString, IsNumber, IsOptional, IsString, ValidateIf } from "class-validator";

export class CreateExpensesDto {
    @IsString()
    description: string;

    @IsNumber()
    value: number;

    @IsNumber()
    statusId: number;

    @IsNumber()
    userId: number;

    @IsNumber()
    tagId: number;

    @IsDateString()
    deadline: string;
}

export class SearchExpenseDto {
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
    status?: string;

    @ValidateIf(o => o.id === undefined)
    @IsNumber()
    page: number = 0

    @ValidateIf(o => o.id === undefined)
    @IsNumber()
    limit: number = 50
}


export class UpdateExpensesDto {
    @IsOptional()
    @IsString()
    description: string;
    
    @IsOptional()
    @IsNumber()
    value: number;
    
    @IsOptional()
    @IsNumber()
    tagId: number;
    
    @IsOptional()
    @IsNumber()
    statusId: number;
    
    @IsOptional()
    @IsDateString()
    deadline: string;
}