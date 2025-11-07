import { DatabaseModule } from "@infra/database/database.module";
import { Module } from "@nestjs/common";
import { EncryptService } from "./encrypt/encrypt.service";
import { UsersService } from "./users/users.service";

@Module({
    imports: [DatabaseModule],
    providers: [UsersService, EncryptService],
    exports: [UsersService, EncryptService]
})
export class ServicesModule { }