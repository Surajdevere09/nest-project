import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'static'));
  app.useGlobalPipes(
    new ValidationPipe({
      // whitelist: true,
      // transform: true,
      // forbidNonWhitelisted: true,
    }),
  );
  //global Prefix
  app.setGlobalPrefix('api/v1');
  await app.listen(3000);
}
bootstrap();
