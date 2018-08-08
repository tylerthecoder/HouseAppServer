import * as log from 'winston';

const consoleOptions = {
  name: 'log1',
  level: 'debug',
  handleExceptions: true,
  json: false,
  colorize: true,
  prettyPrint: ( object ) => {
    return JSON.stringify(object);
  },
};

const logger = log.createLogger({
  level: 'debug',
  format: log.format.simple(),
  transports: [
    new log.transports.Console(consoleOptions),
  ],
});

export default logger;
