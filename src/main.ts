import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('bootstrap');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  app.enableCors({
    origin: '*',
    methods: 'post, get, patch, update, delete, head',
    credentials: true,
  });
  app.setGlobalPrefix('pms/api');
  await app.listen(4000);
  logger.log('the app is running on port 4000');
}
bootstrap();
