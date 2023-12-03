import { NestFactory, Reflector } from '@nestjs/core';
import { ClassSerializerInterceptor, ValidationPipe , Logger} from '@nestjs/common';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser'; //To be able to read cookies easily we need the  cookie-parser
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: false,
  });
  const logger = new Logger();


  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
    );
    
    app.use(cookieParser());

    // app.useGlobalInterceptors(new ClassSerializerInterceptor(
    //   app.get(Reflector))
    // );
  const configService = app.get(ConfigService);
  
  app.enableCors({
    origin: configService.get('FRONTEND_URL'),
    credentials: true
  });
  const port = configService.get('PORT') ?? 3000 ;

  await app.listen(port);
  logger.log(`Application is up and  running on ${port}`);
}
bootstrap();