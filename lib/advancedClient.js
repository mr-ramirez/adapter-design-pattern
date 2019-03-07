import fetch from 'node-fetch';

const createAdvancedClient = ({ logAgent }) => ({
  logAgent,
  async startLogging() {
    const response = await fetch('http://localhost:3000/activities', { METHOD: 'GET' });
    const activities = await response.json();
    this.logAgent.log({ activities });
  },
});

export { createAdvancedClient };