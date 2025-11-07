import { RecurrenceEnum, RecurringTypeEnum } from '@common/enum';
import { Type } from "class-transformer";
import { IsBoolean, IsEnum, IsNumber, IsOptional, IsString, ValidateIf } from "class-validator";

export class CreateRecurringDto {
    @IsEnum(RecurringTypeEnum)
    @IsString()
    type: string;

    @IsOptional()
    @IsEnum(RecurrenceEnum)
    recurring: string;

    @IsOptional()
    @IsNumber()
    range_days: number;

    @IsOptional()
    @IsBoolean()
    active: boolean;

    @ValidateIf(o => o.type == RecurringTypeEnum.EARNING)
    @IsNumber()
    earningsId?: number

    @ValidateIf(o => o.type == RecurringTypeEnum.EXPENSES)
    @IsNumber()
    expensesId?: number
}

export class RemoveRecurringDto {
    @IsEnum(RecurringTypeEnum)
    @IsString()
    type: RecurringTypeEnum;
}

export class SearchRecurringDto {
    @IsOptional()
    @Type(o => Number)
    @IsNumber()
    id?: number;

    @IsEnum(RecurringTypeEnum)
    @IsString()
    type: RecurringTypeEnum;

    @ValidateIf(o => o.id !== undefined)
    @IsOptional()
    @IsNumber()
    range_days?: number;

    @ValidateIf(o => o.id !== undefined)
    @IsOptional()
    @IsEnum(RecurrenceEnum)
    @IsString()
    recurring?: RecurrenceEnum;

    @ValidateIf(o => o.id === undefined)
    @IsNumber()
    page: number = 0;

    @ValidateIf(o => o.id === undefined)
    @IsNumber()
    limit: number = 50;
}

export class UpdateRecurringDto {
    @IsEnum(RecurringTypeEnum)
    @IsString()
    type: RecurringTypeEnum;

    @IsOptional()
    @IsNumber()
    range_days?: number;

    @IsOptional()
    @IsEnum(RecurrenceEnum)
    @IsString()
    recurring?: RecurrenceEnum;

    @IsOptional()
    @IsBoolean()
    active?: boolean;
}