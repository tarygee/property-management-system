import { Module } from '@nestjs/common';
import { DownloadsService } from '../services/downloads.service';
import { DownloadsController } from '../controller/downloads.controller';

@Module({
  controllers: [DownloadsController],
  providers: [DownloadsService],
})
export class DownloadsModule {}
