import * as dotenv from 'dotenv';

const envFound = dotenv.config();
if (!envFound) {
  // Throw generic error
  throw new Error("Couldn't find .env file");
}

export default {
  // Environment
  env: process.env.NODE_ENV || 'development',

  // Application port.
  port: parseInt(process.env.PORT) || 3000,

  // DB connection options.
  database: {
    url: process.env.DB_URL,
  },

};
