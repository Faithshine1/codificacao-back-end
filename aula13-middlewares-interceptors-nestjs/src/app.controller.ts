import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {

  @Get()
  getPublic(){
    return {
      message:'Rota Pública Acessada com Sucesso!',
      data: new Date(), 
    }
  }

  @Get('/admin')
  getAdmin(){
    return{
  message:'Bem-vindo ao Painel admnistrativo!',
  data: new Date(),
    }
  }
}
