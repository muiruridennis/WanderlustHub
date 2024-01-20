import { NestFactory, Reflector } from '@nestjs/core';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser'; //To be able to read cookies easily we need the  cookie-parser
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: false,
  });

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true
  }));
  // global use of pipes
  // whitelist — removes any property of query, body, and a parameter that is not part of our DTO
  // transform — enables the transformation of our incoming request
  app.useGlobalInterceptors(new ClassSerializerInterceptor(
    app.get(Reflector))
  );
  const configService = app.get(ConfigService);

  app.use(cookieParser());
  app.enableCors({
    origin: configService.get('FRONTEND_URL'),
    credentials: true
  });
  const port = configService.get('PORT') ?? 3000;

  await app.listen(port);

}
bootstrap();