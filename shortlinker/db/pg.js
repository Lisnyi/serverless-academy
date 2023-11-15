import pg from "pg";
const { Client } = pg;

const { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } = process.env;

const clientConfig = {
  host: DB_HOST,
  port: DB_PORT,
  database: DB_NAME,
  user: DB_USER,
  password: DB_PASSWORD,
};

const client = new Client(clientConfig);

export { client };
