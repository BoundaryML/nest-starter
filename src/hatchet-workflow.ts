import { Workflow } from '@hatchet-dev/typescript-sdk';
import { b } from './baml_client/async_client';

export const workflow: Workflow = {
  id: 'first-workflow',
  description: 'This is my first workflow',
  on: {
    event: 'tutorial:create',
  },
  steps: [
    {
      name: 'first-step',
      run: async (ctx) => {
        const res = await b.ExtractResume(`
          John Smith
          Software Engineer with 5 years of experience
          Education: BS Computer Science, Stanford University
          Skills: JavaScript, Python, React, Node.js
          Contact: john.smith@email.com
          `);
        console.log(res);
        console.log(
          "Congratulations! You've successfully triggered your first workflow run! 🎉",
        );

        return {
          result: 'success!' + JSON.stringify(res),
        };
      },
    },
  ],
};
