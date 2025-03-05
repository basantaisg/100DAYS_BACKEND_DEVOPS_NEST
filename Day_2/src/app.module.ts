import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { GraphqlModule } from './graphql.module';

@Module({
  imports: [UserModule, GraphqlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
