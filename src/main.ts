import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const port = process.env.PORT || 3000;

  // Serve static files from the 'public' directory
  app.useStaticAssets(join(__dirname, '..', 'public'));

  // Allow CORS for all origins
  app.enableCors({
    origin: '*',
  });

  await app.listen(port);
  console.log(`Application is running on port: ${port}`);
}
bootstrap();
