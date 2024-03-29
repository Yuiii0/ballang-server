import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  //초기화+injection 발생?
  const app = await NestFactory.create(AppModule);
  await app.listen(80);
}
bootstrap();
