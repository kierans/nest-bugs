import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InjectionModule } from './injection/injection.module';

@Module({
  imports: [
    InjectionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
