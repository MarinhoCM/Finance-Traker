import { IsString } from "class-validator";

export class UserLoginDto {
    @IsString()
    user: string;
    
    @IsString()
    pass: string;
}