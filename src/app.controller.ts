import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { b } from './baml_client';
import Hatchet from '@hatchet-dev/typescript-sdk';
import { workflow } from './hatchet-workflow';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<string> {
    console.log('worker returned');
    // const res = await b.ExtractResume(`
    //   John Smith
    //   Software Engineer with 5 years of experience
    //   Education: BS Computer Science, Stanford University
    //   Skills: JavaScript, Python, React, Node.js
    //   Contact: john.smith@email.com
    //   `);
    // console.log(res);

    await new Promise((resolve) => setTimeout(resolve, 10000));
    // await worker.stop();

    return this.appService.getHello();
  }
}
