import { Module } from '@nestjs/common';
import { UsersModule } from './users/module/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/datasource';
import { PropertyModule } from './property/module/property.module';
import { DamagesModule } from './damages/damages.module';
import { DownloadsModule } from './downloads/module/downloads.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    UsersModule,
    PropertyModule,
    DamagesModule,
    DownloadsModule,
  ],
  controllers: [], //AppController
  providers: [], //AppService
})
export class AppModule {}
