import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('API de Catálogo e Estoque!')
  .setDescription('Documentação Técnica interativa e vova para integração')
  .setVersion('1.0')
  .addTag('Produtos')
  .addBasicAuth()
  .build
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
