import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { MpesaController } from './mpesa.controller';
import { MpesaService } from './mpesa.service';
import { ConfigModule } from '@nestjs/config';
import { MpesaMiddleware } from './mpesa.middleware';


@Module({
  imports: [ConfigModule],
  controllers: [MpesaController],
  providers: [MpesaService]
})
export class MpesaModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(MpesaMiddleware)
      // .exclude(
      //   { path: 'lipanampesa', method: RequestMethod.GET }
      // )
      .forRoutes(MpesaController);
  }
}
