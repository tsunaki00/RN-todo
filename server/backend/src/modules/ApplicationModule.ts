import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CorsMiddleware } from '../core/middlewares/CorsMiddleware';
import { DynamicModuleLoader } from '../core/DynamicModuleLoader';

import * as passport from 'passport';
import * as config from 'config';

@Module({
  imports: [
    TypeOrmModule.forRoot({ ...config.get('database') }),
    DynamicModuleLoader.forRoot(config.get('application.modules')),
  ]
})
export class ApplicationModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorsMiddleware).forRoutes('*');

    // JWT対応
    // exclude()の使い方がイケてないので個別に指定する必要がある
    consumer
      .apply(passport.authenticate('jwt', { session: false }))
      .forRoutes('common');
  }
}
