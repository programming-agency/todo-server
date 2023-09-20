import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Enable CORS with appropriate options
  app.enableCors({
    origin: 'http://localhost:3000', // Replace with the origin(s) you want to allow
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });
  // app.enableCors({
  //   origin: [
  //     'http://localhost:3000',
  //     'https://todo-server-programming-agency.vercel.app',
  //   ],
  //   methods: ["GET", "POST"],
  //   credentials: true,
  // });
  await app.listen(8080);
}
bootstrap();
