import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { AlunosModule } from './alunos/dto/alunos.module.js';
@Module({
  
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/Escola_db'),
    AlunosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
