import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { DadaController } from './dada/dada.controller';

@Module({
  imports: [],
  controllers: [AppController, ItemsController, DadaController],
  providers: [AppService, ItemsService],
})
export class AppModule {}
