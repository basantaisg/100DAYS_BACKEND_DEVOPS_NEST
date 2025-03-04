import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UserService } from './user/user.service';
import { UserResolver } from './user/user.resolver';

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [AppService, UserService, UserResolver],
})
export class AppModule {}
