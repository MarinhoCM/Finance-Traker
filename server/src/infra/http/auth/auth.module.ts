import { serverConfig } from "@config/settings.config";
import { DatabaseModule } from "@infra/database/database.module";
import { EncryptService } from "@infra/services/encrypt/encrypt.service";
import { UsersService } from "@infra/services/users/users.service";
import { Module } from "@nestjs/common";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { AuthGuard } from "./guards";

@Module({
    imports: [
        DatabaseModule,
        JwtModule.register({
            global: true,
            secret: serverConfig.key,
            signOptions: { expiresIn: '1h' }
        })
    ],
    controllers: [AuthController],
    providers: [AuthService, UsersService, JwtService, EncryptService, AuthGuard]
})
export class AuthModule { }