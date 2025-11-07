import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { TagController } from './tag.controller';
import { TagService } from './tag.service';

@Module({
  imports: [DatabaseModule],
  providers: [TagService],
  controllers: [TagController]
})
export class TagModule { }
