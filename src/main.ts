import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const PORT = process.env.PORT || 4000;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Next library API')
    .setDescription('REST API documentatiion')
    .setVersion('1.0.0')
    .addTag('Aleś')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/doc', app, document);

  await app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
  });
}
bootstrap();
