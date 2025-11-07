import { Body, Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserLoginDto } from "./dto";
import { AuthGuard } from "./guards";

@Controller('Auth')
export class AuthController {
    constructor(
        private readonly auth: AuthService
    ) { }

    @Post('register')
    async singIn(@Body() params: UserLoginDto) {
        const { user, pass } = params;
        return await this.auth.register(user, pass)
    }

    @UseGuards(AuthGuard)
    @Post('login')
    async login(@Body() params: UserLoginDto) {
        const { pass, user } = params;
        return await this.auth.login(user, pass)
    }
    
    @Post('refresh')
    async refresh(@Body() params: UserLoginDto){
        const { pass, user } = params;
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
}