import mysql from 'mysql2/promise';

import dotenv from 'dotenv';

dotenv.config();

export default mysql.createPool({
  host: process.env.DB_HOSTNAME,
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
})