import { Module } from '@nestjs/common';
import { UsersModule } from './users/module/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/datasource';
import { PropertyModule } from './property/module/property.module';
import { DamagesModule } from './damages/module/damages.module';
import { ScheduleModule } from './schedule/module/schedule.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    UsersModule,
    PropertyModule,
    DamagesModule,
    ScheduleModule,
  ],
  controllers: [], //AppController
  providers: [], //AppService
})
export class AppModule {}
