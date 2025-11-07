import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { EarningsController } from './earnings.controller';
import { EarningsService } from './earnings.service';

@Module({
    imports: [DatabaseModule],
    controllers: [EarningsController],
    providers: [EarningsService]

})
export class EarningsModule { }
