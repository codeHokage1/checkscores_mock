import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import { ChatGateway } from './chat/chat.gateway';
import { ChatModule } from './chat/chat.module';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [AuthModule, ProfileModule, ChatModule, CacheModule.register()],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService, ChatGateway],
})
export class AppModule {}
