import pino from 'pino';
import morgan from 'morgan';
import config from '../config';

const isDevelopment = config.env === 'development';
export const logger = pino({
  transport: isDevelopment ? {
    target: 'pino-pretty',
    options: {
      colorize: true,
      levelFirst: true,
      translateTime: 'SYS:dd-mm-yyyy h:MM:ss TT',
    },
  } : undefined,
});

export const httpLogger = morgan('dev');
