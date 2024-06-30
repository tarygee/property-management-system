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
    origin: '*', // Allow requests from this origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'ngrok-skip-browser-warning',
    ], // Allow these headers
    credentials: true,
  });

  app.setGlobalPrefix('pms/api');
  await app.listen(4000);
  logger.log('The app is running on port 4000');
}

bootstrap();
