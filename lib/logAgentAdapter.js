import { createLogAgent } from './logAgent';

const createLogAgentAdapter = () => ({
  logAgent: createLogAgent(),
  log({ activities }) {
    activities.forEach(({ action, user }) => {
      this.logAgent.log({ action, user });
    });
  },
});

export { createLogAgentAdapter };
