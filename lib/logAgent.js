import winston from 'winston';

const createLogAgent = () => ({
  logger: winston.createLogger({
    transports: [
      new winston.transports.File({ filename: './logs/activities.log' }),
    ],
  }),
  log(action, user) {
    this.logger.log({
      action,
      level: 'info',
      user,
    });
  },
});

export { createLogAgent };
