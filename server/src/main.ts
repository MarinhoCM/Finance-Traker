import { serverConfig } from '@config/settings.config';
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger(bootstrap.name)

  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true
  }))

  await app.listen(serverConfig.port);
  logger.log(`Server listening on port: ${serverConfig.port}`)
}
bootstrap();
