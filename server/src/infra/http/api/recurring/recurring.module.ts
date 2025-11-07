import { DatabaseModule } from "@infra/database/database.module";
import { Module } from "@nestjs/common";
import { RecurringController } from "./recurring.controller";
import { RecurringService } from "./recurring.service";

@Module({
    imports: [DatabaseModule],
    controllers: [RecurringController],
    providers: [RecurringService]
})
export class RecurringModule { }