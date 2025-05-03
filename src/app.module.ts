import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShoppingModule } from './shopping/shopping.module';

@Module({
  imports: [ShoppingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
