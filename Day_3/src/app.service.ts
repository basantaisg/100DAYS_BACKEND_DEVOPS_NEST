import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  getDatabaseUrl() {
    return this.configService.get<string>('DATABASE_URL');
  }
}
