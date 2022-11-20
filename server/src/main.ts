import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from "@nestjs/common"
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser'; //To be able to read cookies easily we need the  cookie-parser

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true })); 
  // global use of pipes
  // whitelist — removes any property of query, body, and a parameter that is not part of our DTO
  // transform — enables the transformation of our incoming request
  app.use(cookieParser());
  await app.listen(5000);
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true
  });
}
bootstrap();