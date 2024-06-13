import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/module/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/datasource';
import { PropertyModule } from './property/module/property.module';
import { DamagesModule } from './damages/module/damages.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    UsersModule,
    PropertyModule,
    DamagesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
