import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/datasource';
import { PropertyModule } from './property/property.module';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), UsersModule, PropertyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
