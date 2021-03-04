import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './user/user.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { User } from './user/user.model';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'nest_demo_mysql',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'mysql_demo',
      models: [User],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware);
  }
}
