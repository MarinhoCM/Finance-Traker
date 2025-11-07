import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { StatusController } from './status.controller';
import { StatusService } from './status.service';

@Module({
  imports: [DatabaseModule],
  providers: [StatusService],
  controllers: [StatusController]
})
export class StatusModule { }
