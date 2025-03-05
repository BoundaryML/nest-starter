import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { workflow } from './hatchet-workflow';
import Hatchet from '@hatchet-dev/typescript-sdk';

async function bootstrap() {
  const hatchet = Hatchet.init({
    token: process.env.HATCHET_CLIENT_TOKEN,
    // namespace: 'test',
  });

  const worker = await hatchet.worker('tutorial-worker');
  await worker.registerWorkflow(workflow);
  await worker.start();
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  await worker.stop();
}
bootstrap();
